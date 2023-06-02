import React, from "react";
import {
  faClock,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ContactJunior(props) {
  return (
    <div className=" mt-5 d-flex justify-content-center font-contactJunior">
      <div className="  py-3  container-fluid rounded countdownContainer">
        <div className="d-flex align-items-center my-2">
          <div className="d-none col-lg-4  d-lg-block text-center">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div className="col text-center ">
            <p className="mb-0">{props.verantwortliche}</p>
          </div>
          <div className="d-none col-lg-4  d-lg-block text-center">
            <p className="mb-0">{props.telefon}</p>
          </div>
        </div>
        <div className="d-flex align-items-center my-2">
          <div className="d-none col-lg-4  d-lg-block text-center ">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <div className="col text-center">
            <div className="d-flex align-items-center justify-content-center">
              <p className="mb-0">{props.anschrift}</p>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-4 text-center">
            <p className="mb-0">{props.ort}</p>
          </div>
        </div>
        <div className="d-flex align-items-center my-2">
          <div className="d-none col-lg-4  d-lg-block text-center">
            <FontAwesomeIcon icon={faClock} />
          </div>
          <div className="col text-center">
            <p className="mb-0">{props.zeit}</p>
          </div>
          <div className=" d-none d-lg-block col-lg-4 text-center">
            <p className="mb-0">{props.spieltag}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
