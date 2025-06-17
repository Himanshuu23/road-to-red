import { Switch } from '@headlessui/react';

export function ThemeToggle({ onToggle }) {
  return (
    <Switch
      onClick={onToggle}
      className="bg-gray-200 dark:bg-gray-700 relative inline-flex items-center h-6 rounded-full w-11"
    >
      <span className="sr-only">Toggle Theme</span>
      <span className="transform transition ease-in-out bg-white dark:bg-gray-800 inline-block w-5 h-5 rounded-full mx-0.5" />
    </Switch>
  );
}