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
            {keywords?.length > 3 && (
              <p className={`${styles.ellipsis} nomargin`}>...</p>
            )}
          </div>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.description}>{desc}</div>
        </div>
      </div>
    </Link>
  );
};

export default PortFolioCard;
