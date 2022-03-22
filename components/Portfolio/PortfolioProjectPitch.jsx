import GitHubIcon from "../../public/icons/github.svg";
import Live from "./Live";

import Image from "next/image";

import styles from "./portfolioprojectpitch.module.scss";

const PortfolioProjectPitch = ({ title, sections }) => {
  return (
    <div className="pagePadding">
      <div className="container">
        <h1 className="nomargin">{title}</h1>
      </div>
      {sections?.map(
        ({ picture, keywords, title, text, github__url, live_url }) => (
          <section key={title} className={styles.main}>
            <div className={styles.picture}>
              <Image
                priority
                alt={title}
                src={picture}
                sizes={["20rem", "(min-width: 48rem) 40rem"]}
              />
            </div>
            <div className={styles.pitch}>
              <h2>{title}</h2>
              <div className={`${styles.keywordscontainer} marginblock4rem`}>
                {keywords?.map((keyword) => (
                  <p key={keyword} className={`${styles.keyword} nomargin`}>
                    {keyword}
                  </p>
                ))}
              </div>
              <p style={{ whiteSpace: "pre-line" }}>{text}</p>
              <div className={styles.links}>
                {github__url && (
                  <a
                    className={styles.githubLink}
                    target="_self"
                    href={github__url}
                  >
                    <GitHubIcon />
                  </a>
                )}
                {github__url && (
                  <a
                    className={styles.githubLink}
                    target="_self"
                    href={github__url}
                  >
                    <p className={styles.txtLink}>{github__url}</p>
                  </a>
                )}
                {live_url && (
                  <a target="_self" href={live_url}>
                    <Live />
                  </a>
                )}
                {live_url && (
                  <a target="_self" href={live_url}>
                    <p className={styles.txtLink}>{live_url}</p>
                  </a>
                )}
              </div>
            </div>
          </section>
        )
      )}
    </div>
  );
};

export default PortfolioProjectPitch;
