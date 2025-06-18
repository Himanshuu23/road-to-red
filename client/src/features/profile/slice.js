import { createSlice } from "@reduxjs/toolkit";
import { get, update, remove, getCSV } from "./api"

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {},
    reducers: {
        getStudent: (state) => {
            get(state.id);
        },
        updateStudent: (state, action) => {
            update(action.payload, state.id);
        },
        deleteStudent: (state) => {
            remove(state.id);
        },
        getStudentCSV: () => {
            getCSV();
        },
    }
});

export const { getStudent, updateStudent, deleteStudent, getStudentCSV } = profileSlice.actions;

export default profileSlice.reducer;