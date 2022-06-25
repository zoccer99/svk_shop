import React, { useEffect, useState } from "react";

import {
  faFutbol,
  faShoePrints,
  faHandshakeSimple,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlayerCard = (props) => {
  

  return (
    <div className="card playerInfoWrapper">
      <img src={props.img} className="card-img-top playerInfoWrapper" alt="..." />
      <div className="card-body ">
        <h4 className="card-text d-flex justify-content-center ">
         {props.name}
        </h4>
      </div>
      <div className="container py-3 ">
        <div className="row ">
          <div className="col-12 col-md-4">
            <div className="d-flex justify-content-around align-items-center">
              <FontAwesomeIcon icon={faShoePrints} />
              <h5 className="m-0">{props.einsätze}</h5>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="d-flex justify-content-around align-items-center ">
              <FontAwesomeIcon icon={faFutbol} />
              <h5 className="m-0 ">{props.tore}</h5>
            </div>
          </div>
          <div className="col-12 col-md-4 ">
            <div className="d-flex justify-content-around align-items-center ">
              <FontAwesomeIcon icon={faHandshakeSimple} />
              <h5 className="m-0">{props.assists}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
