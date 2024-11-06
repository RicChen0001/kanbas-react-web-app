export interface User {
  _id: string;
  role: "STUDENT" | "FACULTY";
}

export interface Enrollment {
  userId: string;
  courseId: string;
}

export interface EnrollmentState {
  enrollments: Enrollment[];
}

// Action types if needed
export interface EnrollAction {
  userId: string;
  courseId: string;
}

export interface UnenrollAction {
  userId: string;
  courseId: string;
} 