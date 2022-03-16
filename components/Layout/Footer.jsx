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
    <div className={classNames(styles.footer, "pagePadding")}>
      <div className={styles.brand}>
        <Brand whiteColorName />
      </div>
      <div className={classNames(styles.linksbox, "margin2rem")}>
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

      <div className={styles.links}>
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
