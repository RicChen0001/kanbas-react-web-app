import { createSlice } from "@reduxjs/toolkit";

interface Enrollment {
  userId: string;
  courseId: string;
}

const initialState = {
  enrollments: [] as Enrollment[]
};

const enrollmentsSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enroll: (state, action) => {
      state.enrollments.push({
        userId: action.payload.userId,
        courseId: action.payload.courseId,
      });
    },
    unenroll: (state, action) => {
      state.enrollments = state.enrollments.filter(
        e => !(e.userId === action.payload.userId && e.courseId === action.payload.courseId)
      );
    },
  }
});

export const { enroll, unenroll } = enrollmentsSlice.actions;
export default enrollmentsSlice.reducer;