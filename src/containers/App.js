import React, { useState, useEffect } from "react";
import "./App.scss";
import Header from "../components/Header/Header";
import axios from "axios";

const App = () => {
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
        console.log(response.data);
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

  return (
    <div className="App">
      <Header />
    </div>
  );
};

export default App;
