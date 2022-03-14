import React from "react";
import { linkedIn, github, email } from "../params";
import LinkedInIcon from "../../public/icons/linkedin.svg";
import GitHubIcon from "../../public/icons/github.svg";
import EmailIcon from "../../public/icons/email.svg";
import Brand from "./Brand";
import Link from "next/link";

import classNames from "classnames";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.topInnerBox}>
        <Brand whiteColorName />
        <div className={classNames(styles.linksbox, "progressive-margin-2rem")}>
          <a target="_self" href={linkedIn}>
            <LinkedInIcon />
          </a>
          <a target="_self" href={github}>
            <GitHubIcon />
          </a>
          <a href={`mailto:${email}`}>
            <EmailIcon />
          </a>
        </div>
      </div>
      <div className={styles.bottomInnerBox}>
        <Link href="/licences">
          <a>Licences libres utilisées</a>
        </Link>
        <Link href="/mentions-legales">
          <a>Mentions légales</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
