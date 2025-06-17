export function Table({ columns, children }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white dark:bg-gray-800">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col} className="px-4 py-2 text-left text-gray-700 dark:text-gray-200">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
