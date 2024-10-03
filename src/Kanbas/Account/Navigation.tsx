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
import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div
      style={{
        borderLeft: '2px solid black',
        paddingLeft: '20px',
        paddingRight: '25px'
      }}
    >
      <Link
        to="/Kanbas/Account/Signin"
        className="list-group-item list-group-item-action text-danger"
        style={{ marginBottom: '15px' }} // Add space between the items
      >
        Signin
      </Link>
      <Link
        to="/Kanbas/Account/Signup"
        className="list-group-item list-group-item-action text-danger"
        style={{ marginBottom: '15px' }} // Add space between the items
      >
        Signup
      </Link>
      <Link
        to="/Kanbas/Account/Profile"
        className="list-group-item list-group-item-action text-danger"
      >
        Profile
      </Link>
    </div>
  );
}
