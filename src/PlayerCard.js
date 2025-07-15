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
        <div className="player-card-mobile p-3 mb-3 shadow-lg rounded-lg d-flex align-items-center">
          <img
            src={img}
            alt={player?.name || "Spielerbild"}
            className="rounded-circle me-3"
            style={{ width: "70px", height: "70px", objectFit: "cover", border: "2px solid var(--color-primary-blue)" }}
          />
          <div className="flex-grow-1">
            <div className="fw-bold text-primary" style={{ fontSize: "1.1rem" }}>
              {(player?.name?.split(" ")[0] || "loading")}
            </div>
            <div className="text-secondary" style={{ fontSize: "0.95rem" }}>
              {(player?.name?.split(" ").slice(1).join(" ") || "")}
            </div>
          </div>
          <div className="d-flex flex-column align-items-end text-end ms-3">
            <div className="d-flex align-items-center mb-1 text-dark">
              <FontAwesomeIcon icon={faShoePrints} className="me-1" />
              <span className="fw-semibold">{player?.matches ?? "loading"}</span>
            </div>
            <div className="d-flex align-items-center mb-1 text-dark">
              <FontAwesomeIcon icon={faFutbol} className="me-1" />
              <span className="fw-semibold">{player?.goals ?? "loading"}</span>
            </div>
            <div className="d-flex align-items-center text-dark">
              <FontAwesomeIcon icon={faHandshake} className="me-1" />
              <span className="fw-semibold">{player?.assists ?? "loading"}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="player-card-desktop shadow-lg rounded-4 overflow-hidden mb-4">
          <img
            src={img}
            className="w-100"
            alt={player?.name || "Spielerbild"}
            style={{ height: "300px", objectFit: "cover" }}
          />
          <div className="player-card-footer p-4 bg-light">
            <h5 className="fw-bold mb-3 text-center text-dark">
              {player?.name || "loading"}
            </h5>
            <div className="d-flex justify-content-around text-dark">
              <div className="d-flex flex-column align-items-center gap-1">
                <FontAwesomeIcon icon={faShoePrints} size="lg" />
                <span className="fw-semibold">{player?.matches ?? "0"} Spiele</span>
              </div>
              <div className="d-flex flex-column align-items-center gap-1">
                <FontAwesomeIcon icon={faFutbol} size="lg" />
                <span className="fw-semibold">{player?.goals ?? "0"} Tore</span>
              </div>
              <div className="d-flex flex-column align-items-center gap-1">
                <FontAwesomeIcon icon={faHandshake} size="lg" />
                <span className="fw-semibold">{player?.assists ?? "0"} Assists</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PlayerCard;
