import { Redirect, Route } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem("KS_TOKEN");
  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return Component;
        } else return <Redirect to="/auth/login" />;
      }}
    />
  );
};
