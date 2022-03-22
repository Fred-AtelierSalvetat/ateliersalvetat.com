import React from "react";
import Frontend from "../../public/icons/frontend.svg";
import AdditionalSkills from "../../public/icons/additionalSkills.svg";
import Image from "next/image";
import styles from "./skills.module.scss";
import psmBadge from "/public/pictures/psm.png";

const Skills = () => {
  return (
    <section className={`${styles.skills} pagePadding`}>
      <div className={styles.skillframe}>
        <div className={`${styles.skillbox} padding5rem`}>
          <div>
            <Frontend />
            <h2>
              <div>{"Développement"}</div>
              <div style={{ whiteSpace: "nowrap" }}> Front-end</div>
            </h2>
          </div>
          <div>
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
          </div>
          <div>
            <h3>UI Frameworks</h3>
            <ul>
              <li>Bootstrap</li>
              <li>Material UI</li>
            </ul>
          </div>
          <div>
            <h3>Tests</h3>
            <ul>
              <li>Jest</li>
              <li> Enzime</li>
              <li>Chai</li>
              <li>Sinon</li>
              <li>React Testing Library</li>
            </ul>
          </div>
          <div>
            <h3>Outils</h3>
            <ul>
              <li>Git, Github, Gitlab</li>
              <li>AWS Amplify</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.skillbox} padding2rem`}>
          <div>
            <AdditionalSkills />
            <h2>Side skills</h2>
          </div>
          <h3>Anglais courant</h3>
          <div>
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
          </div>
          <div>
            <h3>Agile</h3>
            <ul>
              <li className={styles.flexCenteredLine}>
                Scrum master certifié et aguérri
                <a href="https://www.credly.com/badges/74fb382a-76c8-4867-a350-20b5050658db/public_url">
                  <Image
                    src={psmBadge}
                    alt="PSM 1 certification"
                    layout="responsive"
                  />
                </a>
              </li>
              <li>Product owner expérimenté</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

// <a href="http://www.onlinewebfonts.com">oNline Web Fonts</a>;
