import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "../components/Header/Header";
import CurrentTemperature from "../components/CurrentTemperature/CurrentTemperature";
import FiveDayForecast from "../components/FiveDayForecast/FiveDayForecast";
import axios from "axios";

const App = () => {
  let [error, setError] = useState("");
  let [step, setStep] = useState(0);
  let [weatherData, setWeatherData] = useState(null);
  let [forecastList, setForecastList] = useState([]);
  let [showInput, setshowInput] = useState(false);

  const isError = (city, errorCode) => {
    if (city === "") {
      setError("Please enter a city.");
      return true;
    } else if (errorCode === 404) {
      //need to fix this error handling. Not receiving the error codes yet
      setError("City not found. Please enter valid city.");
      return true;
    } else {
      setError("");
      return false;
    }
  };

  const setCurrentCity = (position, city) => {
    let latitude;
    let longitude;
    let url;

    if (position === null) {
      if (!isError(city)) {
        url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial
        `;
      } else return;
    } else {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial
    `;
    }

    axios
      .get(url)
      .then((response) => {
        if (response.status > 400) {
          throw response;
        }

        setWeatherData(response.data);
        setStep(1);
        getFiveDayForecast(response.data);
      })
      .catch((error) => {
        isError(error.response.status);
      });
  };

  const getFiveDayForecast = (data) => {
    const { id } = data;

    axios
      .get(
        ` https://api.openweathermap.org/data/2.5/forecast?id=${id}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial
          `
      )
      .then((response) => {
        if (response.status > 400) {
          throw response;
        }
        console.log(response.data);
        setForecastList(response.data.list);
      })
      .catch((error) => {
        isError(error.response.status);
      });
  };

  useEffect(() => {
    //gets location of user
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setCurrentCity, function (
        error
      ) {
        if (error.code == error.PERMISSION_DENIED) setshowInput(true);
      });
    }
  }, []);

  const stateManager = () => {
    switch (step) {
      case 0:
        return <p className="default-copy">Fetching your current weather...</p>;
      case 1:
        return <CurrentTemperature weatherData={weatherData} />;
      case 2:
        return (
          <FiveDayForecast
            name={weatherData.name}
            forecastList={forecastList}
          />
        );
      default:
        return <p className="default-copy">Fetching your current weather...</p>;
    }
  };

  return (
    <div className="App">
      <Header
        weatherData={weatherData}
        showInput={showInput}
        setCurrentCity={setCurrentCity}
        error={error}
      />
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
      {error !== "" && <p className="error">{error}</p>}
    </div>
  );
};

export default App;
