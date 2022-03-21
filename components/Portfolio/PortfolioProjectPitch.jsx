import GitHubIcon from "../../public/icons/github.svg";

import Image from "next/image";

import styles from "./portfolioprojectpitch.module.scss";

const PortfolioProjectPitch = ({
  title,
  introduction__picture,
  introduction__keywords,
  introducion__title,
  introduction__text,
  github__url,
}) => {
  return (
    <div className="pagePadding">
      <div className="container">
        <h1 className="nomargin">{title}</h1>
      </div>
      <main className={styles.main}>
        <div className={styles.picture}>
          <Image
            priority
            alt={title}
            src={introduction__picture}
            sizes={["20rem", "(min-width: 48rem) 40rem"]}
          />
        </div>
        <div className={styles.pitch}>
          <h2>{introducion__title}</h2>
          <div className={`${styles.keywordscontainer} marginblock4rem`}>
            {introduction__keywords?.map((keyword) => (
              <p key={keyword} className={`${styles.keyword} nomargin`}>
                {keyword}
              </p>
            ))}
          </div>
          <p style={{ whiteSpace: "pre-line" }}>
            {introduction__text}
            {/* {
              "Une fois n'est pas coutume, la team backend m'a demandé de spécifier ce que j'attendai du backend.\n\nCe projet est la réponse : un backend tout simple qui produit une spécification au format openAPI et a vocation a être utilisé comme un stub."
            } */}
          </p>
          <a target="_self" href={github__url}>
            <GitHubIcon />
            <p>{github__url}</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default PortfolioProjectPitch;
