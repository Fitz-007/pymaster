'use client';

import { useParams } from 'next/navigation';
import { findExercise, getNextExercise } from '@/data/curriculum';
import PythonIDE from '@/components/PythonIDE';
import { ChevronLeft, ArrowRight, Lightbulb, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/lib/AuthContext';

export default function ExercisePage() {
  const params = useParams();
  const levelId = params.level as string;
  const categoryId = params.category as string;
  const exerciseId = params.exercise as string;
  const result = findExercise(levelId, categoryId, exerciseId);
  const { markExerciseComplete } = useAuth();
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (!result) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-white">Exercise not found</h1>
        <a href="/learn" className="text-brand-400 mt-4 inline-block">Back to curriculum</a>
      </div>
    );
  }

  const { level, category, exercise } = result;
  const nextEx = getNextExercise(levelId, categoryId, exerciseId);

  const handleSuccess = () => {
    setCompleted(true);
    const exKey = `${levelId}/${categoryId}/${exerciseId}`;
    markExerciseComplete(exKey);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <a
        href={`/learn/${levelId}/${categoryId}`}
        className="inline-flex items-center gap-2 text-surface-400 hover:text-brand-400 transition-colors mb-6"
      >
        <ChevronLeft className="w-4 h-4" />
        {category.title}
      </a>

      <div className="grid lg:grid-cols-[1fr,1.5fr] gap-6">
        {/* Left: Instructions */}
        <div className="space-y-6">
          <div>
            <span className="text-surface-500 text-xs font-mono">
              {level.title} &gt; {category.title} &gt; Exercise
            </span>
            <h1 className="text-2xl font-bold text-white mt-1">{exercise.title}</h1>
            <p className="text-surface-400 mt-2">{exercise.description}</p>
          </div>

          <div className="glass-card-static p-5">
            <h2 className="text-sm font-semibold text-white mb-3">Instructions</h2>
            <ul className="space-y-2">
              {exercise.instructions.map((instruction, i) => (
                <li key={i} className="flex items-start gap-2 text-surface-300 text-sm">
                  <span className="text-brand-400 mt-0.5 shrink-0">&#x2022;</span>
                  {instruction}
                </li>
              ))}
            </ul>
          </div>

          {exercise.expectedOutput && (
            <div className="glass-card-static p-5">
              <h2 className="text-sm font-semibold text-white mb-3">Expected Output</h2>
              <pre className="bg-surface-900 rounded-lg p-3 text-brand-300 text-sm font-mono whitespace-pre-wrap">
                {exercise.expectedOutput}
              </pre>
            </div>
          )}

          {/* Hint */}
          <button
            onClick={() => setShowHint(!showHint)}
            className="flex items-center gap-2 text-surface-400 hover:text-yellow-400 transition-colors text-sm"
          >
            <Lightbulb className="w-4 h-4" />
            {showHint ? 'Hide Hint' : 'Show Hint'}
          </button>
          {showHint && (
            <div className="glass-card-static p-4 border-yellow-500/20 bg-yellow-500/5">
              <p className="text-yellow-300 text-sm">{exercise.hint}</p>
            </div>
          )}

          {/* Solution */}
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-2 text-surface-400 hover:text-red-400 transition-colors text-sm"
          >
            {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showSolution ? 'Hide Solution' : 'Show Solution'}
          </button>
          {showSolution && (
            <div className="code-window">
              <div className="code-window-dots">
                <div className="dot-red" /><div className="dot-yellow" /><div className="dot-green" />
                <span className="ml-3 text-surface-500 text-xs font-mono">solution.py</span>
              </div>
              <pre className="p-4 text-sm font-mono text-surface-300 whitespace-pre-wrap">
                {exercise.solution}
              </pre>
            </div>
          )}

          {/* Next exercise */}
          {completed && nextEx && (
            <a
              href={`/learn/${nextEx.levelId}/${nextEx.categoryId}/${nextEx.exerciseId}`}
              className="btn-primary w-full justify-center"
            >
              Next Exercise
              <ArrowRight className="w-5 h-5" />
            </a>
          )}
        </div>

        {/* Right: IDE */}
        <div className="lg:sticky lg:top-20 lg:self-start">
          <PythonIDE
            starterCode={exercise.starterCode}
            expectedOutput={exercise.expectedOutput}
            expectedOutputContains={exercise.expectedOutputContains}
            onSuccess={handleSuccess}
          />
        </div>
      </div>
    </div>
  );
}
