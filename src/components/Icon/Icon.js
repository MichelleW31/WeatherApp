import React, { useState, useEffect } from "react";
import styles from "./Icon.module.scss";
import axios from "axios";

const Icon = ({ weather }) => {
  let [iconURL, setURL] = useState();
  const { description } = weather[0];

  useEffect(() => {
    if (weather) {
      axios
        .get(
          ` https://openweathermap.org/img/wn/${weather[0].icon}@2x.png
          `
        )
        .then((response) => {
          setURL(response.config.url);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return (
    <div className={styles.IconContainer}>
      <img className={styles.Image} src={iconURL} alt={`${description} icon`} />
    </div>
  );
};

export default Icon;
