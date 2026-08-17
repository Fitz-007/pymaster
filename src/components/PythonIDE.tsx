'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { Play, RotateCcw, CheckCircle2, XCircle, Loader2, Terminal } from 'lucide-react';

interface PythonIDEProps {
  starterCode: string;
  expectedOutput?: string;
  expectedOutputContains?: string[];
  onSuccess?: () => void;
}

export default function PythonIDE({
  starterCode,
  expectedOutput,
  expectedOutputContains,
  onSuccess,
}: PythonIDEProps) {
  const [code, setCode] = useState(starterCode);
  const [output, setOutput] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'running' | 'success' | 'error'>('idle');
  const [pyodideReady, setPyodideReady] = useState(false);
  const [loadingPyodide, setLoadingPyodide] = useState(false);
  const pyodideRef = useRef<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Load Pyodide
  const loadPyodide = useCallback(async () => {
    if (pyodideRef.current) return pyodideRef.current;
    setLoadingPyodide(true);
    try {
      // Load Pyodide script
      if (!(window as any).loadPyodide) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Failed to load Pyodide'));
          document.head.appendChild(script);
        });
      }
      const pyodide = await (window as any).loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/',
      });
      pyodideRef.current = pyodide;
      setPyodideReady(true);
      return pyodide;
    } catch (err) {
      setOutput('Failed to load Python runtime. Please refresh and try again.');
      setStatus('error');
    } finally {
      setLoadingPyodide(false);
    }
  }, []);

  // Auto-load Pyodide on mount
  useEffect(() => {
    loadPyodide();
  }, [loadPyodide]);

  // Run code
  const runCode = async () => {
    setStatus('running');
    setOutput('');

    const pyodide = pyodideRef.current || (await loadPyodide());
    if (!pyodide) return;

    try {
      // Capture stdout
      pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
      `);

      // Handle input() by providing mock values
      const codeWithInputMock = `
import builtins
_input_values = iter(["test", "42", "10", "hello", "5"])
def _mock_input(prompt=""):
    try:
        val = next(_input_values)
        return val
    except StopIteration:
        return "test"
builtins.input = _mock_input
` + code;

      pyodide.runPython(codeWithInputMock);

      const stdout = pyodide.runPython('sys.stdout.getvalue()');
      const stderr = pyodide.runPython('sys.stderr.getvalue()');

      const result = stdout.trimEnd();
      const errorOutput = stderr.trim();

      if (errorOutput) {
        setOutput(result ? result + '\n' + errorOutput : errorOutput);
        setStatus('error');
        return;
      }

      setOutput(result || '(No output)');

      // Check against expected output
      let passed = false;
      if (expectedOutput !== undefined) {
        passed = result === expectedOutput;
      } else if (expectedOutputContains && expectedOutputContains.length > 0) {
        passed = expectedOutputContains.every((s) => result.includes(s));
      } else {
        // No expected output — just check it ran without error
        passed = true;
      }

      if (passed) {
        setStatus('success');
        onSuccess?.();
      } else {
        setStatus('error');
        if (expectedOutput) {
          setOutput(
            result +
            '\n\n--- Expected ---\n' +
            expectedOutput +
            '\n\n--- Got ---\n' +
            result
          );
        }
      }
    } catch (err: any) {
      const errorMsg = err.message || String(err);
      // Extract the useful part of Python errors
      const lines = errorMsg.split('\n');
      const pythonError = lines.filter(
        (l: string) =>
          l.includes('Error') || l.includes('error') || l.includes('Traceback') || !l.startsWith('  ')
      ).join('\n');
      setOutput(pythonError || errorMsg);
      setStatus('error');
    }
  };

  // Reset code
  const resetCode = () => {
    setCode(starterCode);
    setOutput('');
    setStatus('idle');
  };

  // Handle tab in textarea
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = textareaRef.current;
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      setCode(newCode);
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = start + 4;
      }, 0);
    }
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      runCode();
    }
  };

  return (
    <div className="code-window">
      {/* Title bar */}
      <div className="code-window-dots justify-between">
        <div className="flex items-center gap-2">
          <div className="dot-red" />
          <div className="dot-yellow" />
          <div className="dot-green" />
          <span className="ml-3 text-surface-500 text-sm font-mono">main.py</span>
        </div>
        <div className="flex items-center gap-2">
          {loadingPyodide && (
            <span className="text-surface-500 text-xs flex items-center gap-1">
              <Loader2 className="w-3 h-3 animate-spin" />
              Loading Python...
            </span>
          )}
          {pyodideReady && (
            <span className="text-brand-500 text-xs flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Ready
            </span>
          )}
        </div>
      </div>

      {/* Code editor */}
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            setStatus('idle');
          }}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent text-surface-200 font-mono text-sm p-4 resize-none
                     focus:outline-none focus:ring-0 border-none min-h-[200px] leading-relaxed"
          spellCheck={false}
          placeholder="Write your Python code here..."
          style={{ tabSize: 4 }}
        />
      </div>

      {/* Action bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-t border-card-border bg-surface-800/50">
        <button
          onClick={runCode}
          disabled={status === 'running' || loadingPyodide}
          className="btn-primary py-2 px-4 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'running' ? (
            <><Loader2 className="w-4 h-4 animate-spin" /> Running...</>
          ) : (
            <><Play className="w-4 h-4" /> Run Code</>
          )}
        </button>
        <button onClick={resetCode} className="btn-secondary py-2 px-4 text-sm">
          <RotateCcw className="w-4 h-4" /> Reset
        </button>
        <span className="text-surface-500 text-xs ml-auto hidden sm:block">
          Ctrl+Enter to run
        </span>
      </div>

      {/* Output panel */}
      <div className="border-t border-card-border">
        <div className="flex items-center gap-2 px-4 py-2 bg-surface-800/30">
          <Terminal className="w-4 h-4 text-surface-500" />
          <span className="text-surface-500 text-xs font-mono">Output</span>
          {status === 'success' && (
            <span className="ml-auto flex items-center gap-1 text-brand-400 text-xs font-medium">
              <CheckCircle2 className="w-4 h-4" /> Correct!
            </span>
          )}
          {status === 'error' && (
            <span className="ml-auto flex items-center gap-1 text-red-400 text-xs font-medium">
              <XCircle className="w-4 h-4" /> Try again
            </span>
          )}
        </div>
        <pre
          className={`p-4 text-sm font-mono min-h-[80px] max-h-[300px] overflow-auto whitespace-pre-wrap ${
            status === 'success'
              ? 'text-brand-300'
              : status === 'error'
              ? 'text-red-300'
              : 'text-surface-400'
          }`}
        >
          {output || 'Click "Run Code" to see the output...'}
        </pre>
      </div>
    </div>
  );
}
