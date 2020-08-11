import React from "react";
import styles from "./Temperature.module.scss";

const Temperature = ({ weatherData }) => {
  const { name, main, weather } = weatherData;

  return (
    <section className={styles.TemperatureContainer}>
      <h2 className={styles.WeatherLocationCopy}>Weather in {name}</h2>
      <div className={styles.CopyAndImage}>
        <div className={styles.TemperatureCopy}>
          <h3 className={styles.MainTemperature}>
            {Math.round(main.temp)}
            {"\u00b0"}
          </h3>
          <p className={styles.FeelsLikeTemperature}>
            Feels like{" "}
            <span>
              {Math.round(main.feels_like)}
              {"\u00b0"}
            </span>
          </p>
          <h3 className={styles.TemperatureDescription}>
            {weather[0].description}
          </h3>
        </div>
      </div>
    </section>
  );
};

export default Temperature;
