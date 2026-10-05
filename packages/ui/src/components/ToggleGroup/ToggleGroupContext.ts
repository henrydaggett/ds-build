import { createContext } from 'react';

export type ToggleGroupContextValue = {
  size: 'small' | 'medium' | 'large';
};

export const ToggleGroupContext = createContext<ToggleGroupContextValue | null>(null);
