import React from "react";
//import Frontend from "../inline_assets/icons/frontend.svg";

import Image from "next/image";

import styles from "./licences.module.scss";
import classNames from "classnames";

const Licences = () => {
  return (
    <div className="margin1rem">
      <main className={styles.licences}>
        <h1>Citation des assets sous licences libres utilisées</h1>
        <ul>
          <li>
            <Image
              src="/icons/discussion.svg"
              alt="Discussion icon"
              width={32}
              height={32}
            />
            {" créé par "}
            <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>
            {", licence "}
            <a href="https://creativecommons.org/licenses/by/3.0/fr/">
              Creative Commons 3.0
            </a>
          </li>
          <li>
            <Image
              src="/icons/additionalSkills.svg"
              alt="Additionnals skills icon"
              width={32}
              height={32}
            />
            {" créé par "}
            <a href="https://thenounproject.com/vectorspoint/">Vectors Point</a>
            {" sur "}
            <a href="https://thenounproject.com/">the Noun Project</a>
          </li>

          <li>
            <Image
              src="/icons/linkedin.svg"
              alt="LinkedIn icon"
              width={32}
              height={32}
            />
            {" & "}
            <Image
              src="/icons/email.svg"
              alt="Email icon"
              width={32}
              height={32}
            />
            {" conçues par "}
            <a href="https://www.freepik.com" title="Freepik">
              Freepik
            </a>
            {" de "}
            <a href="https://www.flaticon.com/fr/" title="Flaticon">
              www.flaticon.com
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Licences;
