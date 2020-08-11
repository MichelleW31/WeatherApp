import React from "react";
import HourlyForecast from "../HourlyForecast/HourlyForecast";
import styles from "./DailyForecast.module.scss";

const DailyForecast = ({ forecast }) => {
  const getHourly = (hourly) => (
    <HourlyForecast key={hourly.dt_txt} hourly={hourly} />
  );

  return (
    <div className={styles.DailyForecastContainer}>
      {forecast.map(getHourly)}
    </div>
  );
};

export default DailyForecast;
