import { forwardRef, useMemo, type ReactNode } from 'react';
import { CheckboxGroup as BaseCheckboxGroup } from '@base-ui/react/checkbox-group';
import { Field as BaseField } from '@base-ui/react/field';
import { Fieldset as BaseFieldset } from '@base-ui/react/fieldset';
import { CheckboxGroupContext } from './CheckboxGroupContext';
import styles from './CheckboxGroup.module.css';

export type CheckboxGroupSize = 'small' | 'medium' | 'large';

export type CheckboxGroupProps = {
  /** Group label, rendered as the fieldset legend. */
  label?: ReactNode;
  description?: ReactNode;
  /** Shown when the group fails validation, or always when `invalid` is set. */
  error?: ReactNode;
  invalid?: boolean;
  /** Sets the size of every `DsCheckbox` in the group. */
  size?: CheckboxGroupSize;
  orientation?: 'vertical' | 'horizontal';
  /** Values of the checkboxes that start ticked. */
  defaultValue?: string[];
  value?: string[];
  onValueChange?: (value: string[]) => void;
  name?: string;
  disabled?: boolean;
  className?: string;
  'aria-label'?: string;
  children: ReactNode;
};

export const DsCheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(function DsCheckboxGroup(
  {
    label,
    description,
    error,
    invalid,
    size = 'medium',
    orientation = 'vertical',
    defaultValue,
    value,
    onValueChange,
    name,
    disabled,
    className,
    'aria-label': ariaLabel,
    children,
  },
  ref,
) {
  const context = useMemo(() => ({ size }), [size]);

  return (
    <CheckboxGroupContext.Provider value={context}>
      <BaseField.Root
        ref={ref}
        name={name}
        disabled={disabled}
        invalid={invalid}
        className={className ? `${styles.group} ${className}` : styles.group}
      >
        <BaseFieldset.Root
          className={styles.fieldset}
          render={
            <BaseCheckboxGroup
              defaultValue={defaultValue}
              value={value}
              onValueChange={onValueChange ? (next) => onValueChange(next) : undefined}
              disabled={disabled}
              aria-label={ariaLabel}
            />
          }
        >
          {label != null && <BaseFieldset.Legend className={styles.legend}>{label}</BaseFieldset.Legend>}
          <div className={styles.items} data-orientation={orientation}>
            {children}
          </div>
        </BaseFieldset.Root>
        {description != null && (
          <BaseField.Description className={styles.description}>{description}</BaseField.Description>
        )}
        {error != null && (
          <BaseField.Error className={styles.error} match={invalid ? true : undefined}>
            {error}
          </BaseField.Error>
        )}
      </BaseField.Root>
    </CheckboxGroupContext.Provider>
  );
});
