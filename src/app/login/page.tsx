'use client';

import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { Mail, Lock, User, LogIn, Chrome, ArrowRight, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const { user, signIn, signUp, signInWithGoogle } = useAuth();
  const router = useRouter();
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  // Redirect if already logged in
  if (user) {
    router.push('/learn');
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = mode === 'login'
      ? await signIn(email, password)
      : await signUp(email, password, name);

    if (result.success) {
      router.push('/learn');
    } else {
      setError(result.error || 'Something went wrong');
    }
    setLoading(false);
  }

  async function handleGoogle() {
    setError('');
    setLoading(true);
    const result = await signInWithGoogle();
    if (result.success) {
      router.push('/learn');
    } else {
      setError(result.error || 'Google sign-in failed');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 rounded-xl bg-brand-500 flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-2xl font-mono">&gt;_</span>
          </div>
          <h1 className="text-2xl font-bold text-white">
            {mode === 'login' ? 'Welcome back' : 'Create your account'}
          </h1>
          <p className="text-surface-400 mt-1 text-sm">
            {mode === 'login'
              ? 'Sign in to continue your Python journey'
              : 'Start learning Python from zero to mastery'}
          </p>
        </div>

        {/* Card */}
        <div className="glass-card-static p-8">
          {/* Error */}
          {error && (
            <div className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20 mb-6">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-red-300 text-sm">{error}</p>
            </div>
          )}

          {/* Google sign-in */}
          <button
            onClick={handleGoogle}
            disabled={loading}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-lg
                       bg-surface-700 border border-card-border text-white font-medium
                       hover:bg-surface-600 hover:border-surface-500 transition-all
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-card-border" />
            <span className="text-surface-500 text-xs uppercase tracking-wider">or</span>
            <div className="flex-1 h-px bg-card-border" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-surface-400 text-sm mb-1.5">Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-500" />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-card-border rounded-lg
                               text-white placeholder:text-surface-400 focus:outline-none focus:border-brand-500
                               transition-colors"
                  />
                </div>
              </div>
            )}
            <div>
              <label className="block text-surface-400 text-sm mb-1.5">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-card-border rounded-lg
                             text-white placeholder:text-surface-400 focus:outline-none focus:border-brand-500
                             transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-surface-400 text-sm mb-1.5">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-500" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 6 characters"
                  required
                  minLength={6}
                  className="w-full pl-10 pr-4 py-3 bg-surface-800 border border-card-border rounded-lg
                             text-white placeholder:text-surface-400 focus:outline-none focus:border-brand-500
                             transition-colors"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                'Please wait...'
              ) : mode === 'login' ? (
                <><LogIn className="w-4 h-4" /> Sign In</>
              ) : (
                <><ArrowRight className="w-4 h-4" /> Create Account</>
              )}
            </button>
          </form>

          {/* Toggle mode */}
          <p className="text-center text-surface-400 text-sm mt-6">
            {mode === 'login' ? (
              <>
                Don&apos;t have an account?{' '}
                <button onClick={() => { setMode('signup'); setError(''); }} className="text-brand-400 hover:text-brand-300 font-medium">
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button onClick={() => { setMode('login'); setError(''); }} className="text-brand-400 hover:text-brand-300 font-medium">
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
