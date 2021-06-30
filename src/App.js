import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import MainPage from "./pages/MainPage";

import { isUserStoredLocally } from "./localStorage";

function App() {
  const isAuthorized = useSelector((state) => Boolean(state.login.token));
  const isStoredLocally = isUserStoredLocally();

  return (
    <Router basename="/lifeIt-test-task">
      <Switch>
        <Route exact path="/">
          <MainPage authorized={isAuthorized || isStoredLocally} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegistrationPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
