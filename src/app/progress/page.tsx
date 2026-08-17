'use client';

import { curriculum, getLevelStats } from '@/data/curriculum';
import { useAuth } from '@/lib/AuthContext';
import * as LucideIcons from 'lucide-react';
import { Trophy, Target, Flame, BarChart3, LogIn } from 'lucide-react';

function getIcon(name: string, className: string = 'w-5 h-5') {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon className={className} /> : null;
}

export default function ProgressPage() {
  const { user, loading, progress } = useAuth();

  const totalExercises = curriculum.reduce(
    (sum, level) => sum + getLevelStats(level).totalExercises, 0
  );
  const completedCount = Object.values(progress).filter((p) => p.completed).length;
  const percentage = totalExercises > 0 ? Math.round((completedCount / totalExercises) * 100) : 0;

  const getLevelProgress = (levelId: string) => {
    const level = curriculum.find((l) => l.id === levelId);
    if (!level) return { completed: 0, total: 0 };
    const total = getLevelStats(level).totalExercises;
    const completed = Object.keys(progress).filter(
      (key) => key.startsWith(`${levelId}/`) && progress[key].completed
    ).length;
    return { completed, total };
  };

  const getCategoryProgress = (levelId: string, categoryId: string) => {
    const level = curriculum.find((l) => l.id === levelId);
    const category = level?.categories.find((c) => c.id === categoryId);
    if (!category) return { completed: 0, total: 0 };
    const total = category.exercises.length;
    const completed = category.exercises.filter(
      (ex) => progress[`${levelId}/${categoryId}/${ex.id}`]?.completed
    ).length;
    return { completed, total };
  };

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <div className="w-8 h-8 border-2 border-brand-500 border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-surface-400 mt-4">Loading your progress...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-md mx-auto px-4 py-20 text-center">
        <div className="glass-card-static p-10">
          <LogIn className="w-12 h-12 text-brand-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-white mb-2">Sign in to track progress</h1>
          <p className="text-surface-400 mb-6 text-sm">
            Your progress is saved to the cloud so you never lose it.
          </p>
          <a href="/login" className="btn-primary justify-center w-full">
            <LogIn className="w-4 h-4" />
            Sign In
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center gap-3 mb-8">
        <h1 className="text-3xl font-bold text-white">Your Progress</h1>
        <span className="text-surface-500 text-sm">({user.displayName || user.email})</span>
      </div>

      {/* Overall stats */}
      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        <div className="glass-card-static p-6 text-center">
          <Trophy className="w-8 h-8 text-brand-400 mx-auto mb-2" />
          <div className="text-3xl font-bold text-white">{completedCount}</div>
          <div className="text-surface-500 text-sm">Exercises Completed</div>
        </div>
        <div className="glass-card-static p-6 text-center">
          <Target className="w-8 h-8 text-blue-400 mx-auto mb-2" />
          <div className="text-3xl font-bold text-white">{percentage}%</div>
          <div className="text-surface-500 text-sm">Overall Progress</div>
        </div>
        <div className="glass-card-static p-6 text-center">
          <BarChart3 className="w-8 h-8 text-amber-400 mx-auto mb-2" />
          <div className="text-3xl font-bold text-white">{totalExercises}</div>
          <div className="text-surface-500 text-sm">Total Exercises</div>
        </div>
      </div>

      {/* Overall progress bar */}
      <div className="glass-card-static p-6 mb-12">
        <div className="flex items-center justify-between mb-3">
          <span className="text-white font-medium">Overall Progress</span>
          <span className="text-brand-400 font-mono text-sm">{completedCount}/{totalExercises}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-bar-fill" style={{ width: `${percentage}%` }} />
        </div>
      </div>

      {/* Per-level breakdown */}
      <div className="space-y-8">
        {curriculum.map((level) => {
          const lp = getLevelProgress(level.id);
          const levelPct = lp.total > 0 ? Math.round((lp.completed / lp.total) * 100) : 0;
          return (
            <div key={level.id} className="glass-card-static p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400">
                  {getIcon(level.icon)}
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-bold text-white">{level.title}</h2>
                  <p className="text-surface-500 text-xs">{lp.completed}/{lp.total} exercises</p>
                </div>
                <span className="text-brand-400 font-mono text-sm font-medium">{levelPct}%</span>
              </div>
              <div className="progress-bar mb-6">
                <div className="progress-bar-fill" style={{ width: `${levelPct}%` }} />
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {level.categories.map((cat) => {
                  const cp = getCategoryProgress(level.id, cat.id);
                  const isComplete = cp.total > 0 && cp.completed === cp.total;
                  return (
                    <a
                      key={cat.id}
                      href={`/learn/${level.id}/${cat.id}`}
                      className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                        isComplete
                          ? 'border-brand-500/30 bg-brand-500/5'
                          : 'border-card-border hover:border-surface-500'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ${
                        isComplete ? 'bg-brand-500/20 text-brand-400' : 'bg-surface-700 text-surface-400'
                      }`}>
                        {getIcon(cat.icon, 'w-4 h-4')}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-white text-xs font-medium truncate">{cat.title}</div>
                        <div className="text-surface-500 text-xs">{cp.completed}/{cp.total}</div>
                      </div>
                      {isComplete && <Flame className="w-4 h-4 text-brand-400 shrink-0" />}
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
