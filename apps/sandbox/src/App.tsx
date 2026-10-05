import { DsArrowRightIcon } from '@ds-build/ui';
import { useEffect, useState, type ComponentType } from 'react';
import { ButtonPlayground } from './pages/ButtonPlayground';
import { CheckboxGroupPlayground } from './pages/CheckboxGroupPlayground';
import { CheckboxPlayground } from './pages/CheckboxPlayground';
import { FieldPlayground } from './pages/FieldPlayground';
import { FieldsetPlayground } from './pages/FieldsetPlayground';
import { FormPlayground } from './pages/FormPlayground';
import { SelectPlayground } from './pages/SelectPlayground';
import { TextInputPlayground } from './pages/TextInputPlayground';
import { ToggleGroupPlayground } from './pages/ToggleGroupPlayground';
import { TogglePlayground } from './pages/TogglePlayground';

const pages: { id: string; label: string; Page: ComponentType }[] = [
  { id: 'button', label: 'Button', Page: ButtonPlayground },
  { id: 'toggle', label: 'Toggle', Page: TogglePlayground },
  { id: 'toggle-group', label: 'Toggle group', Page: ToggleGroupPlayground },
  { id: 'text-input', label: 'Text input', Page: TextInputPlayground },
  { id: 'select', label: 'Select', Page: SelectPlayground },
  { id: 'checkbox', label: 'Checkbox', Page: CheckboxPlayground },
  { id: 'checkbox-group', label: 'Checkbox group', Page: CheckboxGroupPlayground },
  { id: 'field', label: 'Field', Page: FieldPlayground },
  { id: 'fieldset', label: 'Fieldset', Page: FieldsetPlayground },
  { id: 'form', label: 'Form', Page: FormPlayground },
];

function useHash() {
  const [hash, setHash] = useState(() => window.location.hash.slice(1));

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash.slice(1));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return hash;
}

export default function App() {
  const hash = useHash();
  const active = pages.find((page) => page.id === hash) ?? pages[0];

  return (
    <>
      <nav className="tabs" aria-label="Components">
        {pages.map((page) => (
          <a
            key={page.id}
            className="tab"
            aria-current={page.id === active.id ? 'page' : undefined}
            href={`#${page.id}`}
          >
            {page.label}
          </a>
        ))}
        <div className="tab-external-row">
          <a className="tab tab-external" href="/generator/">
            UI generator
            <DsArrowRightIcon />
          </a>
        </div>
      </nav>
      <main className="content">
        <active.Page key={active.id} />
      </main>
    </>
  );
}
