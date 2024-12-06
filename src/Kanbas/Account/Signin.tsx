// import { Link } from "react-router-dom";
// export default function Signin() {
//   return (
//     <div id="wd-signin-screen">
//       <h1>Sign in</h1>
//       <input id="wd-username"
//              placeholder="username"
//              className="form-control mb-2"/>
//       <input id="wd-password"
//              placeholder="password" type="password"
//              className="form-control mb-2"/>
//       <Link id="wd-signin-btn"
//             to="/Kanbas/Account/Profile"
//             className="btn btn-primary w-100">
//             Sign in </Link>
//       <Link id="wd-signup-link" to="/Kanbas/Account/Signup">Sign up</Link>
//     </div>
// );}


// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { setCurrentUser } from "./reducer";
// import { useDispatch } from "react-redux";
// import * as db from "../Database";

// export default function Signin() {
//   const [credentials, setCredentials] = useState<any>({});
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const signin = () => {
//     const user = db.users.find(
//       (u: any) => u.username === credentials.username && u.password === credentials.password);
//     if (!user) return;
//     dispatch(setCurrentUser(user));
//     navigate("/Kanbas/Dashboard");
//   };
//   return (
//     <div id="wd-signin-screen">
//       <h1>Sign in</h1>
//       <input defaultValue={credentials.username}
//              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
//              className="form-control mb-2" placeholder="username" id="wd-username" />
//       <input defaultValue={credentials.password}
//              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
//              className="form-control mb-2" placeholder="password" type="password" id="wd-password" />
//       <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100" > Sign in </button>
//       <Link id="wd-signup-link" to="/Kanbas/Account/Signup"> Sign up </Link>
//     </div>
// );}

// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { setCurrentUser } from "./reducer";
// import { useDispatch } from "react-redux";
// import * as client from "./client";

// export default function Signin() {
//   const [credentials, setCredentials] = useState<any>({});
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const signin = async () => {
//     const user = await client.signin(credentials);
//     if (!user) return;
//     dispatch(setCurrentUser(user));
//     navigate("/Kanbas/Dashboard");
//   };

//   return (
//     <div id="wd-signin-screen">
//       <h1>Sign in</h1>
//       <input
//         defaultValue={credentials.username}
//         onChange={(e) =>
//           setCredentials({ ...credentials, username: e.target.value })
//         }
//         id="wd-username"
//         placeholder="username"
//         className="form-control mb-2"
//       />
//       <input
//         defaultValue={credentials.password}
//         onChange={(e) =>
//           setCredentials({ ...credentials, password: e.target.value })
//         }
//         id="wd-password"
//         placeholder="password"
//         type="password"
//         className="form-control mb-2"
//       />
//       <button
//         onClick={signin}
//         id="wd-signin-btn"
//         className="btn btn-primary w-100"
//       >
//         {" "}
//         Sign in{" "}
//       </button>

//       <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
//         Sign up
//       </Link>
//     </div>
//   );
// }
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<{ username: string; password: string }>({ username: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    setLoading(true);
    setError(null);
    try {
      const user = await client.signin(credentials);
      if (!user) {
        setError("Invalid username or password.");
        setLoading(false);
        return;
      }
      dispatch(setCurrentUser(user));
      navigate("/Kanbas/Dashboard");
    } catch (err: any) {
      console.error("Sign-in error:", err);
      setError("An error occurred during sign-in. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div id="wd-signin-screen">
      <h1>Sign in</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <input
        type="text"
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        id="wd-username"
        placeholder="username"
        className="form-control mb-2"
      />
      <input
        type="password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        id="wd-password"
        placeholder="password"
        className="form-control mb-2"
      />
      <button
        onClick={signin}
        id="wd-signin-btn"
        className="btn btn-primary w-100"
        disabled={loading}
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
      <Link id="wd-signup-link" to="/Kanbas/Account/Signup">
        Sign up
      </Link>
    </div>
  );
}