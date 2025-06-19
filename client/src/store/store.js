import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/students/slice";
import profileReducer from "../features/profile/slice";
import settingsReducer from "../features/settings/slice";

export default configureStore({
    reducer: {
        student: studentReducer,
        profile: profileReducer,
        settings: settingsReducer,
    },
})