// import React, { useEffect } from 'react';
// import { useNavigate, useParams } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { addAssignment, updateAssignment } from "./reducer";

// const AssignmentEditor = () => {
//   const { courseId, assignmentId } = useParams();
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // Get existing assignment if editing
//   const assignment = useSelector((state: any) => 
//     state.assignmentsReducer.assignments.find(
//       (a: any) => a._id === assignmentId
//     )
//   );

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const formData = {
//       title: (document.getElementById("wd-name") as HTMLInputElement).value,
//       description: (document.getElementById("wd-description") as HTMLTextAreaElement).value,
//       points: parseInt((document.getElementById("wd-points") as HTMLInputElement).value),
//       dueDate: (document.getElementById("wd-due-date") as HTMLInputElement).value,
//       availableFromDate: (document.getElementById("wd-available-from") as HTMLInputElement).value,
//       availableUntilDate: (document.getElementById("wd-available-until") as HTMLInputElement).value,
//       _id: assignmentId || new Date().getTime().toString(),
//       course: courseId
//     };

//     if (assignmentId) {
//       dispatch(updateAssignment(formData));
//     } else {
//       dispatch(addAssignment(formData));
//     }
//     navigate(`/Kanbas/Courses/${courseId}/Assignments`);
//   };

//   // Pre-fill form if editing
//   useEffect(() => {
//     if (assignment) {
//       (document.getElementById("wd-name") as HTMLInputElement).value = assignment.title;
//       (document.getElementById("wd-description") as HTMLTextAreaElement).value = assignment.description;
//       // ... set other fields ...
//     }
//   }, [assignment]);

//   return (
//     <div className="container mt-4">
//       <form id="wd-assignments-editor" onSubmit={handleSubmit}>
//         {/* Assignment Name */}
//         <div className="mb-3">
//           <label htmlFor="wd-name" className="form-label">
//             Assignment Name
//           </label>
//           <input
//             type="text"
//             className="form-control"
//             id="wd-name"
//             defaultValue="A1"
//           />
//         </div>

//         {/* Description */}
//         <div className="mb-3">
//           <textarea
//             className="form-control fixed-textarea"
//             id="wd-description"
//             defaultValue={`The assignment is available online

// Submit a link to the landing page of your Web application running on Netlify.

// The landing page should include the following:
// • Your full name and section
// • Links to each of the lab assignments
// • Link to the Kanbas application
// • Links to all relevant source code repositories

// The Kanbas application should include a link to navigate back to the landing page.`}
//           />
//         </div>

//         {/* Points */}
//         <div className="row mb-3">
//           <div className="col-md-2">
//             <label htmlFor="wd-points" className="form-label">
//               Points
//             </label>
//           </div>
//           <div className="col-md-10">
//             <input
//               type="number"
//               className="form-control"
//               id="wd-points"
//               defaultValue={100}
//             />
//           </div>
//         </div>

//         {/* Assignment Group */}
//         <div className="row mb-3">
//           <div className="col-md-2">
//             <label htmlFor="wd-assignment-group" className="form-label">
//               Assignment Group
//             </label>
//           </div>
//           <div className="col-md-10">
//             <select className="form-select" id="wd-assignment-group">
//               <option value="ASSIGNMENTS">ASSIGNMENTS</option>
//             </select>
//           </div>
//         </div>

//         {/* Display Grade As */}
//         <div className="row mb-3">
//           <div className="col-md-2">
//             <label htmlFor="wd-display-grade-as" className="form-label">
//               Display Grade as
//             </label>
//           </div>
//           <div className="col-md-10">
//             <select className="form-select" id="wd-display-grade-as">
//               <option value="Percentage">Percentage</option>
//             </select>
//           </div>
//         </div>

//         {/* Submission Type */}
//         <div className="row mb-3">
//           <div className="col-md-2">
//             <label htmlFor="wd-submission-type" className="form-label">
//               Submission Type
//             </label>
//           </div>
//           <div className="col-md-10">
//             <select className="form-select mb-2" id="wd-submission-type">
//               <option value="Online">Online</option>
//             </select>
//             <div className="card">
//               <div className="card-body">
//                 <h6 className="card-subtitle mb-2 text-muted">
//                   Online Entry Options
//                 </h6>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="wd-text-entry"
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="wd-text-entry"
//                   >
//                     Text Entry
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="wd-website-url"
//                     defaultChecked
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="wd-website-url"
//                   >
//                     Website URL
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="wd-media-recordings"
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="wd-media-recordings"
//                   >
//                     Media Recordings
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="wd-student-annotation"
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="wd-student-annotation"
//                   >
//                     Student Annotation
//                   </label>
//                 </div>
//                 <div className="form-check">
//                   <input
//                     className="form-check-input"
//                     type="checkbox"
//                     id="wd-file-uploads"
//                   />
//                   <label
//                     className="form-check-label"
//                     htmlFor="wd-file-uploads"
//                   >
//                     File Uploads
//                   </label>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Assign Section */}
//         <div className="row mb-3">
//           <div className="col-md-2">
//             <label className="form-label">Assign</label>
//           </div>
//           <div className="col-md-10">
//             <div className="card">
//               <div className="card-body">
//                 {/* Assign To */}
//                 <div className="mb-3">
//                   <label htmlFor="wd-assign-to" className="form-label">
//                     Assign to
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="wd-assign-to"
//                     defaultValue="Everyone"
//                   />
//                 </div>
//                 {/* Due Date */}
//                 <div className="mb-3">
//                   <label htmlFor="wd-due-date" className="form-label">
//                     Due
//                   </label>
//                   <input
//                     type="datetime-local"
//                     className="form-control"
//                     id="wd-due-date"
//                     defaultValue="2024-05-13T23:59"
//                   />
//                 </div>
//                 {/* Available From and Until */}
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label
//                       htmlFor="wd-available-from"
//                       className="form-label"
//                     >
//                       Available from
//                     </label>
//                     <input
//                       type="datetime-local"
//                       className="form-control"
//                       id="wd-available-from"
//                       defaultValue="2024-05-06T00:00"
//                     />
//                   </div>
//                   <div className="col-md-6 mb-3">
//                     <label
//                       htmlFor="wd-available-until"
//                       className="form-label"
//                     >
//                       Until
//                     </label>
//                     <input
//                       type="datetime-local"
//                       className="form-control"
//                       id="wd-available-until"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="my-4" style={{ borderTop: '2px solid #adb5bd' }} />

//         {/* Action Buttons */}
//         <div className="text-end mt-3">
//           <button
//             type="button"
//             className="btn btn-secondary me-2"
//             onClick={() => navigate(`/Kanbas/Courses/${courseId}/Assignments`)}
//           >
//             Cancel
//           </button>
//           <button type="submit" className="btn btn-danger">
//             Save
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default AssignmentEditor;

import "../../styles.css";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment as updateAssignmentAction, setAssignments } from "./reducer";
import * as assignmentsClient from "./client";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { assignments } = useSelector((state: any) => state.assignmentsReducer);
  const dispatch = useDispatch();

  const defaultAssignment = {
    title: "",
    description: "",
    points: 0,
    assignmentGroup: "ASSIGNMENTS",
    gradeAs: "PERCENTAGE",
    submissionType: "ONLINE",
    onlineEntryOptions: [
      { id: "wd-text-entry", label: "Text Entry" },
      { id: "wd-website-url", label: "Website URL" },
      { id: "wd-media-recordings", label: "Media Recordings" },
      { id: "wd-student-annotation", label: "Student Annotation" },
      { id: "wd-file-upload", label: "File Uploads" },
    ],
    dueDate: "",
    availableFrom: "",
    availableUntil: "",
  };

  const [assignment, setAssignment] = useState(defaultAssignment);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadAssignment = async () => {
      if (aid !== "NewAssignment" && aid) {
        setLoading(true);
        const fetchedAssignment = await assignmentsClient.fetchAssignmentById(aid);
        setAssignment(fetchedAssignment || defaultAssignment);
        setLoading(false);
      }
    };
    loadAssignment();
  }, [aid]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const assignmentToSave = {
      ...assignment,
      course: cid,
    };

    if (aid !== "NewAssignment" && aid) {
      const updated = await assignmentsClient.updateAssignment(aid, assignmentToSave);
      dispatch(updateAssignmentAction(updated));
    } else {
      const created = await assignmentsClient.createAssignment(cid!, assignmentToSave);
      dispatch(addAssignment(created));
    }
    navigate(`/Kanbas/Courses/${cid}/Assignments`);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div id="wd-assignments-editor" className="me-3">
      <form onSubmit={handleSave}>
        <label htmlFor="wd-name" className="mb-3">
          <b>Assignment Name</b>
        </label>
        <div className="row mb-3">
          <div className="col-sm-12">
            <input
              className="form-control"
              id="wd-name"
              placeholder="Assignment Title"
              value={assignment.title}
              onChange={(e) =>
                setAssignment({ ...assignment, title: e.target.value })
              }
              required
              readOnly={currentUser.role !== "FACULTY"}
            />
          </div>
        </div>

        <div className="mb-3 row">
          <div className="col-sm-12">
            <textarea
              value={assignment.description}
              placeholder="Assignment Description"
              onChange={(e) =>
                setAssignment({ ...assignment, description: e.target.value })
              }
              className="form-control"
              id="wd-description"
              rows={10}
              required
              readOnly={currentUser.role !== "FACULTY"}
            ></textarea>
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-points" className="col-sm-2 col-form-label">
            <span className="float-end">Points</span>
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              id="wd-points"
              value={assignment.points}
              placeholder="Points"
              onChange={(e) =>
                setAssignment({ ...assignment, points: Number(e.target.value) })
              }
              min="1"
              required
              readOnly={currentUser.role !== "FACULTY"}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label htmlFor="wd-group" className="col-sm-2 col-form-label">
            <span className="float-end">Assignment Group</span>
          </label>
          <div className="col-sm-10">
            <select
              id="wd-group"
              className="form-select"
              disabled={currentUser.role !== "FACULTY"}
              value={assignment.assignmentGroup}
              onChange={(e) =>
                setAssignment({ ...assignment, assignmentGroup: e.target.value })
              }
            >
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="wd-display-grade-as"
            className="col-sm-2 col-form-label"
          >
            <span className="float-end">Display Grade as</span>
          </label>
          <div className="col-sm-10">
            <select
              id="wd-display-grade-as"
              className="form-select"
              disabled={currentUser.role !== "FACULTY"}
              value={assignment.gradeAs}
              onChange={(e) =>
                setAssignment({ ...assignment, gradeAs: e.target.value })
              }
            >
              <option value="PERCENTAGE">PERCENTAGE</option>
              <option value="GRADE">GRADE</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <label
            htmlFor="wd-submission-type"
            className="col-sm-2 col-form-label"
          >
            <span className="float-end">Submission Type</span>
          </label>
          <div className="col-sm-10">
            <div className="border border-gray rounded">
              <div className="ms-3 me-3">
                <div className="pt-3 pb-3">
                  <select
                    id="wd-submission-type"
                    className="form-select"
                    disabled={currentUser.role !== "FACULTY"}
                    value={assignment.submissionType}
                    onChange={(e) =>
                      setAssignment({ ...assignment, submissionType: e.target.value })
                    }
                  >
                    <option value="ONLINE">Online</option>
                    <option value="OFFLINE">Offline</option>
                  </select>
                </div>
                <div className="pt-2">
                  {(assignment.onlineEntryOptions || []).map(
                    (option: { id: string; label: string }) => (
                      <div className="form-check pb-3" key={option.id}>
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id={option.id}
                          checked={assignment.onlineEntryOptions.some(
                            (opt: any) => opt.id === option.id
                          )}
                          onChange={(e) => {
                            const updatedOptions = e.target.checked
                              ? [...assignment.onlineEntryOptions, option]
                              : assignment.onlineEntryOptions.filter(
                                  (opt: any) => opt.id !== option.id
                                );
                            setAssignment({ ...assignment, onlineEntryOptions: updatedOptions });
                          }}
                          disabled={currentUser.role !== "FACULTY"}
                        />
                        <label className="form-check-label" htmlFor={option.id}>
                          {option.label}
                        </label>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <label htmlFor="wd-assign-to" className="col-sm-2 col-form-label">
            <span className="float-end">Assign</span>
          </label>
          <div className="col-sm-10">
            <div className="border border-gray rounded">
              <div className="ms-3 me-3 mt-3 mb-3">
                <label htmlFor="wd-assign-to" className="form-label">
                  <b>Assign to</b>
                </label>
                <div className="d-flex align-items-center border border-gray rounded">
                  <span className="border border-gray bg-light rounded p-2 m-2">
                    Everyone
                  </span>
                </div>
                <label htmlFor="wd-due-date" className="form-label">
                  <b>Due</b>
                </label>
                <div className="input-group mb-3">
                  <input
                    type="datetime-local"
                    id="wd-due-date"
                    className="form-control"
                    value={assignment.dueDate || ''}
                    onChange={(e) =>
                      setAssignment({ ...assignment, dueDate: e.target.value })
                    }
                    required
                    readOnly={currentUser.role !== "FACULTY"}
                  />
                </div>

                <div className="row mb-3 d-flex">
                  <div className="col-sm-6">
                    <label htmlFor="wd-available-from" className="form-label">
                      <b>Available from</b>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        id="wd-available-from"
                        type="datetime-local"
                        className="form-control"
                        value={assignment.availableFrom || ''}
                        onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            availableFrom: e.target.value,
                          })
                        }
                        required
                        readOnly={currentUser.role !== "FACULTY"}
                      />
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="wd-available-until" className="form-label">
                      <b>Until</b>
                    </label>
                    <div className="input-group mb-3">
                      <input
                        id="wd-available-until"
                        type="datetime-local"
                        className="form-control"
                        value={assignment.availableUntil || ''}
                        onChange={(e) =>
                          setAssignment({
                            ...assignment,
                            availableUntil: e.target.value,
                          })
                        }
                        required
                        readOnly={currentUser.role !== "FACULTY"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {currentUser.role === "FACULTY" && (
          <div className="row mb-3 d-flex justify-content-between float-end">
            <div>
              <Link to={`/Kanbas/Courses/${cid}/Assignments`}>
                <button
                  id="wd-edit-assignment-cancel"
                  className="btn btn-secondary btn-outline-secondary me-1"
                  type="button"
                >
                  Cancel
                </button>
              </Link>
              <button
                id="wd-edit-assignment-save"
                className="btn btn-danger me-1"
                type="submit"
              >
                Save
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}