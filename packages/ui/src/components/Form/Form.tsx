import { forwardRef, type ReactNode } from 'react';
import { Form as BaseForm } from '@base-ui/react/form';
import styles from './Form.module.css';

export type FormProps = Omit<BaseForm.Props, 'className'> & {
  className?: string;
};

/** Stacks fields and fieldsets vertically and collects their validation errors. */
export const DsForm = forwardRef<HTMLFormElement, FormProps>(function DsForm(
  { className, ...rest },
  ref,
) {
  return (
    <BaseForm
      ref={ref}
      className={className ? `${styles.form} ${className}` : styles.form}
      {...rest}
    />
  );
});

export type FormActionsProps = {
  /** Horizontal alignment of the buttons. */
  align?: 'start' | 'end';
  className?: string;
  children: ReactNode;
};

/** A row of buttons at the end of a form. */
export function DsFormActions({ align = 'start', className, children }: FormActionsProps) {
  return (
    <div
      data-align={align}
      className={className ? `${styles.actions} ${className}` : styles.actions}
    >
      {children}
    </div>
  );
}
