import { createSlice } from '@reduxjs/toolkit';
import { create, getAll } from './api';

export const studentSlice = createSlice({
    name: 'student',
    initialState: {
        _id: "",
        name: "",
        email: "",
        phone: "",
        codeforcesHandle: "",
        currentRating: 800,
        maxRating: 800,
        lastSynced: Date.now(),
    },
    reducers: {
        registerStudent: (state, action) => {
            create(action.payload);
            state.name = action.payload.name
        },
        getAllStudents: () => {
            getAll();
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerStudent.fulfilled, (state, action) => {
            Object.assign(state, action.payload)
        })
    }
});

export const { registerStudent, getAllStudents } = studentSlice.actions;

export default studentSlice.reducer;