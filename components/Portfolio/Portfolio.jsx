import React, { useEffect } from "react";

import styles from "./portfolio.module.scss";
import PortFolioCard from "./PortFolioCard";

import Swiper, { Navigation, Pagination, EffectCoverflow } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import lcddHome from "/public/pictures/lcdd/homepage.png";
import openAPI from "/public/pictures/lcdd/openAPI.png";
import nextLogo from "/public/pictures/Next/Nextjs-logo.png";

import classNames from "classnames";

const cards = [
  {
    src: lcddHome,
    github: false,
    title: "La chaîne du droit",
    keywords: ["React", "Typescript", "API REST", "reac-hook-form", "SASS"],
    desc: (
      <ul>
        <li>Intégration de maquettes Figma</li>
        <li>Création de formulaires complexes</li>
        <li>Implémentation de Redux</li>
        <li>Connections API REST</li>
        <li>Tests unitaires/integ</li>
      </ul>
    ),
    page: "/lcdd",
  },
  {
    github: true,
    src: openAPI,
    title: "Une spec et un stub, Django + DRF magique!",
    keywords: ["Django", "Python", "API REST", "Swagger"],
    desc: (
      <>
        <p>
          Une fois n'est pas coutume, la team backend m'a demandé de spécifier
          ce que j'attendai du backend.
        </p>
        <p>
          Ce projet est la réponse : un backend tout simple qui produit une spec
          au format openAPI et a vocation a être utilisé comme un stub.
        </p>
      </>
    ),
    page: "/lcdd",
  },
  {
    github: true,
    src: nextLogo,
    title: "React c'est bien tellement mieux avec Next.js",
    keywords: ["SSR", "Next.js", "React", "API REST"],
    desc: (
      <p>
        Un framework full-stack simple et efficace, je recommande sans réserver.
      </p>
    ),
    page: "/lcdd",
  },
];

const Portfolio = () => {
  useEffect(() => {
    new Swiper(".swiper", {
      direction: "horizontal",
      loop: true,
      centeredSlides: true,
      slidesPerView: 1,
      spaceBetween: 30,
      // Responsive breakpoints
      breakpoints: {
        // when window width is >= 640px
        640: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        2048: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
      },
      effect: "coverflow",
      coverflowEffect: {
        rotate: 45,
        slideShadows: false,
      },
      modules: [Navigation, Pagination, EffectCoverflow],
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
    });
  }, []);

  return (
    <section className={classNames(styles.portfolio, "padding1rem")}>
      <h2 className={styles.title}>Portfolio</h2>
      <div className={`${styles.portfolioIntro} margin1rem`}>
        <p className="nomargin"> Quelques une de mes réalisations.</p>
        <p className="nomargin"> {"Live démo & sources included"}</p>
      </div>
      <div className={styles.rewrapswiper}>
        <div className={`swiper-button-prev ${styles.nav__prev}`}></div>
        <div className={`swiper ${styles.swiper}`}>
          <div className="swiper-wrapper">
            {cards?.map((card) => (
              <div key={card.title} className="swiper-slide">
                <PortFolioCard {...card} />
              </div>
            ))}
          </div>
          <div
            className={classNames(
              "swiper-pagination",
              "margin3rem",
              styles.pagination
            )}
          ></div>
        </div>
        <div
          className={classNames("swiper-button-next", styles.nav__next)}
        ></div>
      </div>
    </section>
  );
};

export default Portfolio;
