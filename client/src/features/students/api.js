import api from '../../lib/api';

export const fetchStudents = () => api.get('/');
export const getStudentById = (id) => api.get(`/${id}`);
export const addStudent = (data) => api.post('/', data);
export const updateStudent = (id, data) => api.put(`/${id}`, data);
export const deleteStudent = (id) => api.delete(`/${id}`);
export const exportCSV = () => api.get('/data/csv', { responseType: 'blob' });
