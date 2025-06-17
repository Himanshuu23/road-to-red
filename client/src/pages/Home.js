import { useState } from 'react';
import { StudentTable } from '../features/students/components/StudentTable';
import { StudentForm } from '../features/students/components/StudentForm';

export default function Home() {
  const [viewing, setViewing] = useState(null);
  const [editing, setEditing] = useState(null);
  const [reloadKey, setReloadKey] = useState(0);

  return (
    <div>
      <StudentTable
        key={reloadKey}
        onView={(student) => setViewing(student)}
        onEdit={(student) => setEditing(student)}
      />
      {editing && (
        <StudentForm
          initialData={editing}
          onClose={() => setEditing(null)}
          onSuccess={() => setReloadKey((k) => k + 1)}
        />
      )}
    </div>
  );
}
