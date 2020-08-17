import React from "react";
import Icon from "../Icon/Icon";
import styles from "./HourlyForecast.module.scss";

const HourlyForecast = ({ hourly }) => {
  const { dt, main, weather } = hourly;

  const convertDateandTime = (date, conversion) => {
    const universalDate = new Date(date * 1000).toUTCString();
    const newDate = new Date(date * 1000);
    if (conversion === "date") return universalDate.slice(0, -13);
    if (conversion === "time") return newDate.toLocaleTimeString();
  };

  return (
    <div className={styles.HourlyForecastContainer}>
      <h2 className={styles.Date}>{convertDateandTime(dt, "date")}</h2>
      <p className={styles.Time}>{convertDateandTime(dt, "time")}</p>
      <h3 className={styles.MainTemperature}>
        {Math.round(main.temp)}
        {"\u00b0"}
      </h3>
      <Icon weather={weather} />
    </div>
  );
};

export default HourlyForecast;
