import ContactJunior from "./ContactJunior";
import DJuniorenPic from "./pictures/DJunioren.jpeg";
import ModalImage from "react-modal-image";

const DJunioren = () => {
  return (
    <div className="container-fluid w-lg-75">
      <div className="d-flex justify-content-center">
        <ModalImage
          small={DJuniorenPic}
          large={DJuniorenPic}
          className="img-fluid img-thumbnail my-3 "
          alt="D-Junioren Mannschaft"
        />
      </div>
      <ContactJunior
        verantwortliche="Lars Hendrischke(Trainer), Christian Gebert(Nachwuchsleiter)"
        telefon="0178 3555708"
        anschrift="Mittelstraße 28"
        ort="Kretzschau"
        zeit="Dienstag 16.30 - 18.00, Freitag 16.00 - 17.30"
        spieltag=
        "Sonntag"
      />
    </div>
   
  );
};

export default DJunioren;
