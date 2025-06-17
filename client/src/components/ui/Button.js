const styles = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700',
  danger: 'bg-red-600 text-white hover:bg-red-700',
  outline: 'border border-gray-300 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-800',
};

export function Button({ variant = 'primary', className = '', children, ...props }) {
  return (
    <button className={`px-4 py-2 rounded ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}