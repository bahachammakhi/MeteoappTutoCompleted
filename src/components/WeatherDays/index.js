import React from "react";
import classes from "./index.module.css";

const WeatherDays = ({ data }) => {
  const { dt_txt } = data;
  const { temp_min, temp_max } = data?.main;
  return (
    <div className={classes.wrapper}>
      <div className={classes.element}>{dt_txt.split(" ")[0]}</div>
      <div className={classes.element}>{temp_min}</div>
      <div className={classes.element}>{temp_max}</div>
      <img
        src={`http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
        alt="icon"
      />
    </div>
  );
};

export default WeatherDays;
