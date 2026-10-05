import { useEffect, useMemo, useState } from 'react';
import { compile } from './compile';
import { Editor } from './Editor';
import { Preview } from './Preview';

const storageKey = 'ds-build:generator';

const starter = `import { DsButton, DsField, DsForm, DsFormActions, DsTextInput } from '@ds-build/ui';

export default function App() {
  return (
    <>
      <DsForm>
        <DsField label="Email" name="email">
          <DsTextInput type="email" placeholder="you@example.com" />
        </DsField>
        <DsFormActions>
          <DsButton type="submit">Subscribe</DsButton>
        </DsFormActions>
      </DsForm>
    </>
  );
}
`;

export function GeneratorApp() {
  const [initialValue, setInitialValue] = useState(() => localStorage.getItem(storageKey) ?? starter);
  const [editorKey, setEditorKey] = useState(0);
  const [code, setCode] = useState(initialValue);
  const [debounced, setDebounced] = useState(initialValue);

  function reset() {
    setInitialValue('');
    setCode('');
    setDebounced('');
    setEditorKey((key) => key + 1);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounced(code);
      localStorage.setItem(storageKey, code);
    }, 300);
    return () => clearTimeout(timer);
  }, [code]);

  const result = useMemo(() => compile(debounced), [debounced]);

  return (
    <div className="generator">
      <div className="editor-panel">
        <div className="toolbar">
          <a className="toolbar-button" href="/">
            Back to components
          </a>
          <button type="button" className="toolbar-button" onClick={reset}>
            Reset
          </button>
        </div>
        <Editor key={editorKey} initialValue={initialValue} onChange={setCode} />
      </div>
      <Preview result={result} />
    </div>
  );
}
