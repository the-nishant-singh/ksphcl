import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "../containers/Login/Login";
import { AuthContext } from "../context/AuthContext";
import { get as lodashGet, includes as lodashIncludes } from "lodash";
const AuthLayout = () => {
  const { state } = useContext(AuthContext);
  return (
    <Switch>
      {state.isAuthorized ? (
        <Redirect to={"/"} />
      ) : (
        <>
          <Route path="/auth/login/:id" exact component={Login} />
          <Route path="/auth/login" exact component={Login} />
        </>
      )}
    </Switch>
  );
};

export default AuthLayout;
