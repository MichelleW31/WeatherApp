import React from "react";
import DailyForecast from "../DailyForecast/DailyForecast";
import styles from "./FiveDayForecast.module.scss";

const FiveDayForecast = ({ name, forecastList }) => {
  const getDailyForecasts = (forecast) => (
    <DailyForecast key={forecast.dt} forecast={forecast} />
  );

  // const chunkArray = (array) => {
  //   let chunkedArray = array.reduce((total, currentValue) => {
  //     if (!total[currentValue.formattedDate]) {
  //       total[currentValue.formattedDate] = [];
  //     }

  //     total[currentValue.formattedDate].push(currentValue);

  //     return total;
  //   }, {});

  //   return chunkedArray;
  // };

  // const splitArrayByDate = (array) => {
  //   let foreCastArray = [...array];
  //   const dailyForecastsArray = [];

  //   //Get universal time for each forecast.
  //   foreCastArray.map((forecast) => {
  //     const universalDate = new Date(forecast.dt * 1000).toUTCString();
  //     //Slice it to only receive month, day, and year then add formattedDate to each forecast in order to compare dates to chunk array
  //     forecast.formattedDate = universalDate.slice(0, -13);
  //     forecast.newDate = new Date(forecast.dt * 1000);
  //     console.log(forecast);
  //   });

  //   const forecastsByDate = chunkArray(foreCastArray);

  //   Object.values(forecastsByDate).forEach((dailyForecast) => {
  //     dailyForecastsArray.push(dailyForecast);
  //   });

  //   return dailyForecastsArray;
  // };

  return (
    <div className={styles.FiveDayForecastContainer}>
      <h2 className={styles.ForecastTitle}>
        16 Day Forecast for{" "}
        {/* <span className={styles.CityName}>{name}</span> */}
      </h2>
      <div className={styles.FiveDayForecast}>
        {forecastList.map(getDailyForecasts)}
      </div>
    </div>
  );
};

export default FiveDayForecast;
