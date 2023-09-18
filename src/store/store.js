import {configureStore} from "@reduxjs/toolkit"
import { attendanceSlice } from "../slices/presentSlice";
export const createdStore = configureStore({
    reducer: {
        addAttendance: attendanceSlice.reducer,
    }
})
