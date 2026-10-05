import { useDialKit } from 'dialkit';
import {
  Button,
  type ButtonAppearance,
  type ButtonColor,
  type ButtonProps,
  type ButtonSize,
} from '@ds-build/ui';

const appearances: ButtonAppearance[] = ['default', 'outline'];
const sizes: ButtonSize[] = ['small', 'medium', 'large'];
const colors: ButtonColor[] = ['primary', 'blue', 'red'];

function toButtonProps(
  appearance: ButtonAppearance,
  color: ButtonColor,
  rest: Omit<ButtonProps, 'appearance' | 'color'>,
): ButtonProps {
  return appearance === 'outline'
    ? { ...rest, appearance: 'outline' }
    : { ...rest, appearance: 'default', color };
}

function toJsx(props: {
  appearance: ButtonAppearance;
  size: ButtonSize;
  color: ButtonColor;
  icon: boolean;
  disabled: boolean;
  label: string;
}) {
  const attrs: string[] = [];
  if (props.appearance !== 'default') attrs.push(`appearance="${props.appearance}"`);
  if (props.size !== 'medium') attrs.push(`size="${props.size}"`);
  if (props.appearance === 'default' && props.color !== 'primary') attrs.push(`color="${props.color}"`);
  if (props.icon) attrs.push('icon');
  if (props.disabled) attrs.push('disabled');
  const open = attrs.length ? `<Button ${attrs.join(' ')}>` : '<Button>';
  return `${open}${props.label}</Button>`;
}

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
  const snippet = toJsx({ appearance, size, color, icon: dial.icon, disabled: dial.disabled, label });

  return (
    <section id="button" className="page">
      <div className="page-header">
        <h1>Button</h1>
        <p>
          Triggers an action. Built on the Base UI Button. Use the panel on the right to change
          its props.
        </p>
      </div>

      <div className="stage-card">
        <div className="stage">
          <Button
            {...toButtonProps(appearance, color, {
              size,
              icon: dial.icon,
              disabled: dial.disabled,
              children: label,
            })}
          />
        </div>
        <div className="stage-footer">
          <code className="snippet">{snippet}</code>
          <CopyButton text={snippet} />
        </div>
        {appearance === 'outline' && (
          <p className="stage-note">
            Outline buttons have a fixed style, so the color setting is ignored.
          </p>
        )}
      </div>

      <div className="section-header">
        <h2>All variants</h2>
        <p>Every appearance, size, and color, in the default and disabled states.</p>
      </div>

      <div className="matrix-card">
        <div className="matrix-scroll">
          <table className="matrix">
            <thead>
              <tr>
                <th scope="col">Variant</th>
                {sizes.map((s) => (
                  <th scope="col" key={s}>
                    {s}
                  </th>
                ))}
                <th scope="col">disabled</th>
              </tr>
            </thead>
            <tbody>
              {appearances.flatMap((a) =>
                (a === 'default' ? colors : [null]).map((c) => (
                  <tr key={`${a}-${c ?? 'fixed'}`}>
                    <th scope="row">
                      <span className="variant-name">{a}</span>
                      {c && <span className="variant-meta">{c}</span>}
                    </th>
                    {sizes.map((s) => (
                      <td key={s}>
                        <Button {...toButtonProps(a, c ?? 'primary', { size: s, icon: true, children: 'Button' })} />
                      </td>
                    ))}
                    <td>
                      <Button {...toButtonProps(a, c ?? 'primary', { disabled: true, children: 'Button' })} />
                    </td>
                  </tr>
                )),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function CopyButton({ text }: { text: string }) {
  return (
    <Button
      appearance="outline"
      size="small"
      onClick={() => {
        void navigator.clipboard?.writeText(text);
      }}
    >
      Copy
    </Button>
  );
}
