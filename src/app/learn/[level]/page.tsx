'use client';

import { useParams } from 'next/navigation';
import { curriculum, getLevelStats } from '@/data/curriculum';
import * as LucideIcons from 'lucide-react';
import { ArrowRight, ChevronLeft } from 'lucide-react';

function getIcon(name: string, className: string = 'w-5 h-5') {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon className={className} /> : null;
}

export default function LevelPage() {
  const params = useParams();
  const level = curriculum.find((l) => l.id === params.level);

  if (!level) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-white">Level not found</h1>
        <a href="/learn" className="text-brand-400 mt-4 inline-block">Back to curriculum</a>
      </div>
    );
  }

  const stats = getLevelStats(level);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <a href="/learn" className="inline-flex items-center gap-2 text-surface-400 hover:text-brand-400 transition-colors mb-8">
        <ChevronLeft className="w-4 h-4" />
        All Levels
      </a>

      <div className="flex items-center gap-4 mb-4">
        <div className="w-14 h-14 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400">
          {getIcon(level.icon, 'w-7 h-7')}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-white">{level.title}</h1>
          <p className="text-surface-400">{level.subtitle}</p>
        </div>
      </div>
      <p className="text-surface-400 mb-10 max-w-2xl">{level.description}</p>
      <p className="text-surface-500 text-sm mb-8">
        {stats.totalCategories} topics &middot; {stats.totalExercises} exercises
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {level.categories.map((cat) => (
          <a
            key={cat.id}
            href={`/learn/${level.id}/${cat.id}`}
            className="glass-card p-5 group flex flex-col"
          >
            <div className="flex items-start gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 shrink-0">
                {getIcon(cat.icon)}
              </div>
              <div className="min-w-0">
                <span className="text-surface-500 text-xs font-mono">#{cat.number}</span>
                <h3 className="text-white font-semibold text-sm leading-tight">{cat.title}</h3>
              </div>
            </div>
            <p className="text-surface-400 text-xs leading-relaxed mb-4 flex-1">{cat.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-surface-500 text-xs">
                {cat.exercises.length > 0 ? `${cat.exercises.length} exercises` : 'Reading'}
              </span>
              <ArrowRight className="w-4 h-4 text-surface-600 group-hover:text-brand-400 transition-colors" />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
