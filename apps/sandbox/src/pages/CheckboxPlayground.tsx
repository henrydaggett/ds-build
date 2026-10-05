import { useDialKit } from 'dialkit';
import { DsCheckbox, type CheckboxSize } from '@ds-build/ui';
import { Stage } from '../components/Playground';
import { bool, jsx, str } from '../lib/jsx';

const sizes: CheckboxSize[] = ['small', 'medium', 'large'];

export function CheckboxPlayground() {
  const dial = useDialKit('Checkbox', {
    label: { type: 'text', default: 'Remember me', placeholder: 'Label' },
    size: { type: 'select', options: sizes, default: 'medium' },
    checked: false,
    indeterminate: false,
    disabled: false,
  });

  const size = dial.size as CheckboxSize;
  const label = dial.label.trim() || 'Checkbox';
  const snippet = jsx('DsCheckbox', [
    str('size', size, 'medium'),
    `label="${label}"`,
    bool('defaultChecked', dial.checked),
    bool('indeterminate', dial.indeterminate),
    bool('disabled', dial.disabled),
  ]);

  return (
    <Stage snippet={snippet}>
      <DsCheckbox
        key={String(dial.checked)}
        size={size}
        label={label}
        defaultChecked={dial.checked}
        indeterminate={dial.indeterminate}
        disabled={dial.disabled}
      />
    </Stage>
  );
}
