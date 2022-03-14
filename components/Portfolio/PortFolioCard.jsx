import React from "react";
import Image from "next/image";

import GithubCorner from "/public/icons/github-corner-right.svg";

import styles from "./portfoliocard.module.scss";

const PortFolioCard = ({ src, title, desc, keywords, github = false }) => {
  //{ alt, src, title, tags, githublink }
  // const title = "La chaîne du droit";
  // const desc =
  //   "Développement d'UI responsive streaming d'atelier sur la thématique du droit.";

  // //  - Harmonisation des styles des composants : bootstrapisation date & multiselect
  // //  Implémentation à partir de maquettes Figma"

  // const keywords = [
  //   "React",
  //   "Redux",
  //   "Redux toolkit",
  //   "Javascript",
  //   "Typescript",
  //   "SASS",
  //   "API REST",
  //   "Bootstrap",
  //   "react-hook-form",
  //   "react-select",
  //   "drag & drop UI",
  //   "Django",
  //   "Python",
  // ];

  return (
    <div className={styles.card}>
      <div onClick={() => console.log("Click")} className={styles.thumbnail}>
        <Image
          priority
          alt={title}
          src={src}
          sizes={["20rem", "(min-width: 48rem) 40rem"]}
        />
        {github && (
          <div className={styles.githubcornericon}>
            <GithubCorner />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.keywordscontainer}>
          {keywords?.slice(0, 3).map((keyword) => (
            <p key={keyword} className={styles.keyword}>
              {keyword}
            </p>
          ))}
          {keywords?.length > 3 && <p className={styles.ellipsis}>...</p>}
        </div>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.description}>{desc}</div>
      </div>
    </div>
  );
};

export default PortFolioCard;
