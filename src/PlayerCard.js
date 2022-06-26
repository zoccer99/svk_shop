import React, { useEffect, useState } from "react";

import {
  faFutbol,
  faShoePrints,
  faHandshakeSimple,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlayerCard = (props) => {
  const [isMobile, setMobile] = useState(window.innerWidth < 576);

  const updateViewport = () => {
    setMobile(window.innerWidth < 576);
    console.log(isMobile);
  };

  useEffect(() => {
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  });

  return (
    <>
      {isMobile ? (
        <div className="d-flex align-items-center justify-content-between playerInfoWrapper mb-1 rounded">
          <img src={props.img} alt="..." className="img-fluid w-25 rounded" style={{maxWidth: "80px"}} />
          <h3 className="d-flex align-items-center text-center border-right">{props.name}</h3>
          <div className=" d-md-block d-flex ">
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
      ) : (
        <div className="card playerInfoWrapper mb-3">
          <img src={props.img} className="card-img-top " alt="..." />
          <div className="card-body">
            <h4 className="card-text d-flex justify-content-center text-center">
              {props.name}
            </h4>
          </div>
          <div className="container py-3 d-none d-md-block">
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
      )}
    </>
  );
};

export default PlayerCard;
