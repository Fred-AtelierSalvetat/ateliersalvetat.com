import React from "react";
import Image from "next/image";
import Link from "next/link";

import GithubCorner from "/public/icons/github-corner-right.svg";
import Live from "./Live";
import styles from "./portfoliocard.module.scss";

const PortFolioCard = ({
  src,
  title,
  desc,
  keywords,
  github = false,
  live = false,
  page,
}) => {
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
    <Link href={`/portfolio/${page}`}>
      <div className={styles.card}>
        <div className={styles.thumbnail}>
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
          {live && (
            <div className={styles.liveicon}>
              <Live />
            </div>
          )}
        </div>
        <div className={styles.content}>
          <div className={styles.keywordscontainer}>
            {keywords?.slice(0, 3).map((keyword) => (
              <p key={keyword} className={`${styles.keyword} nomargin`}>
                {keyword}
              </p>
            ))}
            {keywords?.length > 3 && <p className={`${styles.ellipsis} nomargin`}>...</p>}
          </div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.description}>{desc}</div>
        </div>
      </div>
    </Link>
  );
};

export default PortFolioCard;
