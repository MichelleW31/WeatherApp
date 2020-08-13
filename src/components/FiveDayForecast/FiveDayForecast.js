import React from "react";
import DailyForecast from "../DailyForecast/DailyForecast";
import styles from "./FiveDayForecast.module.scss";

const FiveDayForecast = ({ name, forecastList }) => {
  const getForecast = (forecast) => (
    <DailyForecast key={forecast[0].dt_txt} forecast={forecast} />
  );

  const splitArray = (array) => {
    let newForecastArray = [...array];

    newForecastArray.map((forecast) => {
      forecast.formattedDate = new Date(forecast.dt * 1000).toDateString();
    });

    let group = newForecastArray.reduce((total, currentValue) => {
      console.log("a", currentValue);
      console.log("r", total);
      total[currentValue.formattedDate] = [
        ...(total[currentValue.formattedDate] || []),
        currentValue,
      ];
      return total;
    }, []);
    console.log("group", group);

    // return newForecastArray;
  };

  return (
    <div className={styles.FiveDayForecastContainer}>
      <h2 className={styles.ForecastTitle}>
        5 Day 3 Hour Forecast for{" "}
        <span className={styles.CityName}>{name}</span>
      </h2>
      <div className={styles.FiveDayForecast}>
        {splitArray(forecastList)}
        {/* .map(getForecast)} */}
      </div>
    </div>
  );
};

export default FiveDayForecast;
