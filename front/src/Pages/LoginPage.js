import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./../styles/Authen.css";

import PropTypes from "prop-types";

const LoginPage = function LoginPage(props) {
  const [userInfo, setUserInfo] = useState({});
  const [errorText, setErrorText] = useState("");
  return (
    <div className="/login">
      <header className="title">
        <h1 style={{ fontSize: "40px" }}>Sign in to upload posts:</h1>
      </header>

      <main className="row">
        <div className="col-sm-4 box border">
          <form
            id="formLogin"
            onSubmit={async (ev) => {
              ev.preventDefault();
              if (!userInfo.username || !userInfo.password) {
                setErrorText("Username and password are required!");
                return;
              }
              setErrorText("");
              const response = await fetch("/login", {
                method: "POST",
                credentials: "same-origin",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userInfo),
              });
              const res = await response.json();

              if (res && res.success) {
                props.onLogin && props.onLogin();
                props.history.push("/");
              } else {
                setErrorText(res.message || "Sign in failed!");
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
                aria-label="input Username"
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
                aria-label="input Password"
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
              <button type="submit" className="btn btn-primary" aria-label="sign in">
                Sign In
              </button>
            </div>
          </form>
          <hr />
          <div className="center-font">
            <Link
              className="btn btn-success secondfont"
              to="/regist"
              role="button"
              aria-label="creat new account"
            >
              Creat New Account
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func,
};

export default withRouter(LoginPage);
