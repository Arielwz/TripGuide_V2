import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/Authen.css";

export default function RegistPage(props) {
  const [userInfo, setUserInfo] = useState({});
  const [errorText, setErrorText] = useState("");
  return (
    <div className="/regist">
      <div className="title">
        <h3>Create New Account</h3>
      </div>
      <div className="row">
        <div className="col-sm-4 box border">
          <form
            id="formRegist"
            onSubmit={async (ev) => {
              ev.preventDefault();
              if (!userInfo.username || !userInfo.password) {
                setErrorText("Username and password required!");
                return;
              }
              setErrorText("");
              const response = await fetch("/regist", {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo), // body data type must match "Content-Type" header
              });
              const res = await response.json();
              if (res && res.success) {
                props.history.push("/login");
              } else {
                setErrorText(res.message || "Sign up failed!");
              }
            }}
          >
            <div className="mb-2">
              <label htmlFor="InputUsername" className="form-label">
                Username
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(ev) => {
                  setUserInfo({
                    ...userInfo,
                    username: ev.target.value,
                  });
                }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="InputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                onChange={(ev) => {
                  setUserInfo({
                    ...userInfo,
                    password: ev.target.value,
                  });
                }}
              />
            </div>
            {!!errorText && (
              <div
                id="error"
                className="alert-danger"
                role="alert"
                style={{ marginBottom: "4px" }}
              >
                {errorText}
              </div>
            )}
            <div className="d-grid gap-2 mx-auto center-font">
              <button type="submit" className="btn btn-success">
                Sign Up
              </button>
            </div>
          </form>
          <hr />
          <div className="center-font">
            <p className="secondfont">Already have an account?</p>
            <Link
              className="btn btn-primary secondfont"
              to="/login"
              role="button"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
