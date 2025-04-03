import React from "react";
import "./css/Countdown.css"; // <- Make sure this CSS file is created and linked

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noGame: false,
      timeLeft: {
        d: "⚽",
        h: "⚽",
        m: "⚽",
        s: "⚽",
      },
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  secondsToTime(millisecs) {
    let secs = millisecs / 1000;
    let days = Math.floor(secs / 86400);
    let hours = Math.floor((secs % 86400) / 3600);
    let minutes = Math.floor((secs % 3600) / 60);
    let seconds = Math.floor(secs % 60);
    return { d: days, h: hours, m: minutes, s: seconds };
  }

  tick() {
    try {
      let temp = this.props.date - new Date();
      if (temp <= 0) {
        clearInterval(this.timerID);
        temp = 0;
      }
      this.setState({ noGame: false, timeLeft: this.secondsToTime(temp) });
    } catch {
      clearInterval(this.timerID);
      this.setState({ noGame: true });
    }
  }

  render() {
    return (
      <>
        {this.state.noGame ? (
          <div className="text-center my-5">
            <h2>Kein anstehendes Spiel</h2>
          </div>
        ) : (
          <div className="countdown-container my-5 px-3 d-flex justify-content-center">
            <div className="countdown-glass p-4 p-md-5 rounded-4 shadow-lg">
              <h2 className="text-center mb-4 display-6 fw-semibold">Nächstes Spiel</h2>
              <div className="d-flex flex-wrap justify-content-between align-items-center text-center mb-5 team-names">
                <div className="flex-fill mb-2">
                  <h4 className="fw-normal">{this.props.heimmannschaft}</h4>
                </div>
                <div className="flex-fill mb-2">
                  <h3 className="fw-bold">-</h3>
                </div>
                <div className="flex-fill mb-2">
                  <h4 className="fw-normal">{this.props.gastmannschaft}</h4>
                </div>
              </div>

              <div className="d-flex justify-content-around flex-wrap timer gap-3">
                {[
                  { label: "Tage", value: this.state.timeLeft.d },
                  { label: "Stunden", value: this.state.timeLeft.h },
                  { label: "Minuten", value: this.state.timeLeft.m },
                  { label: "Sekunden", value: this.state.timeLeft.s },
                ].map((unit, index) => (
                  <div key={index} className="text-center">
                    <div className="timer-box p-3 rounded-3 shadow-sm">
                      <h3 className="mb-1 fw-bold">{unit.value}</h3>
                      <small className="text-muted">{unit.label}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Countdown;
