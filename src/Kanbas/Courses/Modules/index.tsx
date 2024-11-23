// export default function Modules() {
//   return (
//       <div>
//           {/* Collapse All button, View Progress button, etc. */}
//           <button>Collapse All</button>
//           <button>View Progress</button>
//               <select id="wd-select-one-choice">
//                   <option value="ONE">Publish 1</option>
//                   <option value="TWO">Publish 2</option>
//                   <option selected value="Tree">Publish All</option>
//                   <option value="FOUR">Publish 4</option>
//               </select>
//           <button>+ Module</button>
//           <ul id="wd-modules">
//               <li className="wd-module">
//                   <div className="wd-title">Week 1, Lecture 1 - Course Introduction, Syllabus, Agenda</div>
//                   <ul className="wd-lessons">
//                       <li className="wd-lesson">
//                           <span className="wd-title">LEARNING OBJECTIVES</span>
//                           <ul className="wd-content">
//                               <li className="wd-content-item">Introduction to the course</li>
//                               <li className="wd-content-item">Learn what is Web Development</li>
//                           </ul>
//                       </li>
//                       <li className="wd-lesson">
//                           <span className="wd-title">READING</span>
//                           <ul className="wd-content">
//                               <li className="wd-content-item">Full Stack Developer - Chapter 1 - Introduction</li>
//                               <li className="wd-content-item">Full Stack Developer - Chapter 2 - Creating User</li>
//                           </ul>
//                       </li>
//                       <li className="wd-lesson">
//                           <span className="wd-title">SLIDES</span>
//                           <ul className="wd-content">
//                               <li className="wd-content-item">Introduction to Web Development</li>
//                               <li className="wd-content-item">Creating an HTTP server with Node.js</li>
//                               <li className="wd-content-item">Creating a React Application</li>
//                           </ul>
//                       </li> 
//                   </ul>
//               </li>
//               <li className="wd-module">
//                   <div className="wd-title">Week 1, Lecture 2 - Formatting User Interfaces with HTML</div>
//                   <ul className="wd-lessons">
//                       <li className="wd-lesson">
//                           <span className="wd-title">LEARNING OBJECTIVES</span>
//                           <ul className="wd-content">
//                               <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
//                               <li className="wd-content-item">Deploy the assignment to Netlify</li>
//                           </ul>
//                       </li>
//                       <li className="wd-lesson">
//                           <span className="wd-title">SLIDES</span>
//                           <ul className="wd-content">
//                               <li className="wd-content-item">Introduction to HTML and the DOM</li>
//                               <li className="wd-content-item">Formatting Web content with Headings</li>
//                               <li className="wd-content-item">Formatting content with Lists and Tables</li>
//                           </ul>
//                       </li> 
//                   </ul>
//               </li> 
//           </ul>
//       </div> 
//   );
// }

// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import { BsGripVertical } from "react-icons/bs";
// import ModuleControlButtons from "./ModuleControlButtons";

// export default function Modules() {
//   return (
//     <div>
//       <div>
//       <ModulesControls /><br /><br /><br />
//         <ul id="wd-modules" className="list-group rounded-0">
//           <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" />
//               Week 1
//               <ModuleControlButtons />
//             </div>
//             <ul className="wd-lessons list-group rounded-0">
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 LEARNING OBJECTIVES
//                 <LessonControlButtons />
//               </li>
//               <li className="wd-lesson list-group-item p-3 ps-1">
//                 <BsGripVertical className="me-2 fs-3" />
//                 Introduction to the course
//                 <LessonControlButtons />
//               </li>

//             <li className="wd-lesson list-group-item p-3 ps-1">
//               Learn what is Web Development </li>
//             <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 1 </li>
//             <li className="wd-lesson list-group-item p-3 ps-1"> LESSON 2 </li>
//           </ul>
//         </li>
//         <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//           <div className="wd-title p-3 ps-2 bg-secondary"> Week 2 </div>
//           <ul className="wd-lessons list-group rounded-0">
//             <li className="wd-lesson list-group-item p-3 ps-1">
//               LEARNING OBJECTIVES </li>
//             <li className="wd-lesson list-group-item p-3 ps-1"> LEARNING OBJECTIVES </li>
//             <li className="wd-lesson list-group-item p-3 ps-1"> Learn how to create user interfaces with HTML </li>
//           </ul>
//         </li>
//       </ul> </div>

