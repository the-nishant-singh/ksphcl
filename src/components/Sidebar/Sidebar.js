import classes from "./Sidebar.module.css";
import React, { useContext, useState, useRef, useEffect } from "react";
import { PROTECTED_ROUTES, PROTECTED_ROUTES_ADMIN } from "../../routes/Routes";
import { AuthContext } from "../../context/AuthContext";
import { get as lodashGet } from "lodash";
import CompanyLogo from "../../assets/arielLogo.png";
import { UilAngleRight } from "@iconscout/react-unicons";
import { ControlledMenu, MenuItem, useClick } from "@szhsin/react-menu";
import { useHistory } from "react-router-dom";
import { REMOVE_USER } from "../../constants";
import { useLoader } from "../../hooks";
import { toast } from "react-toastify";
import LogoutIcon from "../../assets/sidebar/logout.svg";

const Sidebar = ({ active, setActive }) => {
  const { state, dispatch: authDispatch } = useContext(AuthContext);
  const [startLoader, stopLoader] = useLoader();
  const userRole = lodashGet(state, "user.userRole");
  const logo = lodashGet(state, "user.properties.logo");
  const [mouseHover, setMouseHover] = useState(false);
  const [timer, setTimer] = useState(null);
  const history = useHistory();
  const processedFilterRoutes =
    userRole === "employee"
      ? PROTECTED_ROUTES_ADMIN
      : userRole === "contractor"
      ? PROTECTED_ROUTES
      : [];

  const handleMouseOver = () => {
    if (!mouseHover && !timer) {
      setTimer(
        setTimeout(() => {
          setMouseHover(true);
        }, 500)
      );
    }
  };

  const handleMouseOut = () => {
    if (timer) clearTimeout(timer);
    setTimer(null);
    setMouseHover(false);
  };
  const handleClick = (route) => {
    setActive(route.name);
    history.push(route.url);
  };
  const stopPropagation = (e) => e.stopPropagation();

  const handleLogout = () => {
    toast.success("Logout Success!");
    authDispatch({ type: REMOVE_USER });
    history.push("/");
  };

  const BottomRoutes = [
    {
      name: "Logout",
      id: "logout",
      handleClick: handleLogout,
      icon: LogoutIcon,
    },
  ];
  const renderLogo = () => {
    return (
      <div className={classes.ImageWarpper}>
        {logo ? (
          <>
            <img src={logo} className={classes.LogoImage} />
            <p className={classes.PoweredBy}>
              Powered by <strong>Truegreen</strong>
            </p>
          </>
        ) : (
          <>
            {/* <img src={CompanyLogo} className={classes.LogoImage} /> */}
          </>
        )}
      </div>
    );
  };

  return (
    <div className={classes.Sidebar}>
      <div
        className={classes.Container}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseOut}
      >
        <div className={classes.Content}>
          <div onMouseMove={stopPropagation} className={classes.LogoContainer}>
            {mouseHover ? (
              <> {renderLogo()}</>
            ) : (
              <div className={classes.Title}>KS</div>
            )}
          </div>
          <div
            className={
              mouseHover
                ? classes.RoutesContainerHovered
                : classes.RoutesContainer
            }
          >
            <div className={classes.AllRoutes}>
              {processedFilterRoutes.map((route, key) => (
                <>

                  {route.childRoutes ? (
                    <ControlledMenuForRoutes
                      route={route}
                      active={active}
                      mouseHover={mouseHover}
                      key={key}
                      setActive={setActive}
                    />
                  ) : (
                    <RenderableButton
                      route={route}
                      active={active}
                      mouseHover={mouseHover}
                      handleClick={handleClick}
                      key={key}
                    />
                  )}
                </>
              ))}
            </div>
            <div className={classes.AllRoutes}>
              {BottomRoutes.map((route, key) => (
                <RenderableButton
                  route={route}
                  active={active}
                  mouseHover={mouseHover}
                  handleClick={route.handleClick}
                  key={key}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

const RenderableButton = ({
  route,
  active,
  mouseHover,
  handleClick,
  key,
  reference,
  ...props
}) => {
  const ref = useRef();
  return (
    <div
      key={key}
      onClick={() => handleClick && handleClick(route)}
      ref={mouseHover ? reference : ref}
      {...props}
      className={classes.RouteParent}
    >
      <div
        className={
          mouseHover
            ? active?.includes(route.name)
              ? classes.RouteWrapperActive
              : classes.RouteWrapperHovered
            : classes.RouteWrapper
        }
      >
        {mouseHover && <div></div>}
        <div className={classes.RouteImageWrapper}>
          <img
            src={route.icon}
            alt={route.name}
            className={classes.RouteIcon}
          />
        </div>
        {mouseHover && <div>{route.name}</div>}
      </div>
      {route.childRoutes && mouseHover && (
        <UilAngleRight className={classes.ArrowIcon} />
      )}
    </div>
  );
};
const ControlledMenuForRoutes = ({
  route,
  active,
  mouseHover,
  key,
  setActive,
}) => {
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);
  const anchorProps = useClick(isOpen, setOpen);
  const history = useHistory();
  const { state } = useContext(AuthContext);

  useEffect(() => {
    if (!mouseHover) setOpen(false);
  }, [mouseHover]);

  const handleClick = (subRoute) => {
    setActive(`${route.name} > ${subRoute.name}`);
    history.push(route.url + subRoute.url);
  };

  return (
    <>
      <RenderableButton
        key={key}
        route={route}
        active={active}
        mouseHover={mouseHover}
        reference={ref}
        {...anchorProps}
      />
      <ControlledMenu
        state={isOpen ? "open" : "closed"}
        anchorRef={ref}
        onClose={() => setOpen(false)}
        direction="right"
        arrow="true"
        position="auto"
        offsetX={15}
        menuClassName={classes.MenuWrapper}
        arrowClassName={classes.MenuWrapperArrow}
      >
        {route.childRoutes.map((subRoute, key) => {
          return (
            <MenuItem
              onClick={() => handleClick(subRoute)}
              className={classes.MenuItemClassName}
              key={key}
            >
              <img src={subRoute.icon} className={classes.ChildRouteIcon} />
              <div>{subRoute.name}</div>
            </MenuItem>
          );
        })}
      </ControlledMenu>
    </>
  );
};
