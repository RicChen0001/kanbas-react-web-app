import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" >
      <h1 className="text-center">Sign up</h1>
      <form>
        <div className="form-group mb-3">
          <input
            type="text"
            placeholder="username"
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            placeholder="password"
            className="form-control"
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            placeholder="verify password"
            className="form-control"
          />
        </div>
        <button
          id="wd-signup-btn"
          type="submit"
          className="btn btn-primary w-100"
        >
          Sign up
        </button>
      </form>
      <div className="text-center mt-3">
        <Link id="wd-signin-link" to="/Kanbas/Account/Signin">
          Sign in
        </Link>
      </div>
    </div>
  );
}