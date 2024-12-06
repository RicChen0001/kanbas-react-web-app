// import React from 'react';
// import { FaSearch } from 'react-icons/fa';

// export default function AssignmentSearchControls() {
//   return (
//     <div className="input-group" style={{ width: '300px' }}>
//       <span className="input-group-text">
//         <FaSearch />
//       </span>
//       <input
//         type="text"
//         className="form-control"
//         placeholder="Search..."
//         aria-label="Search"
//       />
//     </div>
//   );
// }

import { BsPlusLg } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export default function AssignmentSearch() {
  const { cid } = useParams();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  return (
    <div className="d-flex justify-content-between">
      <div
        className="input-group border border-1 rounded"
        style={{ maxWidth: "300px" }}
      >
        <span className="input-group-text bg-white border-0">
          <CiSearch />
        </span>
        <input
          id="wd-search-assignment"
          className="form-control border-0"
          placeholder="Search..."
          style={{ backgroundColor: "white" }}
        />
      </div>
      {currentUser.role === "FACULTY" && (
        <div className="float-end">
          <button
            id="wd-add-assignment"
            className="btn btn-secondary btn-outline-secondary me-1"
          >
            <BsPlusLg
              className="position-relative me-2"
              style={{ bottom: "1px" }}
            />
            Group
          </button>
          <Link to={`/Kanbas/Courses/${cid}/Assignments/NewAssignment`}>
            <button
              id="wd-add-assignment-group"
              className="btn btn-danger me-1"
            >
              <BsPlusLg
                className="position-relative me-2"
                style={{ bottom: "1px" }}
              />
              Assignment
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}