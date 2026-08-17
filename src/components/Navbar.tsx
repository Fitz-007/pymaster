'use client';

import { useAuth } from '@/lib/AuthContext';
import { LogIn, LogOut, User, TrendingUp } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const { user, logOut, loading } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-surface-900/80 backdrop-blur-md border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-brand-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg font-mono">&gt;_</span>
            </div>
            <span className="text-xl font-bold text-white">
              Py<span className="text-brand-400">Master</span>
            </span>
          </a>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/learn" className="text-surface-300 hover:text-brand-400 transition-colors font-medium">
              Learn
            </a>
            <a href="/progress" className="text-surface-300 hover:text-brand-400 transition-colors font-medium">
              Progress
            </a>
          </div>

          {/* Auth section */}
          <div className="flex items-center gap-3">
            {loading ? (
              <div className="w-8 h-8 rounded-full bg-surface-700 animate-pulse" />
            ) : user ? (
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-surface-800 transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-500/20 flex items-center justify-center text-brand-400">
                    {user.photoURL ? (
                      <img src={user.photoURL} alt="" className="w-8 h-8 rounded-full" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>
                  <span className="text-surface-300 text-sm hidden sm:block max-w-[120px] truncate">
                    {user.displayName || user.email?.split('@')[0]}
                  </span>
                </button>

                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl bg-surface-800 border border-card-border shadow-xl py-2 z-50">
                    <div className="px-4 py-2 border-b border-card-border">
                      <p className="text-white text-sm font-medium truncate">
                        {user.displayName || 'User'}
                      </p>
                      <p className="text-surface-500 text-xs truncate">{user.email}</p>
                    </div>
                    <a
                      href="/progress"
                      className="flex items-center gap-3 px-4 py-2.5 text-surface-300 hover:text-white hover:bg-surface-700 transition-colors text-sm"
                      onClick={() => setMenuOpen(false)}
                    >
                      <TrendingUp className="w-4 h-4" />
                      My Progress
                    </a>
                    <button
                      onClick={() => { logOut(); setMenuOpen(false); }}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-surface-300 hover:text-red-400 hover:bg-surface-700 transition-colors text-sm"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <a href="/login" className="btn-primary text-sm py-2 px-4">
                <LogIn className="w-4 h-4" />
                Sign In
              </a>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
