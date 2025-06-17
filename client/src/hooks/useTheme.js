import { useEffect } from 'react';
import { useTheme as useThemeStore } from '../store/theme';

export function useTheme() {
  const { dark, toggle } = useThemeStore();

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return { dark, toggle };
}