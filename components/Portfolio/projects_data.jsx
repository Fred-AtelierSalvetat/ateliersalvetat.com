import lcddHome from "/public/pictures/lcdd/homepage.png";
import openAPI from "/public/pictures/lcdd/openAPI.png";
import nextLogo from "/public/pictures/Next/Nextjs-logo.png";

export const cardList = [
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
    page: "lcdd-frontend",
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
    page: "lcdd-backend",
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
    page: "next.js",
  },
];

//Could be nested
export const cards = {
  "lcdd-frontend": {
    meta__title: "Atelier Salvetat, portfolio - La chaîne du droit - Front-end",
    meta__content:
      "Un projet React/redux complexe, des formunaires et des API REST",
    title: "La chaîne du droit, un frontend ",
  },
  "lcdd-backend": {
    meta__title: "Atelier Salvetat, portfolio - La chaîne du droit - Back-end",
    meta__content: "Un backend Django/DRF tout simple pour prototyper une API",
    title: "Un backend Django/DRF tout simple pour prototyper une API",
    introduction__picture: openAPI,
    introduction__keywords: [
      "Backend",
      "Python",
      "Django",
      "Django REST Framework",
      "API REST",
      "drf-yasg",
      "openAPI",
    ],
    introducion__title: "Une spec et un stub, efficace non?",
    introduction__text:
      "Une fois n'est pas coutume, la team backend m'a demandé de spécifier ce que j'attendai du backend.\n\nCe projet est la réponse : un backend tout simple qui produit une spécification au format openAPI et a vocation a être utilisé comme un stub.",
    github__url: "https://github.com/Fred-AtelierSalvetat/lcddbackend-django",
    live_url: "http://ateliersalvetat.pythonanywhere.com/swagger/",
  },
  "next.js": {
    meta__title: "Atelier Salvetat, portfolio - Next.js",
    meta__content: "TODO",
    title: "Next.js title",
    desc: "Next.js description",
  },
};
