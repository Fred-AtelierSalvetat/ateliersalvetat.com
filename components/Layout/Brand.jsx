import React from "react";
import classNames from "classnames";
import style from "./brand.module.scss";
import Link from "next/link";

const Brand = ({ whiteColorName = false }) => {
  return (
    <Link href="/">
      <div className="margin2rem">
        <a className={style.brand}>
          <p
            className={classNames(
              style.name,
              {
                [style.whiteColorName]: whiteColorName,
              },
              "brand-name"
            )}
          >
            Atelier Salvetat
          </p>
          <p className={classNames(style.sub, "brand-sub")}>
            Développement logiciel
          </p>
        </a>
      </div>
    </Link>
  );
};

export default Brand;