//     </div>
// );}

// import React, { useState } from "react";
// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import { BsGripVertical } from "react-icons/bs";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { useParams } from "react-router";
// import * as db from "../../Database";

// export default function Modules() {
//   const { cid } = useParams();
//   const [modules, setModules] = useState<any[]>(db.modules);

//   return (
//     <div>
//       <ModulesControls /><br /><br /><br /><br /><br />
//       <ul id="wd-modules" className="list-group rounded-0">
//         {modules
//           .filter((module: any) => module.course === cid)
//           .map((module: any) => (
//             <li key={module.id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//               <div className="wd-title p-3 ps-2 bg-secondary">
//                 <BsGripVertical className="me-2 fs-3" /> {module.name} <ModuleControlButtons />
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



// import React, { useState } from "react";
// import { useParams } from "react-router";
// import * as db from "../../Database";
// import ModulesControls from "./ModulesControls";
// import LessonControlButtons from "./LessonControlButtons";
// import ModuleControlButtons from "./ModuleControlButtons";
// import { BsGripVertical } from "react-icons/bs";
// import { addModule, editModule, updateModule, deleteModule }
//   from "./reducer";
// import { useSelector, useDispatch } from "react-redux";
// export default function Modules() {
//     const { cid } = useParams();
//     const [moduleName, setModuleName] = useState("");
//     const { modules } = useSelector((state: any) => state.modulesReducer);
//     const dispatch = useDispatch(); 
//     return (
//       <div id="wd-modules">
//         <ModulesControls setModuleName={setModuleName} moduleName={moduleName} 
//         addModule={() => {
//             dispatch(addModule({ name: moduleName, course: cid }));
//             setModuleName("");
//          }}
//         />
//         <br /><br /><br /><br />
//         <ul id="wd-modules" className="list-group rounded-0">
//         {modules
//           .filter((module: any) => module.course === cid)
//           .map((module: any) => (
//           <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
//             <div className="wd-title p-3 ps-2 bg-secondary">
//               <BsGripVertical className="me-2 fs-3" />
//               {!module.editing && module.name}
//               { module.editing && (
//                     <input className="form-control w-50 d-inline-block"
//                         onChange={(e) => 
//                             dispatch(
//                                 updateModule({ ...module, name: e.target.value })
//                               )
//                             }
//                         onKeyDown={(e) => {
//                             if (e.key === "Enter") {
//                             dispatch(
//                                 updateModule({ ...module, editing: false })
//                                 );
//                             }
//                         }}
//                         value={module.name}/>
//               )}
//               <ModuleControlButtons moduleId={module._id}
//                   deleteModule={(moduleId) => {
//                     dispatch(deleteModule(moduleId));
//                   }}
//                   editModule={(moduleId) => dispatch(editModule(moduleId))}
//                 />
//             </div>
//             {module.lessons && (
//               <ul className="wd-lessons list-group rounded-0">
//                 {module.lessons.map((lesson: any) => (
//                   <li className="wd-lesson list-group-item p-3 ps-1">
//                     <BsGripVertical className="me-2 fs-3" />
//                     {lesson.name}
//                     <LessonControlButtons />
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//         ))}
//       </ul>
//       </div>
// );}
import { useState, useEffect } from "react";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { BsGripVertical } from "react-icons/bs";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../../client";
import * as modulesClient from "./client";




export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const { currentUser } = useSelector((state: any) => state.accountReducer); 
  const dispatch = useDispatch();
  const fetchModules = async () => {
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    dispatch(addModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };



  useEffect(() => {
    fetchModules();
  }, []);


  return (
    <div className="wd-modules">
      <ModulesControls 
      setModuleName={setModuleName} 
      moduleName={moduleName} 
      addModule={createModuleForCourse} />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .map((module: any) => (
            <li key={module.id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.editing ? (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) =>
                      dispatch(updateModule({ ...module, name: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                    defaultValue={module.name}
                  />
                ) : (
                  module.name
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={(moduleId) => removeModule(moduleId)}

                  editModule={(moduleId) => dispatch(editModule(moduleId))}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li key={lesson.id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}