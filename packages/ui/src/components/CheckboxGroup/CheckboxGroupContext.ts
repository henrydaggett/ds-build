import { createContext } from 'react';

export type CheckboxGroupContextValue = {
  size: 'small' | 'medium' | 'large';
};

export const CheckboxGroupContext = createContext<CheckboxGroupContextValue | null>(null);
