import React, { useEffect } from "react";

import styles from "./portfolio.module.scss";
import PortFolioCard from "./PortFolioCard";

import Swiper, { Navigation, Pagination, EffectCoverflow } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import classNames from "classnames";

import { cardList } from "./projects_data";

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
    <section className={classNames(styles.portfolio, "pagePadding")}>
      <h2 className={styles.title}>Portfolio</h2>
      <div className={`${styles.portfolioIntro} margin1rem`}>
        <p className="nomargin"> Quelques une de mes réalisations.</p>
        <p className="nomargin"> {"Live démo & sources included"}</p>
      </div>
      <div className={styles.rewrapswiper}>
        <div className={`swiper-button-prev ${styles.nav__prev}`}></div>
        <div className={`swiper ${styles.swiper}`}>
          <div className="swiper-wrapper">
            {cardList?.map((card) => (
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
