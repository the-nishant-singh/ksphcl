import React, { useEffect, useContext, useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { get as lodashGet } from "lodash";
import Sidebar from "../components/Sidebar/Sidebar";
import MainContainer from "../containers/MainContainer/MainContainer";
import { AuthContext } from "../context/AuthContext";
import { PROTECTED_ROUTES, PROTECTED_ROUTES_ADMIN } from "../routes/Routes";

const getActiveRoute = (userRole) => {
  const processedRoutes =
    userRole === "employee"
      ? PROTECTED_ROUTES_ADMIN
      : userRole === "contractor"
      ? PROTECTED_ROUTES
      : [];

  const curRoute = processedRoutes
    .slice()
    .reverse()
    .find((route) => window.location.pathname.includes(route.url));
  if (curRoute?.childRoutes) {
    const curSubRoute = curRoute.childRoutes.find((route) =>
      window.location.pathname.includes(route.url)
    );
    if (curSubRoute) return `${curRoute?.name} > ${curSubRoute.name}`;
  } else {
    return curRoute?.name;
  }
};

const PublicLayout = ({compoenent}) => {
  const history = useHistory();
  const { state } = useContext(AuthContext);
  const userRole = lodashGet(state, "user.userRole");
  const [activeRoute, setActiveRoute] = useState(getActiveRoute(userRole));

  useEffect(() => {
    setActiveRoute(getActiveRoute(userRole));
  }, [userRole]);

  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  });

  return (
    <div>
      <div className="main-content">
        <div>
          <Sidebar active={activeRoute} setActive={setActiveRoute} />
        </div>
        <div style={{ height: "100vh", overflowY: "auto", flexGrow: 1 }}>
          {/* <Switch>
            <Route
              path={"/"}
              render={() => }
            />
          </Switch> */}
          <MainContainer title={activeRoute} compoenent={compoenent}/>
        </div>
      </div>
    </div>
  );
};

export default PublicLayout;
