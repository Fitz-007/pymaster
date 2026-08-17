import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '@/lib/AuthContext';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'PyMaster — Learn Python from Zero to Mastery',
  description: 'Interactive Python learning platform with built-in IDE, exercise correction, and progress tracking.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-surface-900">
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <footer className="border-t border-card-border mt-20 py-8">
            <div className="max-w-7xl mx-auto px-4 text-center text-surface-500 text-sm">
              PyMaster — Built for learning Python from zero to mastery.
            </div>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
