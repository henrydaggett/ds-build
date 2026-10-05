import { forwardRef, isValidElement, type ReactNode } from 'react';
import { Field as BaseField } from '@base-ui/react/field';
import { DsCheckbox } from '../Checkbox/Checkbox';
import { DsSelect } from '../Select/Select';
import styles from './Field.module.css';

export type FieldProps = {
  /** Not rendered for a `DsCheckbox`, which is named by its own `label`. */
  label?: ReactNode;
  /** Helper text shown under the control. */
  description?: ReactNode;
  /** Shown when the control fails validation, or always when `invalid` is set. */
  error?: ReactNode;
  invalid?: boolean;
  disabled?: boolean;
  /** Form field name. Takes precedence over the control's own `name`. */
  name?: string;
  className?: string;
  /** One control: `DsTextInput`, `DsSelect` or `DsCheckbox`. */
  children: ReactNode;
};

export const DsField = forwardRef<HTMLDivElement, FieldProps>(function DsField(
  { label, description, error, invalid, disabled, name, className, children },
  ref,
) {
  // A native <label> would open the DsSelect popup on click, so label buttons with a <div>.
  const labelsButton = isValidElement(children) && children.type === DsSelect;
  // A Field.Label would replace the checkbox's own label as its accessible name.
  const showLabel = label != null && !(isValidElement(children) && children.type === DsCheckbox);

  return (
    <BaseField.Root
      ref={ref}
      name={name}
      disabled={disabled}
      invalid={invalid}
      className={className ? `${styles.field} ${className}` : styles.field}
    >
      {showLabel &&
        (labelsButton ? (
          <BaseField.Label className={styles.label} nativeLabel={false} render={<div />}>
            {label}
          </BaseField.Label>
        ) : (
          <BaseField.Label className={styles.label}>{label}</BaseField.Label>
        ))}
      {children}
      {description != null && (
        <BaseField.Description className={styles.description}>{description}</BaseField.Description>
      )}
      {error != null && (
        <BaseField.Error className={styles.error} match={invalid ? true : undefined}>
          {error}
        </BaseField.Error>
      )}
    </BaseField.Root>
  );
});
