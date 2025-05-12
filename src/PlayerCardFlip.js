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
        body: JSON.stringify({ playerId: player?._id }), // oder player.id, je nachdem
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

        <div className="text-center mt-2">
          <div className="fw-semibold" style={{ fontSize: "1rem" }}>
            {player?.name?.split(" ")[0] || "loading"}
          </div>
          <div style={{ fontSize: "0.9rem", color: "#444" }}>
            {player?.name?.split(" ").slice(1).join(" ") || ""}
          </div>
        </div>

        <div className="d-flex justify-content-around text-center mt-3 icon-values">
          <div className="d-flex align-items-center gap-1">
            <FontAwesomeIcon icon={faShoePrints} />
            <span>{player?.matches ?? "loading"}</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <FontAwesomeIcon icon={faFutbol} />
            <span>{player?.goals ?? "loading"}</span>
          </div>
          <div className="d-flex align-items-center gap-1">
            <FontAwesomeIcon icon={faHandshake} />
            <span>{player?.assists ?? "loading"}</span>
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
          <div className="card-footer">
            <h5 className="player-name">{player?.name || "loading"}</h5>
            <div className="player-stats">
              <div>
                <FontAwesomeIcon icon={faShoePrints} /> {player?.matches ?? 0}
              </div>
              <div>
                <FontAwesomeIcon icon={faFutbol} /> {player?.goals ?? 0}
              </div>
              <div>
                <FontAwesomeIcon icon={faHandshake} /> {player?.assists ?? 0}
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
