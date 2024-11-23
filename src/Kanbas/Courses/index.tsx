// import CoursesNavigation from "./Navigation";
// import Modules from "./Modules";
// import Home from "./Home";
// import Assignments from "./Assignments";
// import AssignmentEditor from "./Assignments/Editor";
// import { Navigate, Route, Routes } from "react-router";
// import { FaAlignJustify } from "react-icons/fa";
// import PeopleTable from "./People/Table";


// export default function Courses() {
//   return (
//     <div id="wd-courses">
//       <h2 className="text-danger">
//           <FaAlignJustify className="me-4 fs-4 mb-1" />
//           Course 1234 </h2> <hr />
//       <div className="d-flex">
//         <div className="d-none d-md-block">
//           <CoursesNavigation />
//         </div>
//         <div className="flex-fill">
//         <Routes>
//           <Route path="Home" element={<Home />} />
//           <Route path="Modules" element={<Modules />} />
//           <Route path="Assignments" element={<Assignments />} />
//           <Route path="Assignments/:aid" element={<AssignmentEditor />} />
//           <Route path="People" element={<PeopleTable />} />
//         </Routes>
//         </div></div>
//     </div>
// );}

import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import { FaAlignJustify } from "react-icons/fa";
import PeopleTable from "./People/Table";
// import { courses } from "../Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router";

export default function Courses({ courses }: { courses: any[]; }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);
  const { pathname } = useLocation();
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
          <FaAlignJustify className="me-4 fs-4 mb-1" />
          {course && course.name} &gt; {pathname.split("/")[4]}
          </h2> <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />
        </div>
        <div className="flex-fill">
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route path="Assignments/:aid" element={<AssignmentEditor />} />
          <Route path="People" element={<PeopleTable />} />
        </Routes>
        </div></div>
    </div>
);}

// import { useState, useEffect } from "react";
// import ModulesControls from "./Modules/ModulesControls";
// import LessonControlButtons from "./Modules/LessonControlButtons";
// import { BsGripVertical } from "react-icons/bs";
// import ModuleControlButtons from "./Modules/ModuleControlButtons";
// import { useParams } from "react-router";
// import { setModules, addModule, editModule, updateModule, deleteModule } from "./Modules/reducer";
// import { useSelector, useDispatch } from "react-redux";
// import * as coursesClient from "../client";
// import * as modulesClient from "./Modules/client";




// export default function Modules() {
//   const { cid } = useParams();
//   const [moduleName, setModuleName] = useState("");
//   const { modules } = useSelector((state: any) => state.modulesReducer);
//   const { currentUser } = useSelector((state: any) => state.accountReducer); 
//   const dispatch = useDispatch();
//   const fetchModules = async () => {
//     const modules = await coursesClient.findModulesForCourse(cid as string);
//     dispatch(setModules(modules));
//   };

//   const createModuleForCourse = async () => {
//     if (!cid) return;
//     const newModule = { name: moduleName, course: cid };
//     const module = await coursesClient.createModuleForCourse(cid, newModule);
//     dispatch(addModule(module));
//   };

//   const removeModule = async (moduleId: string) => {
//     await modulesClient.deleteModule(moduleId);
//     dispatch(deleteModule(moduleId));
//   };

//   const saveModule = async (module: any) => {
//     await modulesClient.updateModule(module);
//     dispatch(updateModule(module));
//   };



//   useEffect(() => {
//     fetchModules();
//   }, []);


//   return (
//     <div className="wd-modules">
//       <ModulesControls 
//       setModuleName={setModuleName} 
//       moduleName={moduleName} 
//       addModule={createModuleForCourse} />
//       <ul id="wd-modules" className="list-group rounded-0">
//         {modules
//           .map((module: any) => (
//             <li key={module.id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//               <div className="wd-title p-3 ps-2 bg-secondary">
//                 <BsGripVertical className="me-2 fs-3" />
//                 {module.editing ? (
//                   <input
//                     className="form-control w-50 d-inline-block"
//                     onChange={(e) =>
//                       dispatch(updateModule({ ...module, name: e.target.value }))
//                     }
//                     onKeyDown={(e) => {
//                       if (e.key === "Enter") {
//                         saveModule({ ...module, editing: false });
//                       }
//                     }}
//                     defaultValue={module.name}
//                   />
//                 ) : (
//                   module.name
//                 )}
//                 <ModuleControlButtons
//                   moduleId={module._id}
//                   deleteModule={(moduleId: string) => removeModule(moduleId)}
//                   editModule={(moduleId: string) => dispatch(editModule(moduleId))}
//                 />
//               </div>
//               {module.lessons && (
//                 <ul className="wd-lessons list-group rounded-0">
//                   {module.lessons.map((lesson: any) => (
//                     <li key={lesson.id} className="wd-lesson list-group-item p-3 ps-1">
//                       <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }