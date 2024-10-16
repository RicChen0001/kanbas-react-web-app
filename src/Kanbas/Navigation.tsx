// import { Link } from "react-router-dom";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid} from "react-icons/lia";
// import { LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import { useLocation } from "react-router";


// export default function KanbasNavigation() {

//   const { pathname } = useLocation();
//   return (
//     <div id="wd-kanbas-navigation" style={{ width: 110}} className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
//       <a id="wd-neu-link" target="_blank" rel="noopener noreferrer" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0 text-center">
//         <img src=" NEU.png" width="70px" alt="NEU Logo" />
//       </a>

//       <Link to="/Kanbas/Account/Signin" id="wd-account-link" className={`list-group-item text-center border-0 ${pathname === "/Kanbas/Account/Signin" ? 'bg-white text-danger' : 'bg-black text-white'}`}>
//         <FaRegCircleUser className={`fs-1 ${pathname === "/Kanbas/Account/Signin" ? 'text-danger' : 'text-white'}`} /><br />
//         Account
//       </Link>

//       <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" className={`list-group-item text-center border-0 ${pathname === "/Kanbas/Dashboard" ? 'bg-white text-danger' : 'bg-black text-danger'}`}>
//         <AiOutlineDashboard className={`fs-1 ${pathname === "/Kanbas/Dashboard" ? 'text-danger' : 'text-danger'}`} /><br />
//         Dashboard
//       </Link>

//       <Link to="/Kanbas/Courses" id="wd-course-link" className={`list-group-item text-center border-0 ${pathname === "/Kanbas/Courses" ? 'bg-white text-danger' : 'bg-black text-danger'}`}>
//         <LiaBookSolid className={`fs-1 ${pathname === "/Kanbas/Courses" ? 'text-danger' : 'text-danger'}`} /><br />
//         Courses
//       </Link>

//       <Link to="/Kanbas/Calendar" id="wd-calendar-link" className={`list-group-item text-center border-0 ${pathname === "/Kanbas/Calendar" ? 'bg-white text-danger' : 'bg-black text-danger'}`}>
//         <IoCalendarOutline className={`fs-1 ${pathname === "/Kanbas/Calendar" ? 'text-danger' : 'text-danger'}`} /><br />
//         Calendar
//       </Link>

//       <Link to="/Kanbas/Inbox" id="wd-inbox-link" className={`list-group-item text-center border-0 ${pathname === "/Kanbas/Inbox" ? 'bg-white text-danger' : 'bg-black text-danger'}`}>
//         <FaInbox className={`fs-1 ${pathname === "/Kanbas/Inbox" ? 'text-danger' : 'text-danger'}`} /><br />
//         Inbox
//       </Link>

//       <Link to="/Labs" id="wd-labs-link" className={`list-group-item text-center border-0 ${pathname === "/Labs" ? 'bg-white text-danger' : 'bg-black text-danger'}`}>
//         <LiaCogSolid className={`fs-1 ${pathname === "/Labs" ? 'text-danger' : 'text-danger'}`} /><br />
//         Labs
//       </Link>
//     </div>
//   );
// }
// import { Link } from "react-router-dom";
// import { AiOutlineDashboard } from "react-icons/ai";
// import { IoCalendarOutline } from "react-icons/io5";
// import { LiaBookSolid} from "react-icons/lia";
// import { LiaCogSolid } from "react-icons/lia";
// import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
// import { useLocation } from "react-router";


// export default function KanbasNavigation() {

//   const { pathname } = useLocation();
//   return (
//     <div id="wd-kanbas-navigation" style={{ width: 110}} className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
//       <a id="wd-neu-link" target="_blank" rel="noopener noreferrer" href="https://www.northeastern.edu/" className="list-group-item bg-black border-0 text-center">
//         <img src="NEU.png" width="70px" alt="NEU Logo" />
//       </a>

//       <Link to="/Kanbas/Account/Signin" id="wd-account-link" className={`list-group-item text-center border-0 ${pathname === "/Kanbas/Account/Signin" ? 'bg-white text-danger' : 'bg-black text-white'}`}>
//         <FaRegCircleUser className={`fs-1 ${pathname === "/Kanbas/Account/Signin" ? 'text-danger' : 'text-white'}`} /><br />
//         Account
//       </Link>

//       <Link to="/Kanbas/Dashboard" id="wd-dashboard-link" className={`list-group-item text-center border-0 ${pathname === "/Kanbas/Dashboard" ? 'bg-white text-danger' : 'bg-black text-danger'}`}>
//         <AiOutlineDashboard className={`fs-1 ${pathname === "/Kanbas/Dashboard" ? 'text-danger' : 'text-danger'}`} /><br />
//         Dashboard
//       </Link>

//       <Link to="/Kanbas/Courses" id="wd-course-link" className={`list-group-item text-center border-0 ${pathname === "/Kanbas/Courses" ? 'bg-white text-danger' : 'bg-black text-danger'}`}>
//         <LiaBookSolid className={`fs-1 ${pathname === "/Kanbas/Courses" ? 'text-danger' : 'text-danger'}`} /><br />
//         Courses
//       </Link>

//       <Link to="/Kanbas/Calendar" id="wd-calendar-link" className={`list-group-item text-center border-0 ${pathname === "/Kanbas/Calendar" ? 'bg-white text-danger' : 'bg-black text-danger'}`}>
//         <IoCalendarOutline className={`fs-1 ${pathname === "/Kanbas/Calendar" ? 'text-danger' : 'text-danger'}`} /><br />
//         Calendar
//       </Link>

//       <Link to="/Kanbas/Inbox" id="wd-inbox-link" className={`list-group-item text-center border-0 ${pathname === "/Kanbas/Inbox" ? 'bg-white text-danger' : 'bg-black text-danger'}`}>
//         <FaInbox className={`fs-1 ${pathname === "/Kanbas/Inbox" ? 'text-danger' : 'text-danger'}`} /><br />
//         Inbox
//       </Link>

//       <Link to="/Labs" id="wd-labs-link" className={`list-group-item text-center border-0 ${pathname === "/Labs" ? 'bg-white text-danger' : 'bg-black text-danger'}`}>
//         <LiaCogSolid className={`fs-1 ${pathname === "/Labs" ? 'text-danger' : 'text-danger'}`} /><br />
//         Labs
//       </Link>
//     </div>
//   );
// }

import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";
export default function KanbasNavigation() {
  const { pathname } = useLocation();
  const links = [
    { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
    { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
    { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
    { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
    { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
  ];
  return (
    <div id="wd-kanbas-navigation" style={{width: 120}}
         className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2">
      <a id="wd-neu-link" target="_blank" href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center">
        <img src="NEU.png" width="75px" /></a>
      <Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
        <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
        <br />
        Account
      </Link>
      {links.map((link) => (
        <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
          {link.icon({ className: "fs-1 text-danger"})}
          <br />
          {link.label}
        </Link>
      ))}
    </div>
);}