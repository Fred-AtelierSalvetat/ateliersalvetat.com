import React from "react";

import styles from "./legalpage.module.scss";
import classNames from "classnames";

const LegalPage = () => {
  return (
    <main className={classNames(styles.legalpage, "pagePadding")}>
      <div className="container">
        <div className={`${styles.titleblock} margin5rem`}>
          <h1>
            Mentions légales
            <br />{" "}
          </h1>
          <p className="centerText">En vigueur au 01/02/2022</p>
        </div>

        <p>
          {
            'Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l\'"Utilisateur", du site https://www.ateliersalvetat.com/, ci-après le "Site", les présentes mentions légales. La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales. Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».'
          }
        </p>

        <h2>{"ARTICLE 1 - L'EDITEUR"}</h2>
        <p>
          {
            "L'édition du Site est assurée par Atelier Salvetat SASU au capital de 3000 euros, immatriculée au Registre du Commerce et des Sociétés de Bobigny sous le numéro 909005803 dont le siège social est situé au 129 rue de romainville, Numéro de téléphone 0698016442, Adresse e-mail : frederic@ateliersalvetat.com. N° de TVA intracommunautaire : FR64909005803 Le Directeur de la publication est Salvetat Frédéric ci-après l'\"Editeur\"."
          }
        </p>
        <h2>{"ARTICLE 2 - L'HEBERGEUR"}</h2>
        <p>
          {
            "L'hébergeur du Site est la société Amazon Web Services LLC, dont le siège social est situé au P.O. Box 81226 – Seattle, WA 98108-1226 – USA, contact via https://aws.amazon.com/."
          }
        </p>
        <h2>ARTICLE 3 - ACCES AU SITE</h2>
        <p>
          {
            "Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance. En cas de modification, interruption ou suspension du Site, l'Editeur ne saurait être tenu responsable."
          }
        </p>
        <h2>ARTICLE 4 - COLLECTE DES DONNEES</h2>
        <p>
          {
            "Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs."
          }
        </p>
        <h2></h2>
        <p>
          {
            "Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Editeur est prohibée et pourra entraînée des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil."
          }
        </p>
      </div>
    </main>
  );
};

export default LegalPage;
