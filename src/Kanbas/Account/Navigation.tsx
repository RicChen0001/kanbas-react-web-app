// import { Link } from "react-router-dom";

// export default function AccountNavigation() {
//   return (
//     <div  style={{   borderLeft: '2px solid black',
//       paddingLeft: '20px', paddingRight: '25px' }}>
//       <Link
//         to="/Kanbas/Account/Signin"
//         className="list-group-item list-group-item-action text-danger"
//       >
//         Signin
//       </Link>
//       <Link
//         to="/Kanbas/Account/Signup"
//         className="list-group-item list-group-item-action text-danger"
//       >
//         Signup
//       </Link>
//       <Link
//         to="/Kanbas/Account/Profile"
//         className="list-group-item list-group-item-action text-danger"
//       >
//         Profile
//       </Link>
//     </div>
//   );
// }
// import { Link, useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
    

// export default function AccountNavigation() {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
//   const { pathname } = useLocation();
//   return (
//     <div
//       style={{
//         borderLeft: '2px solid black',
//         paddingLeft: '20px',
//         paddingRight: '25px'
//       }}
//     >
//       <Link
//         to="/Kanbas/Account/Signin"
//         className="list-group-item list-group-item-action text-danger"
//         style={{ marginBottom: '15px' }}
//       >
//         Signin
//       </Link>
//       <Link
//         to="/Kanbas/Account/Signup"
//         className="list-group-item list-group-item-action text-danger"
//         style={{ marginBottom: '15px' }}
//       >
//         Signup
//       </Link>
//       <Link
//         to="/Kanbas/Account/Profile"
//         className="list-group-item list-group-item-action text-danger"
//       >
//         Profile
//       </Link>
//     </div>
//   );
// }

/* <A5></A5> */
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";


// export default function AccountNavigation() {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const links = currentUser ? ["Profile"] : ["Signin", "Signup"];

//   return (
//     <div  style={{   borderLeft: '4px solid black',
//       paddingLeft: '115px', paddingRight: '20px' }}>
//       <Link
//         to="/Kanbas/Account/Signin"
//         className="list-group-item list-group-item-action text-danger"
//       >
//         Signin
//       </Link>
//       <Link
//         to="/Kanbas/Account/Signup"
//         className="list-group-item list-group-item-action text-danger"
//       >
//         Signup
//       </Link>
//       <Link
//         to="/Kanbas/Account/Profile"
//         className="list-group-item list-group-item-action text-danger"
//       >
//         Profile
//       </Link>
//     </div>
//   );
// }


import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function AccountNavigation() {
 const { currentUser } = useSelector((state: any) => state.accountReducer);
 const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
 const active = (path: string) => (pathname.includes(path) ? "active" : "");
 const { pathname } = useLocation();
 return (
   <div id="wd-account-navigation" className="list-group">
     {links.map((link) => (
       <Link key={link} to={`/Kanbas/Account/${link}`} className={`list-group-item ${active(link)}`}> {link} </Link>
     ))}
     {currentUser && currentUser.role === "ADMIN" && (
       <Link to={`/Kanbas/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
   </div>
);}

