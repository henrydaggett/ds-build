import { useDialKit } from 'dialkit';
import { DsButton, type ButtonAppearance, type ButtonColor, type ButtonSize } from '@ds-build/ui';
import { Stage } from '../components/Playground';
import { bool, jsx, str } from '../lib/jsx';

const appearances: ButtonAppearance[] = ['default', 'outline'];
const sizes: ButtonSize[] = ['small', 'medium', 'large'];
const colors: ButtonColor[] = ['primary', 'blue', 'red'];

export function ButtonPlayground() {
  const dial = useDialKit('Button', {
    label: { type: 'text', default: 'Save changes', placeholder: 'Button label' },
    appearance: { type: 'select', options: appearances, default: 'default' },
    size: { type: 'select', options: sizes, default: 'medium' },
    color: { type: 'select', options: colors, default: 'primary' },
    icon: false,
    disabled: false,
  });

  const appearance = dial.appearance as ButtonAppearance;
  const size = dial.size as ButtonSize;
  const color = dial.color as ButtonColor;
  const label = dial.label.trim() || 'Button';
  const outline = appearance === 'outline';

  const snippet = jsx(
    'DsButton',
    [
      str('appearance', appearance, 'default'),
      str('size', size, 'medium'),
      !outline && str('color', color, 'primary'),
      bool('icon', dial.icon),
      bool('disabled', dial.disabled),
    ],
    label,
  );

  const common = { size, icon: dial.icon, disabled: dial.disabled, children: label };

  return (
    <Stage
      snippet={snippet}
      note={outline ? 'Outline buttons have a fixed style, so the color setting is ignored.' : undefined}
    >
      {outline ? <DsButton {...common} appearance="outline" /> : <DsButton {...common} color={color} />}
    </Stage>
  );
}
