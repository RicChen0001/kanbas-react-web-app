// import { Link } from "react-router-dom";

// export default function CoursesNavigation() {
//   return (
//     <div id="wd-courses-navigation"  className="wd list-group fs-5 rounded-0">

//       <Link id="wd-course-home-link"    to="/Kanbas/Courses/1234/Home" 
//       className="list-group-item active border border-0">Home</Link>
//       <Link id="wd-course-modules-link" to="/Kanbas/Courses/1234/Modules"
//       className="list-group-item text-danger border border-0">Modules
//         </Link>
//       <Link id="wd-course-piazza-link"  to="/Kanbas/Courses/1234/Piazza"
//       className="list-group-item text-danger border border-0">Piazza</Link>
//       <Link id="wd-course-zoom-link"    to="/Kanbas/Courses/1234/Zoom"
//       className="list-group-item text-danger border border-0">Zoom</Link>
//       <Link id="wd-course-quizzes-link" to="/Kanbas/Courses/1234/Assignments"
//       className="list-group-item text-danger border border-0">
//           Assignments</Link>
//       <Link id="wd-course-assignments-link" to="/Kanbas/Courses/1234/Quizzes"
//       className="list-group-item text-danger border border-0">Quizzes
//         </Link>
//       <Link id="wd-course-grades-link"  to="/Kanbas/Courses/1234/Grades"
//       className="list-group-item text-danger border border-0">Grades</Link>
//       <Link id="wd-course-people-link"  to="/Kanbas/Courses/1234/People"
//       className="list-group-item text-danger border border-0">People</Link>
//     </div>
// );}


import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People"
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => {
        const linkPath = link;
        const url = `/Kanbas/Courses/${cid}/${linkPath}`;
        
        const isActive = pathname.endsWith(`/${linkPath}`) || pathname.includes(`/${linkPath}/`);

        return (
          <Link
            key={linkPath}
            to={url}
            id={`wd-course-${linkPath}-link`}
            className={`list-group-item ${isActive ? 'active' : 'text-danger'} border border-0`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
