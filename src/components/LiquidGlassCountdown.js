import React, { useEffect, useMemo, useState } from "react";

const clamp = (n) => (n < 0 ? 0 : n);

const toTime = (ms) => {
  const total = Math.max(0, Math.floor(ms / 1000));
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = Math.floor(total % 60);
  return { d, h, m, s };
};

const LiquidGlassCountdown = ({ date, heimmannschaft, gastmannschaft }) => {
  const target = useMemo(() => new Date(date), [date]);
  const [{ d, h, m, s }, setTL] = useState(() => toTime(target - new Date()));

  useEffect(() => {
    const id = setInterval(() => setTL(toTime(target - new Date())), 1000);
    return () => clearInterval(id);
  }, [target]);

  const items = [
    { label: "Tage", value: clamp(d) },
    { label: "Stunden", value: clamp(h) },
    { label: "Minuten", value: clamp(m) },
    { label: "Sekunden", value: clamp(s) },
  ];

  return (
    <div className="lgc-wrap">
      <div className="lgc-card">
        <h2 className="lgc-title">Nächstes Spiel</h2>
        <div className="lgc-teams">
          <span className="team">{heimmannschaft}</span>
          <span className="dash">–</span>
          <span className="team">{gastmannschaft}</span>
        </div>
        <div className="lgc-timer">
          {items.map((u) => (
            <div key={u.label} className="lgc-chip">
              <div className="val">{u.value}</div>
              <div className="lab">{u.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiquidGlassCountdown;

