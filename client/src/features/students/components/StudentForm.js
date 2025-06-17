import { useState, useEffect } from 'react';
import { Button } from '../../../components/Button';
import * as API from '../api';

export function StudentForm({ initialData, onClose, onSuccess }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    cfHandle: '',
    currentRating: '',
    maxRating: '',
  });

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (initialData?._id) {
      await API.updateStudent(initialData._id, form);
    } else {
      await API.addStudent(form);
    }
    onSuccess();
    onClose();
  };

  useEffect(() => {
  const handleEsc = (e) => {
    if (e.key === 'Escape') onClose();
  };
  window.addEventListener('keydown', handleEsc);
  return () => window.removeEventListener('keydown', handleEsc);
}, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded w-full max-w-lg space-y-4 shadow-lg">
        <h2 className="text-xl font-bold mb-2">
          {initialData ? 'Edit Student' : 'Add Student'}
        </h2>
        {['name', 'email', 'phone', 'cfHandle', 'currentRating', 'maxRating'].map((field) => (
          <input
            key={field}
            name={field}
            value={form[field]}
            onChange={handleChange}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white"
            required={field !== 'currentRating' && field !== 'maxRating'}
          />
        ))}
        <div className="flex justify-end gap-2">
          <Button type="button" variant="outline" onClick={onClose}>Cancel</Button>
          <Button type="submit">{initialData ? 'Update' : 'Add'}</Button>
        </div>
      </form>
    </div>
  );
}
