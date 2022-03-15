import React from "react";
import Image from "next/image";
import CodingSvg from "../../public/icons/coding.svg";
import meMyself from "/public/pictures/winter-dev.jpg";
import styles from "./hero.module.scss";
import classNames from "classnames";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={classNames(styles.intro, "margin1rem")}>
        <h1>
          <span>{"Développeur "}</span>
          <span style={{ whiteSpace: "nowrap" }}>Front-End</span>
        </h1>
        <p>
          {
            "Je développe des solutions simples et efficaces pour mes clients et j'adore ce que je fais."
          }
        </p>
        <figure>
          <div className={styles.portrait}>
            <Image
              alt="Frédéric Salvetat"
              src={meMyself}
              priority
              placeholder="blur"
              layout="responsive"
              sizes={["22rem", "(min-width: 48rem) 36rem"]}
            />
          </div>
          <figcaption>
            {"Les petits plaisirs du développement en hiver"}
          </figcaption>
        </figure>

        <div className={styles.pictureContainer}>
          <CodingSvg className={styles.coding} />
        </div>
      </div>
      <div className={classNames(styles.pitch, "padding1rem")}>
        <div className="container padding2rem">
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
      </div>
    </section>
  );
};

export default Hero;
