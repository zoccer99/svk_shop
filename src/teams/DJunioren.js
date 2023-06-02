import React from "react";
import ModalImage from "react-modal-image";
import ContactJunior from "../ContactJunior";
import DJuniorenPic from "../pictures/Junioren/D-Junioren.jpeg";

const DJunioren = () => {
  return (
    <div className="container-fluid w-lg-75">
      <blockquote className="blockquote">
          <h1 className="mb-0">
           D-Junioren
          </h1>
          <h2 className="blockquote-footer pt-4 ">
           Kreisliga Saison 
          </h2>
          </blockquote>
      <div className="d-flex justify-content-center">
        <ModalImage
          small={DJuniorenPic}
          large={DJuniorenPic}
          className="img-thumbnail my-3"
          alt="D-Junioren Mannschaft"
        />
      </div>
      <ContactJunior
        verantwortliche="Lars Hendrischke (Trainer), Christian Gebert (Nachwuchsleiter)"
        telefon="+49 178 3555708"
        anschrift="Mittelstraße 28"
        ort="Kretzschau"
        zeit="Dienstag 16.30 - 18.00"
        spieltag=
        "Freitag 16.00 - 17.30"
      />
    </div>
   
  );
};

export default DJunioren;
