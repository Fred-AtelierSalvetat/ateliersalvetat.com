import lcddHome from "/public/pictures/lcdd/homepage.png";
import openAPI from "/public/pictures/lcdd/openAPI.png";
import nextLogo from "/public/pictures/Next/Nextjs-logo.png";

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

export default cards;
