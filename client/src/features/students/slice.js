import { createSlice } from '@reduxjs/toolkit';
import { create, getAll } from './api';

export const studentSlice = createSlice({
    name: 'student',
    initialState: {
        name: "name of the student"
    },
    reducers: {
        registerStudent: (state, action) => {
            create(action.payload);
        },
        getAllStudents: () => {
            getAll();
        },
    }
});

export const { registerStudent, getAllStudents } = studentSlice.actions;

export default studentSlice.reducer;