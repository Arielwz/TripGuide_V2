import React, { useEffect, useState } from "react";
import ShowSaved from "./Components/ShowSaved";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./Pages/HomePage.js";
import UploadPage from "./Pages/UploadPage.js";
import LoginPage from "./Pages/LoginPage.js";
import RegistPage from "./Pages/RegistPage.js";
import NavigationComponent from "./Components/NavigationComponent.js";

function App() {
  const [hasLogin, setLogin] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  useEffect(() => {
    const checkLogin = async () => {
      const response = await fetch("/checkSession");
      const res = await response.json();

      if (res && res.success) {
        setLogin(true);
      } else {
        setLogin(false);
      }
    };
    checkLogin();
  }, []);
  return (
    <Router>
      <NavigationComponent
        hasLogin={hasLogin}
        onLogout={async () => {
          const response = await fetch("/logout");
          const res = await response.json();

          if (res && res.success) {
            setLogin(false);
          }
        }}
        onSearch={(key) => {
          setSearchKey(key);
        }}
      ></NavigationComponent>
      <div className="container full-width">
        <Switch>
          <Route path="/login">
            <LoginPage
              onLogin={() => {
                setLogin(true);
              }}
            />
          </Route>
          <Route path="/regist" component={RegistPage} />
          <Route path="/upload" component={UploadPage} />
          <Route path="/saved" component={ShowSaved} />
          <Route path="/">
            <HomePage searchKey={searchKey} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
