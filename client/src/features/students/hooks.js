import { useEffect, useState } from 'react';
import * as API from './api';

export function useStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    const res = await API.fetchStudents();
    setStudents(res.data);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  return { students, loading, reload: load };
}
