import { initializeApp, getApps } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDWQ_6pd2oUKUmx-Fy1LMRFXdqcXWjL1c",
  authDomain: "pymaster-76c26.firebaseapp.com",
  projectId: "pymaster-76c26",
  storageBucket: "pymaster-76c26.firebasestorage.app",
  messagingSenderId: "618961775454",
  appId: "1:618961775454:web:2d699877d36da76b1f3dcf"
};

// Initialize Firebase (prevent double-init in Next.js hot reload)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
