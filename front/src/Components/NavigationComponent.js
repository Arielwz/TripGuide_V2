import React from "react";
import { Link, useLocation, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import SearchComponent from "../Components/SearchComponent";
import "./../styles/nav.css";

const Nav = function NavigationComponent(props) {
  const location = useLocation();
  console.log("Render NavigationComponent", location);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link
          className="navbar-brand nav-logo"
          aria-label="Homepage"
          to="/"
          onClick={async (ev) => {
            ev.preventDefault();
            props.onSearch("");
            props.history.push("/");
          }}
        >
          Bay Area Trip Guide
        </Link>
        <div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={
                  "nav-link" + (location.pathname === "/" ? " active" : "")
                }
                aria-label="View trips"
                aria-current="page"
                onClick={async (ev) => {
                  ev.preventDefault();
                  props.onSearch("");
                  props.history.push("/");
                }}
                to="/list"
              >
                View Trips
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={
                  "nav-link" +
                  (location.pathname === "/upload" ? " active" : "")
                }
                aria-label="upload"
                aria-current="page"
                to="/upload"
              >
                Upload
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/saved"
                aria-label="My Favourites"
                aria-current="page"
              >
                My Favourites
              </Link>
            </li>
          </ul>

          <div>
            <SearchComponent onSearch={props.onSearch} />
          </div>

          <div>
            <button
              className="btn btn-success"
              type="submit"
              style={{ marginLeft: "30px" }}
              aria-label="Sign In/ Logout"
              onClick={async (ev) => {
                ev.preventDefault();
                const { hasLogin, onLogout } = props;
                if (hasLogin) {
                  onLogout && onLogout();
                } else {
                  props.history.replace("/login");
                }
              }}
            >
              {props.hasLogin ? "Logout" : "Sign In"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

Nav.propTypes = {
  hasLogin: PropTypes.bool,
  onLogout: PropTypes.func,
};

export default withRouter(Nav);
