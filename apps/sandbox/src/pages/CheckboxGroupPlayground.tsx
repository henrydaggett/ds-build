import { useDialKit } from 'dialkit';
import { DsCheckbox, DsCheckboxGroup, type CheckboxGroupSize } from '@ds-build/ui';
import { Stage } from '../components/Playground';
import { bool, jsx, jsxStacked, str } from '../lib/jsx';

const sizes: CheckboxGroupSize[] = ['small', 'medium', 'large'];

const channels = [
  { value: 'email', label: 'Email' },
  { value: 'sms', label: 'SMS' },
  { value: 'push', label: 'Push notifications' },
];

const error = 'Choose at least one channel';

export function CheckboxGroupPlayground() {
  const dial = useDialKit('Checkbox group', {
    label: { type: 'text', default: 'Notifications', placeholder: 'Group label' },
    description: { type: 'text', default: '', placeholder: 'Helper text' },
    size: { type: 'select', options: sizes, default: 'medium' },
    orientation: { type: 'select', options: ['vertical', 'horizontal'], default: 'vertical' },
    invalid: false,
    disabled: false,
  });

  const size = dial.size as CheckboxGroupSize;
  const orientation = dial.orientation as 'vertical' | 'horizontal';

  const snippet = jsxStacked(
    'DsCheckboxGroup',
    [
      str('label', dial.label),
      str('description', dial.description),
      str('size', size, 'medium'),
      str('orientation', orientation, 'vertical'),
      "defaultValue={['email']}",
      bool('invalid', dial.invalid),
      dial.invalid && `error="${error}"`,
      bool('disabled', dial.disabled),
    ],
    channels.map((c) => jsx('DsCheckbox', [`value="${c.value}"`, `label="${c.label}"`])),
  );

  return (
    <Stage snippet={snippet}>
      <DsCheckboxGroup
        label={dial.label || undefined}
        description={dial.description || undefined}
        size={size}
        orientation={orientation}
        defaultValue={['email']}
        invalid={dial.invalid}
        error={dial.invalid ? error : undefined}
        disabled={dial.disabled}
        aria-label={dial.label ? undefined : 'Notifications'}
      >
        {channels.map((c) => (
          <DsCheckbox key={c.value} value={c.value} label={c.label} />
        ))}
      </DsCheckboxGroup>
    </Stage>
  );
}
