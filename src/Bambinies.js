import React from "react";

import ContactJunior from "./ContactJunior";

import BambinisFlyer from "./pictures/Flyer_Bambini.jpg";

const Bambinies = () => {
  return (
    <div>
{/*      
        <blockquote class="blockquote">
          <h3 class="">Unsere Bambinis</h3>
          <footer class="blockquote-footer mt-2">
            Die Zukunft <cite title="Source Title">des Vereins</cite>
          </footer>
        </blockquote> */}
     
      <div className="text-center bambiniFlyer">
        <img
          src={BambinisFlyer}
          className="rounded img-fluid w-75 shadow-lg"
        ></img>
      </div>
      <ContactJunior
        verantwortliche="Andrè Barth(Trainer), Christopher Pauli(Lizenztrainer)"
        telefon="0178 3555708"
        anschrift="Mittelstraße 28"
        ort="Kretzschau"
        zeit="Mittwoch 16.00 - 17.00"
        spieltag="Sonntag"
      />
    </div>
  );
};

export default Bambinies;
