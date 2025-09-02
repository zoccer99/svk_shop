import React, { useEffect, useState } from "react";
import PlayerCard from "./PlayerCard";

// Keep same props; render the new PlayerCard UI
const PlayerCardFlip = ({ img, player }) => {
  const [isMobile, setMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 576 : true);

  useEffect(() => {
    const onResize = () => setMobile(window.innerWidth < 576);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleClick = async () => {
    // Preserve the previous tracking behavior for mobile taps
    if (!isMobile) return;
    try {
      await fetch(`${process.env.REACT_APP_BACKEND_URI}/track-player-click`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ playerId: player?.name }),
      });
    } catch (e) {
      // fail silently in UI
      console.debug("track-player-click failed", e);
    }
  };

  return (
    <div onClick={handleClick} style={{ cursor: isMobile ? "pointer" : "default" }}>
      <PlayerCard img={img} player={player} />
    </div>
  );
};

export default PlayerCardFlip;
