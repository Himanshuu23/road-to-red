import { Button } from '../../../components/Button';

export function StudentRow({ student, onView, onEdit, onDelete }) {
  return (
    <tr className="border-t dark:border-gray-700">
      <td className="px-4 py-2">{student.name}</td>
      <td className="px-4 py-2">{student.email}</td>
      <td className="px-4 py-2">{student.phone}</td>
      <td className="px-4 py-2">{student.cfHandle}</td>
      <td className="px-4 py-2">{student.currentRating}</td>
      <td className="px-4 py-2">{student.maxRating}</td>
      <td className="px-4 py-2 flex flex-wrap gap-2">
        <Button variant="outline" onClick={() => onView(student)}>View</Button>
        <Button variant="primary" onClick={() => onEdit(student)}>Edit</Button>
        <Button variant="danger" onClick={() => onDelete(student._id)}>Delete</Button>
      </td>
    </tr>
  );
}
