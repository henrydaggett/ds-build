import { forwardRef } from 'react';
import { Select as BaseSelect } from '@base-ui/react/select';
import { DsCheckIcon, DsChevronDownIcon } from '../../icons';
import styles from './Select.module.css';

export type SelectSize = 'small' | 'medium' | 'large';

export type SelectItem = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectProps = {
  items: SelectItem[];
  /** Shown in the trigger when nothing is selected. */
  placeholder?: string;
  size?: SelectSize;
  defaultValue?: string;
  value?: string | null;
  onValueChange?: (value: string | null) => void;
  name?: string;
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  id?: string;
  className?: string;
  /** Required when the select isn't inside a `DsField` with a `label`. */
  'aria-label'?: string;
};

/**
 * A single-choice dropdown built from Base UI Select parts.
 * The popup is a dropdown below the trigger rather than overlapping it.
 */
export const DsSelect = forwardRef<HTMLButtonElement, SelectProps>(function DsSelect(
  {
    items,
    placeholder,
    size = 'medium',
    defaultValue,
    value,
    onValueChange,
    name,
    disabled,
    required,
    readOnly,
    id,
    className,
    'aria-label': ariaLabel,
  },
  ref,
) {
  return (
    <BaseSelect.Root
      items={items}
      defaultValue={defaultValue}
      value={value}
      onValueChange={onValueChange ? (next) => onValueChange(next) : undefined}
      name={name}
      disabled={disabled}
      required={required}
      readOnly={readOnly}
      id={id}
    >
      <BaseSelect.Trigger
        ref={ref}
        data-size={size}
        aria-label={ariaLabel}
        className={className ? `${styles.trigger} ${className}` : styles.trigger}
      >
        <BaseSelect.Value className={styles.value} placeholder={placeholder} />
        <BaseSelect.Icon className={styles.chevron}>
          <DsChevronDownIcon />
        </BaseSelect.Icon>
      </BaseSelect.Trigger>
      <BaseSelect.Portal>
        <BaseSelect.Positioner
          className={styles.positioner}
          sideOffset={4}
          alignItemWithTrigger={false}
        >
          <BaseSelect.Popup className={styles.popup} data-size={size}>
            <BaseSelect.List className={styles.list}>
              {items.map((item) => (
                <BaseSelect.Item
                  key={item.value}
                  value={item.value}
                  disabled={item.disabled}
                  className={styles.item}
                >
                  <BaseSelect.ItemText>{item.label}</BaseSelect.ItemText>
                  <BaseSelect.ItemIndicator className={styles.check}>
                    <DsCheckIcon />
                  </BaseSelect.ItemIndicator>
                </BaseSelect.Item>
              ))}
            </BaseSelect.List>
          </BaseSelect.Popup>
        </BaseSelect.Positioner>
      </BaseSelect.Portal>
    </BaseSelect.Root>
  );
});
