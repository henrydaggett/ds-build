import { Component, type ReactNode } from 'react';
import type { CompileResult } from './compile';

class ErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) return <ErrorPanel message={`Render error: ${this.state.error.message}`} />;
    return this.props.children;
  }
}

function ErrorPanel({ message }: { message: string }) {
  return <pre className="preview-error">{message}</pre>;
}

export function Preview({ result }: { result: CompileResult }) {
  return (
    <div className="preview">
      {'hint' in result ? (
        <pre className="preview-hint">{result.hint}</pre>
      ) : 'error' in result ? (
        <ErrorPanel message={result.error} />
      ) : (
        <ErrorBoundary key={String(result.Component)}>
          <result.Component />
        </ErrorBoundary>
      )}
    </div>
  );
}
