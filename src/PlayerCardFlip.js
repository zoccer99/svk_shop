import React, { useEffect, useState } from "react";
import {
  faFutbol,
  faShoePrints,
  faHandshake,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/PlayerCardFlip.css";

const PlayerCardFlip = ({ img, player }) => {
  const [isMobile, setMobile] = useState(window.innerWidth < 576);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const updateViewport = () => setMobile(window.innerWidth < 576);
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const toggleExpand = async () => {
    if (!isMobile) return;
  
    // Anfrage senden
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URI}/track-player-click`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ playerId: player?.name }), // oder player.id, je nachdem
      });
    } catch (err) {
      console.error("Fehler beim Senden des Klick-Logs:", err);
    }
  
    // Karte expandieren/zusammenklappen
    setExpanded((prev) => !prev);
  };
  

  if (isMobile) {
    return (
      <div
        className={`expandable-card ${expanded ? "expanded" : ""}`}
        onClick={toggleExpand}
      >
        <div className="image-wrapper">
          <img
            src={img}
            alt={player?.name || "Spielerbild"}
            className={`transition-image ${expanded ? "img-expanded" : ""}`}
          />
        </div>

        <div className="text-center mt-3">
          <div className="fw-bold text-primary" style={{ fontSize: "1.2rem" }}>
            {player?.name || "loading"}
          </div>
        </div>

        <div className="d-flex justify-content-around text-center mt-3 icon-values">
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

        {expanded && (
          <div className="mt-3 px-2 text-muted small">
            <p className="mb-1">
              <strong>Position:</strong> {player?.position || "Unbekannt"}
            </p>
            <p className="mb-1">
              <strong>Rückennummer:</strong> {player?.number || "-"}
            </p>
            <p className="mb-0">
              <strong>Verein:</strong> SV 1893 Kretzschau
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front flex-grow-1">
          <img
            src={img}
            alt={player?.name || "Spielerbild"}
            className="player-image"
          />
          <div className="card-footer bg-light p-3">
            <h5 className="player-name text-dark fw-bold mb-2">{player?.name || "loading"}</h5>
            <div className="player-stats d-flex justify-content-around text-dark">
              <div className="d-flex flex-column align-items-center gap-1">
                <FontAwesomeIcon icon={faShoePrints} size="lg" /> <span className="fw-semibold">{player?.matches ?? "0"} Spiele</span>
              </div>
              <div className="d-flex flex-column align-items-center gap-1">
                <FontAwesomeIcon icon={faFutbol} size="lg" /> <span className="fw-semibold">{player?.goals ?? "0"} Tore</span>
              </div>
              <div className="d-flex flex-column align-items-center gap-1">
                <FontAwesomeIcon icon={faHandshake} size="lg" /> <span className="fw-semibold">{player?.assists ?? "0"} Assists</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card-back">
          <h5 className="mb-2">{player?.name || "Spieler"}</h5>
          <p><strong>Position:</strong> {player?.position || "Unbekannt"}</p>
          <p><strong>Rückennummer:</strong> {player?.number || "-"}</p>
          <p><strong>Verein:</strong> SV 1893 Kretzschau</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerCardFlip;
