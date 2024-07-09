import classes from "./Typography.module.css";
import React from "react";

const Typography = ({ size = 16, content, subtext = false }) => {
  const sizeClass = "t" + size;
  return !subtext ? (
    <div
      role="button"
      className={classes.Typography + " " + classes[sizeClass]}
    >
      {content}
    </div>
  ) : (
    <div role="button" className={classes.Subtext}>
      {content}
    </div>
  );
};

export default Typography;
