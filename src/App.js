import "./App.css";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import AuthLayout from "./layouts/AuthLayout";
import PublicLayout from "./layouts/PublicLayout";
import { PrivateRoute } from "./routes/PrivateRoute";
import { useContext, useEffect } from "react";
import { UserService } from "./services/userService";
import { REMOVE_USER, SET_USER } from "./constants";
import { AuthContext } from "./context/AuthContext";
import { useLoader } from "./hooks";
import Public from "./containers/Public";
import { PROTECTED_ROUTES_ADMIN } from "./routes/Routes";

const App = () => {
  const [startLoader, stopLoader] = useLoader();
  const { dispatch: authDispatch } = useContext(AuthContext);
  const dispatchSetUser = (payload) =>
    authDispatch({ type: SET_USER, payload });
  const removeUser = () => authDispatch({ type: REMOVE_USER });

  useEffect(() => {
    verifyUser();
  }, []);

  const verifyUser = () => {
    if (localStorage.getItem("KS_TOKEN") === "this is a contractor token") {
      handleVerifySuccess({ user: { userRole: "contractor" } });
    }
    if (localStorage.getItem("KS_TOKEN") === "this is a employee token") {
      handleVerifySuccess({ user: { userRole: "employee" } });
    }
  };

  const handleVerifySuccess = ({ user }) => {
    dispatchSetUser({ user });
  };

  const handleVerifyError = (err) => {
    removeUser();
  };

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/auth" component={AuthLayout} />
          {PROTECTED_ROUTES_ADMIN.map((r) => (
            // <PrivateRoute path={r.url} component={r.component} />
            <PrivateRoute path={r.url} component={<PublicLayout compoenent={r.component}/>} />
          ))}
          <Route path="/" component={Public} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
