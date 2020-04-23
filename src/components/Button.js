import React from "react";
import classes from "./button.module.css";

const Button = ({ children, ...props }) => {
  return <button className={classes.button}>{children}</button>;
};

export default Button;
