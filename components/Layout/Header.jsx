import React from "react";
import Brand from "./Brand";
import styles from "./header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <Brand />
    </header>
  );
};

export default Header;
