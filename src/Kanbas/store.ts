// import { configureStore } from "@reduxjs/toolkit";
// import modulesReducer from "./Courses/Modules/reducer";
// import accountReducer from "./Account/reducer";
// import assignmentsReducer from "./Courses/Assignments/reducer";
// import enrollmentsReducer from "./Enrollments/enrollmentsReducer";
// import { EnrollmentState } from "./Enrollments/types";
// import { User } from "./Enrollments/types";

// const store = configureStore({
//   reducer: {
//     modulesReducer,
//     accountReducer,
//     assignmentsReducer,
//     enrollmentsReducer,
//   },
// });

// export interface RootState {
//   modulesReducer: any; 
//   accountReducer: {
//     currentUser: User | null;
//     // other account state properties
//   };
//   assignmentsReducer: any; 
//   enrollmentsReducer: EnrollmentState;
// }

// export type AppDispatch = typeof store.dispatch;

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import modulesReducer from "./Courses/Modules/reducer";
import accountReducer from "./Account/reducer";
import assignmentsReducer from "./Courses/Assignments/reducer";
import enrollmentReducer from "./reducer";
const store = configureStore({
  reducer: {
    modulesReducer,
    accountReducer,
    assignmentsReducer,
    enrollmentReducer
  },
});
export default store;