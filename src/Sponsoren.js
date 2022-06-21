import React from "react";
import ModalImage from "react-modal-image";

import SponsorStrauch from "./pictures/sponsoren/HolgerStrauch.jpeg";
import SponsorJoma from "./pictures/sponsoren/Joma.jpeg";
import SponsorWinkler from "./pictures/sponsoren/Winkler.png";
import SponsorRothermann from "./pictures/sponsoren/Rothermann.jpeg";

const Sponsoren = () => {
  return (
      <div className="d-flex justify-content-center">
        <div className="w-100">
        <blockquote className="blockquote">
          <h3 className="mb-0">
           Unsere Sponsoren
          </h3>
          <h4 className="blockquote-footer pt-4 ">
           Zur Kreisoberliga-Saison 2021/2022
          </h4>
        </blockquote>
        <div className="d-flex justify-content-around">
          <ModalImage
            small={SponsorRothermann}
            large={SponsorRothermann}
            className="img-fluid  my-3 "
            alt="Unser Sponsor Strauch"
          />
        </div>
        <div className="d-flex justify-content-around">
          <ModalImage
            small={SponsorStrauch}
            large={SponsorStrauch}
            className="img-fluid  my-3 "
            alt="Unser Sponsor Strauch"
          />
        </div>
        <div className="d-flex justify-content-around align-items-center">
          <ModalImage
            small={SponsorJoma}
            large={SponsorJoma}
            className="img-fluid img-thumbnail my-3 "
            alt="Unser Sponsor Joma"
          />
          <ModalImage
            small={SponsorWinkler}
            large={SponsorWinkler}
            className="img-fluid img-thumbnail my-3 "
            alt="Unser Sponsor Winkler"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsoren;
