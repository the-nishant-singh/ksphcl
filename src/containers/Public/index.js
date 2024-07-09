import React, { useContext, useState } from "react";
import classes from "./index.module.css";
import TabsComponent from "../../components/Tabs/Tabs";
import Home from "./Home";
import Organization from "./Organization";
import Tenders from "./Tenders";
import Projects from "./Projects";
import Innovations from "./Innovations";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/";
import { AuthContext } from "../../context/AuthContext";
import { REMOVE_USER, SET_USER } from "../../constants";

const Public = () => {
  const { search } = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(search);
  const [curTab, setCurTab] = useState(Number(searchParams.get("tab") || 0));
  const { dispatch: authDispatch, state } = useContext(AuthContext);
  const dispatchSetUser = (payload) =>
    authDispatch({ type: SET_USER, payload });

  const tabs = [
    {
      name: "Home",
      component: <Home />,
    },
    {
      name: "Organization",
      component: <Organization />,
    },
    {
      name: "Tenders",
      component: <Tenders />,
    },
    {
      name: "Projects",
      component: <Projects />,
    },
    {
      name: "Innovations",
      component: <Innovations />,
    },
  ];

  const updateQueryParams = (type, value) => {
    searchParams.set(type, value);
    searchParams.delete("districtName");
    setCurTab(value);
    history.push({ search: searchParams.toString() });
  };

  const handleContrctorLogin = () => {
    const token = "this is a contractor token";
    const user = {
      userRole: "contractor",
    };
    dispatchSetUser({ user, token });
  };

  const handleEmployeeLogin = () => {
    const token = "this is a employee token";
    const user = {
      userRole: "employee",
    };
    dispatchSetUser({ user, token });
    history.push("/dashboard");
  };

  const handleLogout = () => {
    authDispatch({ type: REMOVE_USER });
    setCurTab(0);
    history.push("/?tab=0");
  };

  return (
    <div>
      <div className={classes.NavBar}>
        <div>
          <div className={classes.NavBarTitle}>
            Karnataka State Police Housing Corporation Limited
          </div>
          <div className={classes.NavBarSubTitle}>
            Innovatively building for better police community relations
          </div>
        </div>
        <div>
          {state.isAuthorized ? (
            <button className="btn-primary" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Menu
              menuButton={
                <MenuButton className={"btn-primary"}>Login</MenuButton>
              }
              transition
              direction="left"
              arrow
            >
              <MenuItem onClick={handleContrctorLogin}>
                Contractor Login
              </MenuItem>
              <MenuItem onClick={handleEmployeeLogin}>Employee Login</MenuItem>
            </Menu>
          )}
        </div>
      </div>
      <div className={classes.HomePageContainer}>
        <div className="react-tabs-background">
          <TabsComponent
            tabs={tabs}
            selectedIndex={curTab}
            onChangeTab={(t) => updateQueryParams("tab", t)}
          />
        </div>
      </div>
    </div>
  );
};

export default Public;
