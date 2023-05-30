import ModalImage from "react-modal-image";
import ContactJunior from "../ContactJunior";
import FJuniorenPic from "../pictures/Junioren/F-Junioren.jpeg";

const FJunioren = () => {
  return (
    <div className="container-fluid w-lg-75">
     <blockquote className="blockquote">
          <h1 className="mb-0">
           F-Junioren
          </h1>
          <h2 className="blockquote-footer pt-4 ">
           Kreisliga Saison 
          </h2>
        </blockquote>
        <div className="d-flex justify-content-center">
        <ModalImage
          small={FJuniorenPic}
          large={FJuniorenPic}
          className="img-fluid img-thumbnail my-3 "
          alt="D-Junioren Mannschaft"
        />
      </div>
      <ContactJunior
        verantwortliche="Christian Gebert (Nachwuchsleiter)"
        telefon="+49 178 3555708"
        anschrift="Mittelstraße 28"
        ort="Kretzschau"
        zeit="Mittwoch 17.00-18.30"
        spieltag="Spiel am Wochenende"
      />
    </div>
  );
};

export default FJunioren;
