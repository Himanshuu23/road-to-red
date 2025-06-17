import { useStudents } from '../hooks';
import { Table } from '../../../components/Table';
import { StudentRow } from './StudentRow';
import { Button } from '../../../components/Button';
import * as API from '../api';

export function StudentTable({ onView, onEdit }) {
  const { students, reload, loading } = useStudents();

  const handleDelete = async (id) => {
    await API.deleteStudent(id);
    reload();
  };

  const handleExport = async () => {
    const res = await API.exportCSV();
    const url = window.URL.createObjectURL(new Blob([res.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'students.csv');
    document.body.appendChild(link);
    link.click();
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="flex justify-between mb-4">
        <h2 className="text-lg font-semibold">Students</h2>
        <div className="flex gap-2">
          <Button onClick={handleExport} variant="outline">Download CSV</Button>
          <Button onClick={() => onEdit(null)}>Add Student</Button>
        </div>
      </div>
      <Table columns={['Name', 'Email', 'Phone', 'CF Handle', 'Current Rating', 'Max Rating', 'Actions']}>
        {students.map((student) => (
          <StudentRow
            key={student._id}
            student={student}
            onView={onView}
            onEdit={onEdit}
            onDelete={handleDelete}
          />
        ))}
      </Table>
    </>
  );
}
