import { forwardRef, useContext, type ReactNode } from 'react';
import { Checkbox as BaseCheckbox } from '@base-ui/react/checkbox';
import { Field as BaseField } from '@base-ui/react/field';
import { DsCheckIcon, DsMinusIcon } from '../../icons';
import { CheckboxGroupContext } from '../CheckboxGroup/CheckboxGroupContext';
import styles from './Checkbox.module.css';

export type CheckboxSize = 'small' | 'medium' | 'large';

type CheckboxBaseProps = Omit<
  BaseCheckbox.Root.Props,
  'children' | 'className' | 'render' | 'nativeButton'
> & {
  /** Ignored inside a `DsCheckboxGroup`, which sets the size for all its checkboxes. */
  size?: CheckboxSize;
  className?: string;
};

type LabelledCheckboxProps = CheckboxBaseProps & {
  label: ReactNode;
};

/** A checkbox without a visible label needs an `aria-label`. */
type UnlabelledCheckboxProps = CheckboxBaseProps & {
  label?: never;
  'aria-label': string;
};

export type CheckboxProps = LabelledCheckboxProps | UnlabelledCheckboxProps;

/**
 * Inside a `DsCheckboxGroup` each checkbox is wrapped in `Field.Item` so it gets
 * its own label association. `Field.Item` throws outside a `Field.Root`, so a
 * standalone checkbox uses a native `<label>` instead.
 */
export const DsCheckbox = forwardRef<HTMLElement, CheckboxProps>(function DsCheckbox(
  { size, label, disabled, className, ...rest },
  ref,
) {
  const group = useContext(CheckboxGroupContext);
  const resolvedSize = group?.size ?? size ?? 'medium';

  const box = (
    <BaseCheckbox.Root ref={ref} disabled={disabled} className={styles.box} {...rest}>
      <BaseCheckbox.Indicator keepMounted className={styles.indicator}>
        <DsCheckIcon className={styles.check} />
        <DsMinusIcon className={styles.minus} />
      </BaseCheckbox.Indicator>
    </BaseCheckbox.Root>
  );

  const rootClassName = className ? `${styles.checkbox} ${className}` : styles.checkbox;

  if (!group) {
    return (
      <span data-size={resolvedSize} className={rootClassName}>
        {label == null ? (
          box
        ) : (
          <label className={styles.label} data-disabled={disabled ? '' : undefined}>
            {box}
            {label}
          </label>
        )}
      </span>
    );
  }

  return (
    <BaseField.Item disabled={disabled} data-size={resolvedSize} className={rootClassName}>
      {label == null ? (
        box
      ) : (
        <BaseField.Label className={styles.label}>
          {box}
          {label}
        </BaseField.Label>
      )}
    </BaseField.Item>
  );
});
