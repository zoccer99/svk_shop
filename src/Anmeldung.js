import React from "react";
import ModalImage from "react-modal-image";
import we_need_you from "./pictures/Junioren/Wir_suchen_dich_neu.png";


const Anmeldung = () => {
  return (
    <div className="container-fluid w-lg-75">
      <div>
        <ModalImage
          small={we_need_you}
          large={we_need_you}
          className="img-fluid img-thumbnail my-3 " alt="Erste Mannschaft"
        />
      </div>

    </div>
  );
};

export default Anmeldung;
