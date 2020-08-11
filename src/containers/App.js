import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "../components/Header/Header";
import CurrentTemperature from "../components/CurrentTemperature/CurrentTemperature";
import axios from "axios";

const App = () => {
  let [step, setStep] = useState(0);
  let [weatherData, setWeatherData] = useState(null);

  const setCurrentCity = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial
          `
      )
      .then((response) => {
        if (response.status > 400) {
          throw response;
        }

        setWeatherData(response.data);
        setStep(1);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setCurrentCity);
    }
  }, []);

  const stateManager = () => {
    switch (step) {
      case 0:
        return <p className="default-copy">Fetching your current weather...</p>;
      case 1:
        return <CurrentTemperature weatherData={weatherData} />;
      default:
        return <p className="default-copy">Fetching your current weather...</p>;
    }
  };

  return (
    <div className="App">
      <Header />
      {weatherData !== null && (
        <section className="sub-navigation">
          <ul>
            <li
              className={step === 1 ? "active" : null}
              onClick={() => {
                setStep(1);
              }}
            >
              Current Temperature
            </li>
            <li
              className={step === 2 ? "active" : null}
              onClick={() => {
                setStep(2);
              }}
            >
              5 Day Forecast
            </li>
          </ul>
        </section>
      )}

      {stateManager()}
    </div>
  );
};

export default App;
