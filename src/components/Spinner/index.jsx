import React from "react";
import classes from "./Spinner.module.scss";

const Spinner = ({ color }) => {
  return (
    <span
      className={classes.loader}
      style={{ borderColor: color, borderBottomColor: "transparent" }}
    ></span>
  );
};

export default Spinner;
