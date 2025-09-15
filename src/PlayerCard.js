import React, { useMemo, useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Redesigned PlayerCard in the style of the provided mock
const PlayerCard = ({ img, player }) => {
  const safeName = player?.name || "loading";
  const [tab, setTab] = useState("overview");
  const [firstName, lastName] = useMemo(() => {
    const parts = (safeName || "").split(" ");
    return [parts[0] || "", parts.slice(1).join(" ")];
  }, [safeName]);

  const matches = Number(player?.matches ?? 0);
  const goals = Number(player?.goals ?? 0);
  const assists = Number(player?.assists ?? 0);
  const goalsPerGame = useMemo(() => {
    if (!matches) return 0;
    return Math.round((goals / matches) * 10) / 10; // one decimal
  }, [goals, matches]);

  // Select label like 2025/26
  const seasonLabel = useMemo(() => {
    const now = new Date();
    const start = now.getMonth() >= 6 ? now.getFullYear() : now.getFullYear() - 1;
    const endShort = String((start + 1) % 100).padStart(2, "0");
    return `${start}/${endShort}`;
  }, []);

  // Progress value for the purple bar (normalized by a simple heuristic)
  const barPct = Math.max(10, Math.min(100, Math.round((goalsPerGame / 2) * 100)));

  return (
    <div className="player-card-modern shadow-lg rounded-4 overflow-hidden">
      {/* Hero */}
      <div className="player-hero position-relative">
        <button type="button" className="hero-btn back" aria-label="Zurück">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        { /* Follow button removed as requested */ }

        <div className="hero-copy">
          <div className="hero-name">
            <span className="first">{firstName}</span>
            <span className="last">{lastName}</span>
          </div>
          <div className="hero-meta">
            <span className="club">SV Kretzschau</span>
            <span className="dot">•</span>
            <span className="position">{player?.position || "Spieler"}</span>
          </div>
        </div>

        <img src={img} alt={safeName} className="hero-photo" />
      </div>

      {/* Tabs */}
      <div className="player-tabs">
        <button
          className={`tab ${tab === "overview" ? "active" : ""}`}
          onClick={() => setTab("overview")}
          type="button"
          aria-pressed={tab === "overview"}
        >
          Overview
        </button>
        <button
          className={`tab ${tab === "stats" ? "active" : ""}`}
          onClick={() => setTab("stats")}
          type="button"
          aria-pressed={tab === "stats"}
        >
          Stats
        </button>
      </div>

      {/* Season filter */}
      <div className="player-season">
        <div className="dropdown-pill" role="button" aria-label="Saison">
          <span className="label">Season</span>
          <span className="value">{seasonLabel}</span>
        </div>
      </div>

      {/* Stats card */}
      {tab === "stats" ? (
        <div className="player-stats-card">
          <div className="stats-row">
            <div className="stat">
              <div className="label">Appearances</div>
              <div className="value">{matches}</div>
            </div>
            <div className="stat">
              <div className="label">Goals</div>
              <div className="value">
                {goals}
                {/* <span className="badge-success">Top 1%</span> */}
              </div>
            </div>
            <div className="stat">
              <div className="label">Assists</div>
              <div className="value">{assists}</div>
            </div>
          </div>

          {/* <div className="stats-bar">
            <div className="bar-bg">
              <div className="bar-fill" style={{ width: `${barPct}%` }} />
            </div>
            <div className="bar-legend">
              <span className="dot appearances" /> Appearances
              <span className="dot goals" /> Goals
              <span className="dot rate" /> {goalsPerGame} per game
            </div>
          </div> */}

        </div>
      ) : (
        <div className="player-overview-card">
          <div className="overview-row">
            <div className="item"><span className="key">Club</span><span className="val">SV Kretzschau</span></div>
            <div className="item"><span className="key">Position</span><span className="val">{player?.position || "–"}</span></div>
            <div className="item"><span className="key">Number</span><span className="val">{player?.number || "–"}</span></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlayerCard;
