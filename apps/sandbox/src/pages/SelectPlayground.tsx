import { useDialKit } from 'dialkit';
import { DsSelect, type SelectSize } from '@ds-build/ui';
import { Stage } from '../components/Playground';
import { bool, jsxStacked, str } from '../lib/jsx';

const sizes: SelectSize[] = ['small', 'medium', 'large'];

const countries = [
  { value: 'uk', label: 'United Kingdom' },
  { value: 'us', label: 'United States' },
  { value: 'fr', label: 'France' },
  { value: 'de', label: 'Germany' },
  { value: 'jp', label: 'Japan' },
];

const itemsSnippet = `{[\n${countries
  .map((c) => `  { value: '${c.value}', label: '${c.label}' },`)
  .join('\n')}\n]}`;

export function SelectPlayground() {
  const dial = useDialKit('Select', {
    placeholder: { type: 'text', default: 'Select a country', placeholder: 'Placeholder' },
    selected: { type: 'select', options: ['none', ...countries.map((c) => c.value)], default: 'none' },
    size: { type: 'select', options: sizes, default: 'medium' },
    disabled: false,
  });

  const size = dial.size as SelectSize;
  const defaultValue = dial.selected === 'none' ? undefined : dial.selected;

  const snippet = jsxStacked('DsSelect', [
    str('size', size, 'medium'),
    str('placeholder', dial.placeholder),
    str('defaultValue', defaultValue),
    bool('disabled', dial.disabled),
    'aria-label="Country"',
    `items=${itemsSnippet}`,
  ]);

  return (
    <Stage snippet={snippet} width={320}>
      <DsSelect
        key={dial.selected}
        size={size}
        placeholder={dial.placeholder}
        defaultValue={defaultValue}
        disabled={dial.disabled}
        aria-label="Country"
        items={countries}
      />
    </Stage>
  );
}
