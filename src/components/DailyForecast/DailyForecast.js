import React from "react";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import styles from "./DailyForecast.module.scss";

const DailyForecast = ({ forecast }) => {
  return (
    <div className={styles.DailyForecastContainer}>
      <div>DailyForecast</div>
    </div>
  );
};

export default DailyForecast;
