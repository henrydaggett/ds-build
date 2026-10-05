import { forwardRef, useContext, type ReactNode } from 'react';
import { Toggle as BaseToggle } from '@base-ui/react/toggle';
import { ToggleGroupContext } from '../ToggleGroup/ToggleGroupContext';
import styles from './Toggle.module.css';

export type ToggleSize = 'small' | 'medium' | 'large';

type ToggleBaseProps = Omit<BaseToggle.Props, 'children' | 'className'> & {
  /** Ignored inside a `DsToggleGroup`, which sets the size for all its toggles. */
  size?: ToggleSize;
  /** Leading icon. Without `children` the toggle is icon-only and square. */
  iconNode?: ReactNode;
  className?: string;
};

type LabelledToggleProps = ToggleBaseProps & {
  children: ReactNode;
};

/** Icon-only toggles have no visible text, so they need an `aria-label`. */
type IconOnlyToggleProps = ToggleBaseProps & {
  children?: never;
  iconNode: ReactNode;
  'aria-label': string;
};

export type ToggleProps = LabelledToggleProps | IconOnlyToggleProps;

export const DsToggle = forwardRef<HTMLButtonElement, ToggleProps>(function DsToggle(
  { size, iconNode, className, children, ...rest },
  ref,
) {
  const group = useContext(ToggleGroupContext);
  const resolvedSize = group?.size ?? size ?? 'medium';
  const iconOnly = children == null;

  return (
    <BaseToggle
      ref={ref}
      data-size={resolvedSize}
      data-icon-only={iconOnly ? '' : undefined}
      className={className ? `${styles.toggle} ${className}` : styles.toggle}
      {...rest}
    >
      {iconNode && <span className={styles.icon}>{iconNode}</span>}
      {!iconOnly && <span className={styles.label}>{children}</span>}
    </BaseToggle>
  );
});
