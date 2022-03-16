import GitHubIcon from "../../public/icons/github.svg";

import Image from "next/image";

import styles from "./portfolioprojectpitch.module.scss";

const PortfolioProjectPitch = ({
  title,
  introduction__picture,
  introduciton__keywords,
  introducion__title,
  introduction__text,
  github__url,
}) => {
  return (
    <div className="pagePadding">
      <div className="container">
        <h1>{title}</h1>
      </div>
      <main className={styles.main}>
        <Image
          priority
          alt={title}
          src={introduction__picture}
          sizes={["20rem", "(min-width: 48rem) 40rem"]}
        />
        <div className={styles.pitch}>
          <h2>{introducion__title}</h2>
          {/* <p>{introduction__text}</p> */}
          <p style={{ whiteSpace: "pre-line" }}>
            {
              "Une fois n'est pas coutume, la team backend m'a demandé de spécifier ce que j'attendai du backend.\n\nCe projet est la réponse : un backend tout simple qui produit une spécification au format openAPI et a vocation a être utilisé comme un stub."
            }
          </p>
          <a target="_self" href={github__url}>
            <GitHubIcon />
          </a>
        </div>
      </main>
    </div>
  );
};

export default PortfolioProjectPitch;
