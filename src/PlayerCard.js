import React, { useEffect, useState } from "react";
import {
  faFutbol,
  faShoePrints,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PlayerCard = ({ img, player }) => {
  const [isMobile, setMobile] = useState(window.innerWidth < 576);

  useEffect(() => {
    const updateViewport = () => {
      setMobile(window.innerWidth < 576);
    };
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="player-card-glass player-card-mobile p-2 mb-3 shadow-sm rounded-3 d-flex align-items-center justify-content-between">
          <img
            src={img}
            alt={player?.name || "Spielerbild"}
            className="rounded-3 me-2"
            style={{ width: "65px", height: "65px", objectFit: "cover" }}
          />
          <div className="flex-grow-1">
            <div className="fw-semibold" style={{ fontSize: "1rem" }}>
              {(player?.name?.split(" ")[0] || "loading")}
            </div>
            <div style={{ fontSize: "0.9rem", color: "#444" }}>
              {(player?.name?.split(" ").slice(1).join(" ") || "")}
            </div>
          </div>
          <div className="d-flex flex-column align-items-end text-end ms-2 icon-values">
            <div className="d-flex align-items-center mb-1">
              <FontAwesomeIcon icon={faShoePrints} className="me-1" />
              <span>{player?.matches ?? "loading"}</span>
            </div>
            <div className="d-flex align-items-center mb-1">
              <FontAwesomeIcon icon={faFutbol} className="me-1" />
              <span>{player?.goals ?? "loading"}</span>
            </div>
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faHandshake} className="me-1" />
              <span>{player?.assists ?? "loading"}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="player-card-desktop shadow rounded-4 overflow-hidden mb-4">
          <img
            src={img}
            className="w-100"
            alt={player?.name || "Spielerbild"}
            style={{ height: "320px", objectFit: "cover" }}
          />
          <div className="player-card-footer p-3">
            <h5 className="fw-semibold mb-3 text-center text-dark">
              {player?.name || "loading"}
            </h5>
            <div className="d-flex justify-content-around text-dark">
              <div className="d-flex align-items-center gap-1">
                <FontAwesomeIcon icon={faShoePrints} />
                <span>{player?.matches ?? "0"}</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <FontAwesomeIcon icon={faFutbol} />
                <span>{player?.goals ?? "0"}</span>
              </div>
              <div className="d-flex align-items-center gap-1">
                <FontAwesomeIcon icon={faHandshake} />
                <span>{player?.assists ?? "0"}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayerCard;
