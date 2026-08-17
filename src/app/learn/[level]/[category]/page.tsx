'use client';

import { useParams } from 'next/navigation';
import { curriculum } from '@/data/curriculum';
import * as LucideIcons from 'lucide-react';
import { ChevronLeft, ArrowRight, PlayCircle, CheckCircle2 } from 'lucide-react';

function getIcon(name: string, className: string = 'w-5 h-5') {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon className={className} /> : null;
}

export default function CategoryPage() {
  const params = useParams();
  const level = curriculum.find((l) => l.id === params.level);
  const category = level?.categories.find((c) => c.id === params.category);

  if (!level || !category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-white">Not found</h1>
        <a href="/learn" className="text-brand-400 mt-4 inline-block">Back to curriculum</a>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <a
        href={`/learn/${level.id}`}
        className="inline-flex items-center gap-2 text-surface-400 hover:text-brand-400 transition-colors mb-8"
      >
        <ChevronLeft className="w-4 h-4" />
        {level.title}
      </a>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center text-brand-400">
          {getIcon(category.icon, 'w-6 h-6')}
        </div>
        <div>
          <span className="text-surface-500 text-xs font-mono">#{category.number}</span>
          <h1 className="text-2xl font-bold text-white">{category.title}</h1>
        </div>
      </div>
      <p className="text-surface-400 mb-10">{category.description}</p>

      {/* Reading sections */}
      {category.sections && category.sections.length > 0 && (
        <div className="glass-card-static p-6 mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Topics Covered</h2>
          <div className="space-y-3">
            {category.sections.map((section, i) => (
              <div key={i} className="flex items-center gap-3 text-surface-300">
                <div className="w-6 h-6 rounded-full bg-surface-700 flex items-center justify-center text-xs text-surface-400 font-mono shrink-0">
                  {i + 1}
                </div>
                {section}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Exercises list */}
      {category.exercises.length > 0 && (
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Exercises ({category.exercises.length})
          </h2>
          <div className="space-y-3">
            {category.exercises.map((exercise, i) => (
              <a
                key={exercise.id}
                href={`/learn/${level.id}/${category.id}/${exercise.id}`}
                className="glass-card p-4 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-surface-700 flex items-center justify-center text-surface-400 font-mono text-sm shrink-0 group-hover:bg-brand-500/10 group-hover:text-brand-400 transition-colors">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium text-sm">{exercise.title}</h3>
                  <p className="text-surface-500 text-xs truncate">{exercise.description}</p>
                </div>
                <PlayCircle className="w-5 h-5 text-surface-600 group-hover:text-brand-400 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Start button */}
      {category.exercises.length > 0 && (
        <div className="mt-8 text-center">
          <a
            href={`/learn/${level.id}/${category.id}/${category.exercises[0].id}`}
            className="btn-primary"
          >
            Start First Exercise
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      )}
    </div>
  );
}
