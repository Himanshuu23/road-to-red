import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../features/students/slice";

export default configureStore({
    reducer: {
        student: studentReducer,
    },
})