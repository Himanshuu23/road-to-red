import { createSlice } from "@reduxjs/toolkit";
import { sync, syncAll, settings, detect } from './api';

export const settingsSlice = createSlice({
    name: 'settings',
    initialState: {  },
    reducers: {
        syncStudent: (state) => {
            sync(state.id);
        },
        syncAllStudents: () => {
            syncAll();
        },
        updateSettings: (state, action) => {
            settings(action.payload);
        },
        detectInactivityAndNotify: () => {
            detect();
        }
    }
});

export const { syncStudent, syncAllStudents, updateSettings, detectInactivityAndNotify } = settingsSlice.actions;

export default settingsSlice.reducer;