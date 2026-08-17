'use client';

import {
  Sprout, Rocket, Flame, ArrowRight, Code2, CheckCircle2,
  BookOpen, Terminal, TrendingUp, Zap
} from 'lucide-react';
import { curriculum, getLevelStats } from '@/data/curriculum';

const levelIcons: Record<string, React.ReactNode> = {
  Sprout: <Sprout className="w-8 h-8" />,
  Rocket: <Rocket className="w-8 h-8" />,
  Flame: <Flame className="w-8 h-8" />,
};

const levelColors: Record<string, string> = {
  emerald: 'from-brand-500 to-brand-400 text-brand-400 border-brand-500/30',
  blue: 'from-blue-500 to-blue-400 text-blue-400 border-blue-500/30',
  amber: 'from-amber-500 to-amber-400 text-amber-400 border-amber-500/30',
};

export default function HomePage() {
  const totalExercises = curriculum.reduce(
    (sum, level) => sum + getLevelStats(level).totalExercises, 0
  );
  const totalCategories = curriculum.reduce(
    (sum, level) => sum + getLevelStats(level).totalCategories, 0
  );

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-500/10 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              Interactive Python Learning Platform
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Master Python<br />
              <span className="gradient-text">From Zero to Hero</span>
            </h1>
            <p className="text-lg sm:text-xl text-surface-400 mb-10 max-w-2xl mx-auto">
              {totalCategories} topics, {totalExercises}+ hands-on exercises, built-in Python IDE,
              and real-time progress tracking. No setup required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/learn" className="btn-primary text-lg py-4 px-8">
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/learn" className="btn-secondary text-lg py-4 px-8">
                <BookOpen className="w-5 h-5" />
                Browse Curriculum
              </a>
            </div>
          </div>

          {/* Code preview */}
          <div className="mt-16 max-w-2xl mx-auto">
            <div className="code-window">
              <div className="code-window-dots">
                <div className="dot-red" />
                <div className="dot-yellow" />
                <div className="dot-green" />
                <span className="ml-3 text-surface-500 text-sm font-mono">hello.py</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div><span className="text-purple-400">def</span> <span className="text-brand-400">greet</span><span className="text-surface-400">(</span><span className="text-orange-300">name</span><span className="text-surface-400">):</span></div>
                <div className="ml-6"><span className="text-purple-400">return</span> <span className="text-brand-300">f&quot;Hello, </span><span className="text-surface-400">{'{'}</span><span className="text-orange-300">name</span><span className="text-surface-400">{'}'}</span><span className="text-brand-300">! Welcome to PyMaster&quot;</span></div>
                <div className="mt-3"><span className="text-surface-500"># Try it yourself in our built-in IDE</span></div>
                <div><span className="text-yellow-300">print</span><span className="text-surface-400">(</span><span className="text-brand-400">greet</span><span className="text-surface-400">(</span><span className="text-brand-300">&quot;Mohammed&quot;</span><span className="text-surface-400">))</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            Everything You Need to Learn Python
          </h2>
          <p className="text-surface-400 text-center mb-12 max-w-2xl mx-auto">
            A complete learning experience with tools that help you practice, track, and master every concept.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Terminal className="w-6 h-6" />, title: 'Built-in IDE', desc: 'Write and run Python directly in your browser. No setup needed.' },
              { icon: <CheckCircle2 className="w-6 h-6" />, title: 'Auto Correction', desc: 'Instant feedback on your exercises with expected output comparison.' },
              { icon: <TrendingUp className="w-6 h-6" />, title: 'Progress Tracking', desc: 'Track every exercise, category, and level you complete.' },
              { icon: <Code2 className="w-6 h-6" />, title: `${totalExercises}+ Exercises`, desc: 'From Hello World to decorators, generators, and design patterns.' },
            ].map((feature) => (
              <div key={feature.title} className="glass-card p-6">
                <div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center text-brand-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-surface-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Levels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Your Learning Path
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {curriculum.map((level) => {
              const stats = getLevelStats(level);
              const colorClass = levelColors[level.color] || levelColors.emerald;
              return (
                <a key={level.id} href={`/learn/${level.id}`} className="glass-card p-8 group">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colorClass.split(' ')[0]} ${colorClass.split(' ')[1]} flex items-center justify-center text-white mb-6`}>
                    {levelIcons[level.icon]}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{level.title}</h3>
                  <p className={`text-sm font-medium mb-3 ${colorClass.split(' ')[2]}`}>{level.subtitle}</p>
                  <p className="text-surface-400 text-sm mb-6">{level.description}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-surface-500">{stats.totalCategories} topics</span>
                    <span className="text-surface-500">{stats.totalExercises} exercises</span>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-brand-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Start learning</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
