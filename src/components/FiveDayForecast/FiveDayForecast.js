import React from "react";
import DailyForecast from "../DailyForecast/DailyForecast";
import styles from "./FiveDayForecast.module.scss";

const FiveDayForecast = ({ name, forecastList }) => {
  const getForecast = (forecast) => (
    <DailyForecast key={forecast[0].dt_txt} forecast={forecast} />
  );

  const splitArray = (array) => {
    let newForecastArray = [];
    let arrayCopy = [...array];
    while (arrayCopy.length > 0) {
      //not sure about this logic yet. May need to compare dates
      newForecastArray.push(arrayCopy.splice(0, 8));
    }

    return newForecastArray;
  };

  return (
    <div className={styles.FiveDayForecastContainer}>
      <h2 className={styles.ForecastTitle}>
        5 Day 3 Hour Forecast for{" "}
        <span className={styles.CityName}>{name}</span>
      </h2>
      <div className={styles.FiveDayForecast}>
        {splitArray(forecastList).map(getForecast)}
      </div>
    </div>
  );
};

export default FiveDayForecast;
