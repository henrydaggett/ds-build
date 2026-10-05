import { useDialKit } from 'dialkit';
import { DsTextInput, type TextInputSize } from '@ds-build/ui';
import { Stage } from '../components/Playground';
import { bool, jsx, str } from '../lib/jsx';

const sizes: TextInputSize[] = ['small', 'medium', 'large'];
const types = ['text', 'email', 'password', 'search', 'tel', 'url', 'number'];

export function TextInputPlayground() {
  const dial = useDialKit('Text input', {
    placeholder: { type: 'text', default: 'you@example.com', placeholder: 'Placeholder' },
    value: { type: 'text', default: '', placeholder: 'Starting value' },
    type: { type: 'select', options: types, default: 'email' },
    size: { type: 'select', options: sizes, default: 'medium' },
    disabled: false,
  });

  const size = dial.size as TextInputSize;
  const snippet = jsx('DsTextInput', [
    str('size', size, 'medium'),
    str('type', dial.type, 'text'),
    str('placeholder', dial.placeholder),
    str('defaultValue', dial.value),
    bool('disabled', dial.disabled),
    'aria-label="Email"',
  ]);

  return (
    <Stage snippet={snippet} width={320}>
      <DsTextInput
        key={dial.value}
        size={size}
        type={dial.type}
        placeholder={dial.placeholder}
        defaultValue={dial.value || undefined}
        disabled={dial.disabled}
        aria-label="Email"
      />
    </Stage>
  );
}
