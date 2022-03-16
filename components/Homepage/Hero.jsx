import React from "react";
import Image from "next/image";
import CodingSvg from "../../public/icons/coding.svg";
import meMyself from "/public/pictures/winter-dev.jpg";
import styles from "./hero.module.scss";
import classNames from "classnames";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={classNames(styles.intro, "pagePadding")}>
        <h1>
          <span>{"Développeur "}</span>
          <span style={{ whiteSpace: "nowrap" }}>Front-End</span>
        </h1>
        <div className={`${styles.intro__text} margin1rem`}>
          <p className="nomargin">
            {"Des solutions simples, efficaces, maintenables et évolutives. "}
          </p>
          <p className="nomargin">Dans le respect des règles de l'art.</p>
        </div>

        <div className={styles.pictureContainer}>
          <CodingSvg className={styles.coding} />
        </div>
      </div>
      <div className={classNames(styles.pitch, "pagePadding")}>
        <div className={classNames(styles.pitch__container)}>
          <div className={styles.accroche}>
            <h2>{"Qui suis-je?"}</h2>
            <p>{"Je m'appelle Frédéric. Je suis ingénieur et développeur."}</p>
            <p>
              {
                "J'ai exercé durant plus de vings ans au sein de grands groupes industriels et bancaires. Je vous propose à présent mes compétences en tant que freelance."
              }
            </p>
            <p>
              {"J’adhère aux principes du "}
              <a href="http://manifesto.softwarecraftsmanship.org/#/fr-fr">
                {"Manifeste du Software Craftsmanship"}
              </a>
              .<br />
              J'aime le travail bien fait.
            </p>
          </div>
          <figure>
            <div className={styles.portrait}>
              <Image
                alt="Frédéric Salvetat"
                src={meMyself}
                placeholder="blur"
                layout="responsive"
                sizes={["22rem", "(min-width: 48rem) 36rem"]}
              />
            </div>
            <figcaption>
              {"Les petits plaisirs du développement en hiver"}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Hero;
