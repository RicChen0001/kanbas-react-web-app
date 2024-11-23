import { createSlice } from "@reduxjs/toolkit";
import { EnrollmentState } from "./types";

const initialState: EnrollmentState = {
  enrollments: []
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, action) => {
      // Check if enrollment already exists to prevent duplicates
      const exists = state.enrollments.some(
        e => e.userId === action.payload.userId && e.courseId === action.payload.courseId
      );
      if (!exists) {
        state.enrollments.push({
          userId: action.payload.userId,
          courseId: action.payload.courseId,
        });
      }
    },
    unenroll: (state, action) => {
      state.enrollments = state.enrollments.filter(
        e => !(e.userId === action.payload.userId && e.courseId === action.payload.courseId)
      );
    }
  }
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;