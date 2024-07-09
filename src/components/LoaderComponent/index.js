import React, { useContext } from "react";
import { LoaderContext } from "../../context/LoaderContext";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import classes from "./LoaderComponent.module.css";
import { Puff } from "react-loader-spinner";

const LoaderComponent = () => {
  const { state } = useContext(LoaderContext);
  const targetElement = document.getElementById("root");
  if (state.loading.length) {
    disableBodyScroll(targetElement);
  } else enableBodyScroll(targetElement);
  return state.loading.length ? (
    <div className={classes.LoaderParent}>
      <Puff type="Puff" color="var(--color-primary)" height={100} width={100} />
    </div>
  ) : null;
};

export default LoaderComponent;
