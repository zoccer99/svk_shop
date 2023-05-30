import ContactJunior from "../ContactJunior";
import ModalImage from "react-modal-image";
import CJuniorenPic from "../pictures/Junioren/C-Junioren.jpeg";

const CJunioren = () => {
  return (
    <div className="container-fluid w-lg-75">
     <blockquote className="blockquote">
          <h1 className="mb-0">
           C-Junioren
          </h1>
          <h2 className="blockquote-footer pt-4 ">
           Kreisliga Saison 
          </h2>
        </blockquote>
        {/* <div className="d-flex justify-content-center">
        <ModalImage
          small={CJuniorenPic}
          large={CJuniorenPic}
          className="img-fluid img-thumbnail my-3 "
          alt="C-Junioren Mannschaft"
        />
      </div> */}
      <ContactJunior
        verantwortliche="Karsten Krause (Trainer), Christian Gebert (Nachwuchsleiter)"
        telefon="+49 178 3555708"
        anschrift="Mittelstraße 28"
        ort="Kretzschau"
        zeit="Mittwoch 17.00-18.30"
        spieltag="Freitag 17.00 - 18.30"
      />
    </div>
  );
};

export default CJunioren;
