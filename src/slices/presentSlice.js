import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const attendanceSlice = createSlice({
  name: "presence",
  initialState,
  reducers: {
    addAttendance(state, action) {
      const { _id } = action.payload;
      const recordIdExists = state.some((data) => data._id === _id);
      if (!recordIdExists) {
        state.push(action.payload);
      }
    },
    updateAttendance(state, action) {
      const {
        id,
        username,
        yaje,
        yarasuye,
        yarasuwe,
        yarafashije,
        yarafashijwe,
        ararwaye,
        yatangiyeIsabato,
        afiteIndiMpamvu,
        yize7
      } = action.payload;
      const updatedState = state.map((data) => {
        if (data._id === id) {
          return {
            ...data,
            username,
            yarasuye,
            yarasuwe,
            yaje,
            yatangiyeIsabato,
            afiteIndiMpamvu,
            yarafashije,
            yarafashijwe,
            yize7,
            ararwaye,
          };
        }
        return data;
      });
      return updatedState;
    },
  },
});

export const { addAttendance, updateAttendance } = attendanceSlice.actions;

export default attendanceSlice.reducer;
