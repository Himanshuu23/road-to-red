export function exportToCSV(data, filename = 'students.csv') {
  const csvContent = [
    ['Name', 'Email', 'Phone', 'CF Handle', 'Current Rating', 'Max Rating'],
    ...data.map((s) => [
      s.name,
      s.email,
      s.phone,
      s.cfHandle,
      s.currentRating,
      s.maxRating,
    ]),
  ]
    .map((e) => e.join(','))
    .join('\n');

  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
