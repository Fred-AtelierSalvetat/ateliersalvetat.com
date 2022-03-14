import React from "react";
import Brand from "./Brand";
import styles from "./header.module.scss";
import classNames from "classnames";

const Header = () => {
  return (
    <header className={classNames(styles.header, "margin1rem")}>
      <Brand />
    </header>
  );
};

export default Header;
