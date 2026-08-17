'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import {
  User,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  updateProfile,
} from 'firebase/auth';
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from 'firebase/firestore';
import { auth, db } from './firebase';

// ── Types ──
interface Progress {
  [key: string]: { completed: boolean; timestamp: number };
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  progress: Progress;
  signUp: (email: string, password: string, name: string) => Promise<{ success: boolean; error?: string }>;
  signIn: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signInWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  logOut: () => Promise<void>;
  markExerciseComplete: (exerciseKey: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

// ── Friendly error messages ──
function getErrorMessage(code: string): string {
  const messages: Record<string, string> = {
    'auth/email-already-in-use': 'This email is already registered. Try signing in instead.',
    'auth/invalid-email': 'Please enter a valid email address.',
    'auth/weak-password': 'Password should be at least 6 characters.',
    'auth/user-not-found': 'No account found with this email.',
    'auth/wrong-password': 'Incorrect password. Please try again.',
    'auth/invalid-credential': 'Invalid email or password. Please try again.',
    'auth/too-many-requests': 'Too many attempts. Please wait a moment and try again.',
    'auth/popup-closed-by-user': 'Google sign-in was cancelled.',
    'auth/network-request-failed': 'Network error. Please check your connection.',
  };
  return messages[code] || 'An unexpected error occurred. Please try again.';
}

// ── Provider ──
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState<Progress>({});

  // Listen for auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);
      if (firebaseUser) {
        // Load progress from Firestore
        await loadProgress(firebaseUser.uid);
      } else {
        setProgress({});
      }
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  // Load progress from Firestore
  async function loadProgress(uid: string) {
    try {
      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setProgress(docSnap.data().progress || {});
      } else {
        // Create user doc on first sign in
        await setDoc(docRef, { progress: {}, createdAt: Date.now() });
        setProgress({});
      }
    } catch (err) {
      console.error('Failed to load progress:', err);
      // Fall back to localStorage
      try {
        const saved = JSON.parse(localStorage.getItem('pymaster_progress') || '{}');
        setProgress(saved);
      } catch {}
    }
  }

  // Mark exercise complete → save to Firestore + localStorage
  async function markExerciseComplete(exerciseKey: string) {
    const updated = {
      ...progress,
      [exerciseKey]: { completed: true, timestamp: Date.now() },
    };
    setProgress(updated);

    // Always save to localStorage as backup
    try {
      localStorage.setItem('pymaster_progress', JSON.stringify(updated));
    } catch {}

    // Save to Firestore if logged in
    if (user) {
      try {
        const docRef = doc(db, 'users', user.uid);
        await updateDoc(docRef, { progress: updated });
      } catch (err) {
        console.error('Failed to save progress:', err);
      }
    }
  }

  // Sign up
  async function handleSignUp(email: string, password: string, name: string) {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (name) await updateProfile(cred.user, { displayName: name });
      // Migrate localStorage progress to Firestore
      await migrateLocalProgress(cred.user.uid);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: getErrorMessage(err.code) };
    }
  }

  // Sign in
  async function handleSignIn(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: getErrorMessage(err.code) };
    }
  }

  // Google sign in
  async function handleGoogleSignIn() {
    try {
      const result = await signInWithPopup(auth, new GoogleAuthProvider());
      await migrateLocalProgress(result.user.uid);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: getErrorMessage(err.code) };
    }
  }

  // Migrate localStorage progress to Firestore (on first sign in)
  async function migrateLocalProgress(uid: string) {
    try {
      const local = JSON.parse(localStorage.getItem('pymaster_progress') || '{}');
      if (Object.keys(local).length === 0) return;

      const docRef = doc(db, 'users', uid);
      const docSnap = await getDoc(docRef);
      const existing = docSnap.exists() ? docSnap.data().progress || {} : {};

      // Merge: keep the most recent completion for each exercise
      const merged = { ...existing };
      for (const [key, val] of Object.entries(local) as [string, any][]) {
        if (!merged[key] || (val.timestamp > (merged[key].timestamp || 0))) {
          merged[key] = val;
        }
      }

      await setDoc(docRef, { progress: merged, createdAt: Date.now() }, { merge: true });
      setProgress(merged);
    } catch (err) {
      console.error('Failed to migrate progress:', err);
    }
  }

  // Log out
  async function handleLogOut() {
    await signOut(auth);
    setProgress({});
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        progress,
        signUp: handleSignUp,
        signIn: handleSignIn,
        signInWithGoogle: handleGoogleSignIn,
        logOut: handleLogOut,
        markExerciseComplete,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// ── Hook ──
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
