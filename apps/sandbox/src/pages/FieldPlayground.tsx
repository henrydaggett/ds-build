import { useDialKit } from 'dialkit';
import { DsCheckbox, DsField, DsSelect, DsTextInput } from '@ds-build/ui';
import { Stage } from '../components/Playground';
import { bool, jsx, jsxStacked, str } from '../lib/jsx';

const roles = [
  { value: 'designer', label: 'Designer' },
  { value: 'engineer', label: 'Engineer' },
  { value: 'pm', label: 'Product manager' },
];

const controls = ['DsTextInput', 'DsSelect', 'DsCheckbox'] as const;
type Control = (typeof controls)[number];

const controlSnippets: Record<Control, string> = {
  DsTextInput: jsx('DsTextInput', ['type="email"', 'placeholder="you@example.com"']),
  DsSelect: jsx('DsSelect', [
    'placeholder="Select a role"',
    `items={[${roles.map((r) => `{ value: '${r.value}', label: '${r.label}' }`).join(', ')}]}`,
  ]),
  DsCheckbox: jsx('DsCheckbox', ['label="I agree to the terms"']),
};

export function FieldPlayground() {
  const dial = useDialKit('Field', {
    control: { type: 'select', options: [...controls], default: 'DsTextInput' },
    label: { type: 'text', default: 'Email', placeholder: 'Label' },
    description: { type: 'text', default: "We'll never share your email.", placeholder: 'Helper text' },
    error: { type: 'text', default: 'Enter a valid email address.', placeholder: 'Error text' },
    invalid: false,
    disabled: false,
  });

  const control = dial.control as Control;
  const label = control === 'DsCheckbox' ? undefined : dial.label || undefined;

  const snippet = jsxStacked(
    'DsField',
    [
      str('label', label),
      str('description', dial.description),
      str('error', dial.error),
      bool('invalid', dial.invalid),
      bool('disabled', dial.disabled),
    ],
    [controlSnippets[control]],
  );

  return (
    <Stage snippet={snippet} width={320}>
      <DsField
        key={control}
        label={label}
        description={dial.description || undefined}
        error={dial.error || undefined}
        invalid={dial.invalid}
        disabled={dial.disabled}
      >
        {control === 'DsTextInput' ? (
          <DsTextInput type="email" placeholder="you@example.com" />
        ) : control === 'DsSelect' ? (
          <DsSelect placeholder="Select a role" items={roles} />
        ) : (
          <DsCheckbox label="I agree to the terms" />
        )}
      </DsField>
    </Stage>
  );
}
