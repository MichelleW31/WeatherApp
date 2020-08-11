import React from "react";
import styles from "./CurrentTemperature.module.scss";
import Temperature from "../Temperature/Temperature";

const CurrentTemperature = ({ weatherData }) => {
  return (
    <div className={styles.CurrentTemperatureContainer}>
      <Temperature weatherData={weatherData} />
    </div>
  );
};

export default CurrentTemperature;
