import { forwardRef, type ReactNode } from 'react';
import { Button as BaseButton } from '@base-ui/react/button';
import { PlusIcon } from '../../icons';
import styles from './Button.module.css';

export type ButtonAppearance = 'default' | 'outline';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonColor = 'primary' | 'blue' | 'red';

type ButtonBaseProps = Omit<BaseButton.Props, 'color' | 'children' | 'className'> & {
  size?: ButtonSize;
  /** Shows a leading icon. Uses a plus icon unless `iconNode` is set. */
  icon?: boolean;
  iconNode?: ReactNode;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

type DefaultAppearanceProps = ButtonBaseProps & {
  appearance?: 'default';
  color?: ButtonColor;
};

/** Outline has a fixed style, so `color` is not accepted. */
type OutlineAppearanceProps = ButtonBaseProps & {
  appearance: 'outline';
  color?: never;
};

export type ButtonProps = DefaultAppearanceProps | OutlineAppearanceProps;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    appearance = 'default',
    size = 'medium',
    color,
    icon = false,
    iconNode,
    disabled = false,
    className,
    children,
    ...rest
  },
  ref,
) {
  const resolvedColor = appearance === 'default' ? (color ?? 'primary') : undefined;

  return (
    <BaseButton
      ref={ref}
      disabled={disabled}
      data-appearance={appearance}
      data-size={size}
      data-color={resolvedColor}
      className={className ? `${styles.button} ${className}` : styles.button}
      {...rest}
    >
      {icon && <span className={styles.icon}>{iconNode ?? <PlusIcon />}</span>}
      <span className={styles.label}>{children}</span>
    </BaseButton>
  );
});
