'use client';

import { useParams } from 'next/navigation';
import { curriculum } from '@/data/curriculum';
import * as LucideIcons from 'lucide-react';
import { ChevronLeft, ArrowRight, PlayCircle, CheckCircle2, BookOpen } from 'lucide-react';
import { useAuth } from '@/lib/AuthContext';
import { useState } from 'react';

function getIcon(name: string, className: string = 'w-5 h-5') {
  const Icon = (LucideIcons as any)[name];
  return Icon ? <Icon className={className} /> : null;
}

// Render lesson content with proper formatting
function LessonRenderer({ content }: { content: string }) {
  const lines = content.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Empty line
    if (line.trim() === '') {
      i++;
      continue;
    }

    // Code block
    if (line.trim().startsWith('```')) {
      const lang = line.trim().replace('```', '').trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <div key={key++} className="my-4">
          {lang && (
            <div className="flex items-center gap-2 px-4 py-2 bg-surface-800 rounded-t-lg border border-b-0 border-card-border">
              <span className="text-surface-500 text-xs font-mono">{lang}</span>
            </div>
          )}
          <pre className={`bg-surface-900 ${lang ? 'rounded-b-lg' : 'rounded-lg'} border border-card-border p-4 text-sm font-mono text-brand-300 overflow-x-auto whitespace-pre`}>
            {codeLines.join('\n')}
          </pre>
        </div>
      );
      continue;
    }

    // Output block (lines starting with >>>)
    if (line.trim().startsWith('>>>')) {
      elements.push(
        <div key={key++} className="my-2 flex items-start gap-2">
          <span className="text-brand-500 font-mono text-sm shrink-0">→</span>
          <code className="text-brand-400 font-mono text-sm">{line.trim().replace(/^>>>?\s*/, '')}</code>
        </div>
      );
      i++;
      continue;
    }

    // Headers
    if (line.startsWith('## ')) {
      elements.push(
        <h3 key={key++} className="text-lg font-bold text-white mt-8 mb-3 flex items-center gap-2">
          <div className="w-1 h-5 bg-brand-500 rounded-full" />
          {line.replace('## ', '')}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h4 key={key++} className="text-base font-semibold text-white mt-6 mb-2">
          {line.replace('### ', '')}
        </h4>
      );
      i++;
      continue;
    }

    // Bullet points
    if (line.trim().startsWith('- ') || line.trim().startsWith('• ')) {
      const bulletLines: string[] = [];
      while (i < lines.length && (lines[i].trim().startsWith('- ') || lines[i].trim().startsWith('• '))) {
        bulletLines.push(lines[i].trim().replace(/^[-•]\s*/, ''));
        i++;
      }
      elements.push(
        <ul key={key++} className="my-3 space-y-2">
          {bulletLines.map((bl, bi) => (
            <li key={bi} className="flex items-start gap-2 text-surface-300 text-sm leading-relaxed">
              <span className="text-brand-400 mt-1 shrink-0">•</span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(bl) }} />
            </li>
          ))}
        </ul>
      );
      continue;
    }

    // Numbered list
    if (/^\d+\.\s/.test(line.trim())) {
      const numLines: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        numLines.push(lines[i].trim().replace(/^\d+\.\s*/, ''));
        i++;
      }
      elements.push(
        <ol key={key++} className="my-3 space-y-2">
          {numLines.map((nl, ni) => (
            <li key={ni} className="flex items-start gap-3 text-surface-300 text-sm leading-relaxed">
              <span className="text-brand-400 font-mono text-xs mt-0.5 shrink-0 w-5 text-right">{ni + 1}.</span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(nl) }} />
            </li>
          ))}
        </ol>
      );
      continue;
    }

    // Callout/tip boxes (lines starting with 💡 or ⚠️ or ✅ or ❌)
    if (/^[💡⚠️✅❌🔑📝]/.test(line.trim())) {
      const isWarning = line.trim().startsWith('⚠');
      elements.push(
        <div key={key++} className={`my-4 p-4 rounded-lg border ${
          isWarning
            ? 'bg-yellow-500/5 border-yellow-500/20'
            : 'bg-brand-500/5 border-brand-500/20'
        }`}>
          <p className={`text-sm leading-relaxed ${isWarning ? 'text-yellow-300' : 'text-brand-300'}`}
             dangerouslySetInnerHTML={{ __html: formatInline(line.trim()) }} />
        </div>
      );
      i++;
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={key++} className="text-surface-300 text-sm leading-relaxed my-2"
         dangerouslySetInnerHTML={{ __html: formatInline(line.trim()) }} />
    );
    i++;
  }

  return <div className="lesson-content">{elements}</div>;
}

// Format inline markdown: **bold**, `code`, *italic*
function formatInline(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 bg-surface-700 rounded text-brand-300 font-mono text-xs">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em class="text-surface-200">$1</em>');
}

export default function CategoryPage() {
  const params = useParams();
  const { progress } = useAuth();
  const level = curriculum.find((l) => l.id === params.level);
  const category = level?.categories.find((c) => c.id === params.category);
  const [showLesson, setShowLesson] = useState(true);

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
      <p className="text-surface-400 mb-8">{category.description}</p>

      {/* Lesson Content */}
      {category.lesson && (
        <div className="mb-10">
          <button
            onClick={() => setShowLesson(!showLesson)}
            className="flex items-center gap-3 w-full text-left mb-4 group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-white group-hover:text-brand-400 transition-colors">
                📖 Lesson: {category.title}
              </h2>
              <p className="text-surface-500 text-xs">
                {showLesson ? 'Click to collapse' : 'Click to read the full explanation'}
              </p>
            </div>
            <ChevronLeft className={`w-5 h-5 text-surface-400 transition-transform duration-200 ${showLesson ? '-rotate-90' : ''}`} />
          </button>

          {showLesson && (
            <div className="glass-card-static p-6 sm:p-8 border-blue-500/10">
              <LessonRenderer content={category.lesson} />
            </div>
          )}
        </div>
      )}

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
            Practice Exercises ({category.exercises.length})
          </h2>
          <div className="space-y-3">
            {category.exercises.map((exercise, i) => {
              const exKey = `${level.id}/${category.id}/${exercise.id}`;
              const isComplete = progress?.[exKey]?.completed;
              return (
                <a
                  key={exercise.id}
                  href={`/learn/${level.id}/${category.id}/${exercise.id}`}
                  className="glass-card p-4 flex items-center gap-4 group"
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-mono text-sm shrink-0 transition-colors ${
                    isComplete
                      ? 'bg-brand-500/20 text-brand-400'
                      : 'bg-surface-700 text-surface-400 group-hover:bg-brand-500/10 group-hover:text-brand-400'
                  }`}>
                    {isComplete ? <CheckCircle2 className="w-5 h-5" /> : i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-medium text-sm">{exercise.title}</h3>
                    <p className="text-surface-500 text-xs truncate">{exercise.description}</p>
                  </div>
                  <PlayCircle className="w-5 h-5 text-surface-400 group-hover:text-brand-400 transition-colors shrink-0" />
                </a>
              );
            })}
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
