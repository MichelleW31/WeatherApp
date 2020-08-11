import React, { useState } from "react";
import styles from "./Header.module.scss";

const Header = ({ weatherData, showInput, setCurrentCity, error }) => {
  let [city, setCity] = useState("");

  const getWeather = () => {
    setCurrentCity(null, city);
  };

  return (
    <header className={styles.HeaderContainer}>
      <h1 className={styles.HeaderCopy}>Weather Forecast</h1>

      {showInput && (
        <div className={styles.CityInputContainer}>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter your city"
            className={styles.CityInput}
          />

          <button onClick={getWeather} className={styles.SubmitButton}>
            Get Weather
          </button>
        </div>
      )}

      {error !== "" && <p className={styles.Error}>{error}</p>}

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
