import type { ReactNode } from 'react';
import { SnippetView } from './SnippetView';

/** Live preview with the generated snippet underneath. `width` constrains full-width controls. */
export function Stage({
  children,
  snippet,
  note,
  width,
}: {
  children: ReactNode;
  snippet: string;
  note?: ReactNode;
  width?: number;
}) {
  return (
    <div className="stage-card">
      <div className="stage">
        {width ? (
          <div className="stage-inner" style={{ width: `min(100%, ${width}px)` }}>
            {children}
          </div>
        ) : (
          children
        )}
      </div>
      <div className="stage-footer">
        <SnippetView value={snippet} />
        <button
          type="button"
          className="toolbar-button snippet-copy"
          onClick={() => {
            void navigator.clipboard?.writeText(snippet);
          }}
        >
          Copy
        </button>
      </div>
      {note && <p className="stage-note">{note}</p>}
    </div>
  );
}
