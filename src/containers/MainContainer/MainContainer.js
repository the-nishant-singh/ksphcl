import classes from "./MainContainer.module.css";
import React, { useContext } from "react";
import { PROTECTED_ROUTES, PROTECTED_ROUTES_ADMIN } from "../../routes/Routes";
import { Route, Switch } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { get as lodashGet } from "lodash";
import CompanyLogo from "../../assets/arielLogo.png";
import { MenuItem, Menu } from "@szhsin/react-menu";
import profile from "../../assets/profile.jpg";

const MainContainer = ({ title, compoenent: Compoenent }) => {
  const { state } = useContext(AuthContext);
  const logo = lodashGet(state, "user.properties.logo");
  const userRole = lodashGet(state, "user.userRole");

  const processedFilterRoutes =
    userRole === "employee"
      ? PROTECTED_ROUTES_ADMIN
      : userRole === "contractor"
      ? PROTECTED_ROUTES
      : [];

  let processedRoutes = processedFilterRoutes
    .map((route) => {
      return route.childRoutes ? (
        route.childRoutes.map((childRoute) => (
          <Route
            path={`${route.url}${childRoute.url}`}
            component={childRoute.component}
          />
        ))
      ) : (
        <Route path={`${route.url}`} component={route.component} />
        
      );
    })
    .flat();

    console.log("dd", {processedRoutes})

  const getProfileDetails = () => {
    return (
      <div className={classes.ProfilePreview}>
        {logo ? (
          <div className={classes.CompanyLogoWrapper}>
            <img src={logo} alt="logo" className={classes.CompanyLogo} />
          </div>
        ) : (
          <div className={classes.CompanyLogoWrapper}>
            KSPHC
            {/* <img src={CompanyLogo} className={classes.CompanyLogo} /> */}
          </div>
        )}
        <div className={classes.ProfileImageWrapper}>
          <img
            src={state?.user?.profileImage || profile}
            alt="dp"
            className={classes.ProfileImage}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={classes.NavBar}>
        <div className={classes.NavBarStart}>
          <div className={classes.Title}>{title}</div>
        </div>
        <Menu
          menuButton={getProfileDetails()}
          align="end"
          arrow={true}
          menuClassName={classes.ProfileMenu}
        >
          <MenuItem className={classes.RoleName}>
            <div className={classes.UserName}>Hey, {state?.user?.name}</div>
            <div className={classes.UserRole}>
              User Role: {state?.user?.userRole}
            </div>
          </MenuItem>
        </Menu>
      </div>
      <div className={classes.DashBoard}>
        <Compoenent/>
      </div>
    </div>
  );
};

export default MainContainer;
