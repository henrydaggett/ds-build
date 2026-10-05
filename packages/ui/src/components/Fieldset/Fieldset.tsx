import { forwardRef, type ReactNode } from 'react';
import { Fieldset as BaseFieldset } from '@base-ui/react/fieldset';
import styles from './Fieldset.module.css';

export type FieldsetProps = Omit<BaseFieldset.Root.Props, 'className' | 'children'> & {
  legend?: ReactNode;
  /** Short text under the legend. */
  description?: ReactNode;
  /** Disables every field inside. */
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

export const DsFieldset = forwardRef<HTMLFieldSetElement, FieldsetProps>(function DsFieldset(
  { legend, description, className, children, ...rest },
  ref,
) {
  return (
    <BaseFieldset.Root
      ref={ref}
      className={className ? `${styles.fieldset} ${className}` : styles.fieldset}
      {...rest}
    >
      {(legend != null || description != null) && (
        <div className={styles.header}>
          {legend != null && <BaseFieldset.Legend className={styles.legend}>{legend}</BaseFieldset.Legend>}
          {description != null && <p className={styles.description}>{description}</p>}
        </div>
      )}
      {children}
    </BaseFieldset.Root>
  );
});
