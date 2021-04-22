import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../styles/Authen.css";

export default function RegistPage(props) {
  const [userInfo, setUserInfo] = useState({});
  const [errorText, setErrorText] = useState("");
  return (
    <div className="/regist">
      <header className="title">
        <h1 style={{ fontSize: "40px" }}>Create New Account</h1>
      </header>
      <main className="row">
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
                method: "POST",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
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
                aria-label="input username"
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
                aria-label="input password"
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
              <button
                type="submit"
                className="btn btn-success"
                aria-label="sign up"
              >
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
              aria-label="sign in"
            >
              Sign In
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
