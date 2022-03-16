import React from "react";
import Brand from "./Brand";
import styles from "./header.module.scss";
import classNames from "classnames";

const Header = () => {
  return (
    <header className={classNames(styles.header, "pagePadding")}>
      <Brand />
    </header>
  );
};

export default Header;
