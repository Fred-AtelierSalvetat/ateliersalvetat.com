/* eslint-disable */
import React from "react";
import AmbroisePicture from "./assets/pictures/Ambroise.png";

const Temoignage = () => {
  return (
    <div className="testimonialsBox">
      <h1>Témoignages</h1>
      <p>Les gens avec qui j'ai travaillé ont dit de belles choses.</p>
      <div className="testimonial">
        <img src={AmbroisePicture} alt="Portait d'Ambroise" />
        <p>
          "Ton témoignages, ici si tu veux bien me faire cette faveur. Fred"
        </p>
        <p className="signature">Ambroise ARMAND</p>
        <p className="titres">
          Juriste, Président-Fondateur de la Chaîne du Droit
        </p>
      </div>
    </div>
  );
};

export default Temoignage;
