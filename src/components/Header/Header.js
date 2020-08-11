import React from "react";
import styles from "./Header.module.scss";

const Header = ({ weatherData }) => {
  return (
    <header className={styles.HeaderContainer}>
      <h1 className={styles.HeaderCopy}>Weather Forecast</h1>

      {weatherData && (
        <p className={styles.CityCopy}>
          Showing weather for{" "}
          <span className={styles.CityName}>{weatherData.name}</span>
        </p>
      )}
    </header>
  );
};

export default Header;
