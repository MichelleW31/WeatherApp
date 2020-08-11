import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.HeaderContainer}>
      <h1 className={styles.HeaderCopy}>Weather Forecast</h1>
    </header>
  );
};

export default Header;
