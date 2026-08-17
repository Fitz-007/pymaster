'use client';

import { curriculum, getLevelStats } from '@/data/curriculum';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';

function getIcon(name: string, className: string = 'w-5 h-5') {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon className={className} /> : null;
}

const levelColorMap: Record<string, { bg: string; text: string; border: string; badge: string }> = {
  emerald: { bg: 'bg-brand-500/10', text: 'text-brand-400', border: 'border-brand-500/20', badge: 'bg-brand-500' },
  blue: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20', badge: 'bg-blue-500' },
  amber: { bg: 'bg-amber-500/10', text: 'text-amber-400', border: 'border-amber-500/20', badge: 'bg-amber-500' },
};

export default function LearnPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white mb-3">Python Curriculum</h1>
        <p className="text-surface-400 max-w-xl mx-auto">
          From absolute beginner to advanced mastery. Pick a level to start.
        </p>
      </div>

      <div className="space-y-16">
        {curriculum.map((level) => {
          const stats = getLevelStats(level);
          const colors = levelColorMap[level.color] || levelColorMap.emerald;
          return (
            <section key={level.id}>
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text}`}>
                  {getIcon(level.icon, 'w-6 h-6')}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{level.title}</h2>
                  <p className="text-surface-500 text-sm">
                    {stats.totalCategories} topics &middot; {stats.totalExercises} exercises
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {level.categories.map((cat) => (
                  <a
                    key={cat.id}
                    href={`/learn/${level.id}/${cat.id}`}
                    className="glass-card p-5 group flex flex-col"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center ${colors.text} shrink-0`}>
                        {getIcon(cat.icon)}
                      </div>
                      <div className="min-w-0">
                        <span className="text-surface-500 text-xs font-mono">#{cat.number}</span>
                        <h3 className="text-white font-semibold text-sm leading-tight">{cat.title}</h3>
                      </div>
                    </div>
                    <p className="text-surface-400 text-xs leading-relaxed mb-4 flex-1">
                      {cat.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-surface-500 text-xs">
                        {cat.exercises.length > 0
                          ? `${cat.exercises.length} exercises`
                          : 'Reading'}
                      </span>
                      <ArrowRight className="w-4 h-4 text-surface-600 group-hover:text-brand-400 transition-colors" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
