import lcddHome from "/public/pictures/lcdd/homepage.png";
import lcddForm from "/public/pictures/lcdd/form.png";
import lcddUserMngt from "/public/pictures/lcdd/usermanagement.png";
import lcddWorkshopList from "/public/pictures/lcdd/workshopslist.png";
import lcddTests from "/public/pictures/lcdd/tests.png";
import lccdBackend from "/public/pictures/lcdd/openAPI.png";
import nextLogo from "/public/pictures/Next/Nextjs-logo.png";

export const cardList = [
  {
    src: lcddHome,
    github: true,
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
    live: true,
    src: lccdBackend,
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
  // {
  //   github: true,
  //   live: true,
  //   src: nextLogo,
  //   title: "React c'est bien tellement mieux avec Next.js",
  //   keywords: ["SSR", "Next.js", "React", "API REST"],
  //   desc: (
  //     <p>
  //       Un framework full-stack simple et efficace, je recommande sans réserver.
  //     </p>
  //   ),
  //   page: "next.js",
  // },
];

//Could be nested
export const cards = {
  "lcdd-frontend": {
    meta__title: "Atelier Salvetat, portfolio - La chaîne du droit - Front-end",
    meta__content:
      "Un projet React/redux complexe, des formunaires et des API REST",
    title: "La chaîne du droit, un frontend ambitieux",
    sections: [
      {
        picture: lcddHome,
        keywords: ["Frontend", "React", "Typescript", "Redux", "API REST"],
        title: "Des besoins complexes",
        text: "La chaîne du droit vise à démocratiser l'accès à la connaissance du droit au près des citoyens.",
        github__url:
          "https://github.com/Fred-AtelierSalvetat/lcddfrontend-contrib",
      },
      {
        picture: lcddUserMngt,
        keywords: ["SASS", "CSSmodule", "Bootstrap"],
        title: "Intégration de maquettes Figma",
        text: "J'ai pris en charge la création from scratch d'UI sur la base de maquettes Figma.\n\nConcernant la gestion du CSS, j'ai choisi une solution mixant SASS et CSS.module par soucis d'efficacité et de maintenabilité.",
      },
      {
        picture: lcddWorkshopList,
        keywords: [
          "Redux",
          "API REST",
          "Redux toolkit",
          "redux-thunk",
          "reselect",
          "rtk-query-codegen-openapi ",
        ],
        title: "Gestion des états locaux et connexion API REST",
        text: "Je me suis chargé de l'implémentation de Redux dans l'ensemble de l'application pour toutes les UI.\n\nJ'ai également connecté le frontend aux APIs REST du backend avec une solution facilement maintenable.",
      },
      {
        picture: lcddForm,
        keywords: [
          "react-hook-form",
          "react-select",
          "drag & drop UI",
          "Bootstrap",
        ],
        title: "Création de formulaires complexes",
        text: "Je suis parti sur une solution basée sur react-hook-form à laquelle j'ai intégré des dates, des champs drag & drop, des sélection multiples et de nombreux champs custom.\n\nA noter un travail d'harmonisation des styles des champs/controles invisible pour l'ulisateur mais conséquent.",
      },
      {
        picture: lcddTests,
        keywords: ["Jest", "Enzime", "Chai", "Sinon", "React Testing Library"],
        title: "Des tests, des tests et encore des tests",
        text: "Plusieurs développeurs, des évolutions constantes, une communication pas toujours possible (turnover).\n\nComment permettre l'évolutivité sans remettre en question le travail déjà effectué?\nTous les devs connaissent le principal levier : des tests unitaires, des vrais...",
      },
    ],
  },
  "lcdd-backend": {
    meta__title: "Atelier Salvetat, portfolio - La chaîne du droit - Back-end",
    meta__content: "Un backend Django/DRF tout simple pour prototyper une API",
    title: "Un backend Django/DRF tout simple pour prototyper une API",
    sections: [
      {
        picture: lccdBackend,
        keywords: [
          "Backend",
          "Python",
          "Django",
          "Django REST Framework",
          "API REST",
          "drf-yasg",
          "openAPI",
        ],
        title: "Une spec et un stub, efficace non?",
        text: "Une fois n'est pas coutume, la team backend m'a demandé de spécifier ce que j'attendai du backend.\n\nCe projet est la réponse : un backend tout simple qui produit une spécification au format openAPI et a vocation a être utilisé comme un stub.",
        github__url:
          "https://github.com/Fred-AtelierSalvetat/lcddbackend-django",
        live_url: "http://ateliersalvetat.pythonanywhere.com/swagger/",
      },
    ],
  },
  "next.js": {
    meta__title: "Atelier Salvetat, portfolio - Next.js",
    meta__content: "TODO",
    title: "Next.js title",
    desc: "Next.js description",
  },
};
