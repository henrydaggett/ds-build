import { forwardRef } from 'react';
import { Input as BaseInput } from '@base-ui/react/input';
import styles from './TextInput.module.css';

export type TextInputSize = 'small' | 'medium' | 'large';

/** The native `size` attribute is replaced by the design system size scale. */
export type TextInputProps = Omit<BaseInput.Props, 'className' | 'size'> & {
  size?: TextInputSize;
  className?: string;
};

export const DsTextInput = forwardRef<HTMLInputElement, TextInputProps>(function DsTextInput(
  { size = 'medium', className, ...rest },
  ref,
) {
  return (
    <BaseInput
      ref={ref}
      data-size={size}
      className={className ? `${styles.input} ${className}` : styles.input}
      {...rest}
    />
  );
});
