import React from "react";
import ContactJunior from "./ContactJunior";
import BambinisFlyer from "./pictures/Junioren/Flyer_Bambini.jpg";
import GJuniorenPic from "./pictures/Junioren/G-Junioren.jpeg";
import ModalImage from "react-modal-image";

const Bambinies = () => {
  return (
    <div className="container-fluid w-lg-75">
      <blockquote class="blockquote">
        <h1 class="mb-0">G-Junioren</h1>
        <h2 class="blockquote-footer pt-4 ">Kreisliga Saison</h2>
      </blockquote>
      <div className="d-flex justify-content-center">
        <ModalImage
          small={GJuniorenPic}
          large={GJuniorenPic}
          className="img-fluid img-thumbnail my-3 "
          alt="G-Junioren Mannschaft"
        />
      </div>
      <ContactJunior
        verantwortliche="Andrè Barth (Trainer), Christopher Pauli (Lizenztrainer)"
        telefon="+49 178 3555708"
        anschrift="Mittelstraße 28"
        ort="Kretzschau"
        zeit="Mittwoch 16.00 - 17.00"
        spieltag="Spiel am Wochenende"
      />

      <div className="text-center bambiniFlyer mt-5">
        <img
          src={BambinisFlyer}
          className="rounded img-fluid w-75 shadow-lg"
        ></img>
      </div>
    </div>
  );
};

export default Bambinies;
