import React from "react";
import Frontend from "../../public/icons/frontend.svg";
import AdditionalSkills from "../../public/icons/additionalSkills.svg";
import Image from "next/image";
import styles from "./skills.module.scss";
import psmBadge from "/public/pictures/psm.png";

const Skills = () => {
  return (
    <section className={styles.skills}>
      <div className={styles.skillframe}>
        <div className={styles.skillbox}>
          <Frontend />
          <h2>Développement Front-End</h2>
          <p className={styles.box__text}>
            {"J'aime coder et donner vie aux idées."}
          </p>
          <h3>Ma stack</h3>
          <ul>
            <li>HTML</li>
            <li>CSS, CSS modules, Sass, BEM </li>
            <li>VanillaJS</li>
            <li>React.js, JSX</li>
            <li>Next.js</li>
            <li>Redux</li>
            <li>RTK Query</li>
            <li> Typescript</li>
          </ul>
          <h3>UI Frameworks</h3>
          <ul>
            <li>Bootstrap</li>
            <li>Material UI</li>
          </ul>
          <h3>Tests</h3>
          <ul>
            <li>Jest</li>
            <li> Enzime</li>
            <li>Chai</li>
            <li>Sinon</li>
            <li>React Testing Library</li>
          </ul>
          <h3>Outils</h3>
          <ul>
            <li>Git, Github, Gitlab</li>
            <li>AWS Amplify</li>
          </ul>
        </div>

        <div className={styles.skillbox}>
          <AdditionalSkills />
          <h2>Side skills</h2>
          <p className={styles.box__text}>
            {
              "J'ai une experience variée avec différents rôles exercés dans équipes internationales."
            }
          </p>
          <h3>Anglais courant</h3>
          <h3>Back-End</h3>
          <ul>
            <li>{"Design d'API REST"}</li>
            <li>Python</li>
            <li>Django</li>
            <li>Django Rest Framework</li>
            <li>JWT authentifcation</li>
            <li>AWS Elastic Beanstalk</li>
          </ul>
          <ul>
            <li>C, C++</li>
          </ul>
          <h3>Agile</h3>
          <ul>
            <li className={styles.flexCenteredLine}>
              Scrum master certifié et aguérri
              <a href="https://www.credly.com/badges/74fb382a-76c8-4867-a350-20b5050658db/public_url">
                <Image
                  src={psmBadge}
                  alt="PSM 1 certification"
                  width={32}
                  height={32}
                />
              </a>
            </li>
            <li>Product owner expérimenté</li>
            <li>Conduite de projet</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;

// <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>;
