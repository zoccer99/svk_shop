import React, { useState } from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      noGame: true,
      timeLeft: {
        d: undefined,
        h: undefined,
        m: undefined,
        s: undefined,
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

    let days = Math.floor(Math.floor(secs / (60 * 60)) / 24);

    let hours = Math.floor(secs / (60 * 60)) - days * 24;

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      d: days,
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  tick() {
    try {

      var temp = this.props.game[2] - new Date();
      if (temp <= 0) {
        clearInterval(this.timerID);
        temp = 0;
      }
      this.setState({
        noGame: false,
        timeLeft: this.secondsToTime(temp),
      });
    } catch {
      clearInterval(this.timerID);
      this.setState({
        noGame: true,
      });
    }
  }

  render() {
    return (
      <>
        {this.state.noGame ? (
          <div>
            <h2>Kein anstehendes Spiel</h2>
          </div>
        ) : (
          <div className="d-flex justify-content-center ">
            <div className="countdownContainer my-4 p-3">
              <h1 className="text-center m-4">Nächstes Spiel</h1>
              <div className="d-flex justify-content-around m-3">
                <div>
                  <h3 className="text-center">{this.props.game[0]}</h3>
                </div>
                <div>
                  <h3 className="text-center">-</h3>
                </div>

                <div>
                  <h3 className="text-center">{this.props.game[1]}</h3>
                </div>
              </div>
              <div className="d-flex justify-content-around">
                <div className="d-flex flex-column ">
                  <h4 className="d-sm-none">D</h4>
                  <h4 className="d-none d-sm-block">Tage</h4>
                  <div className="align-self-center">
                    {" "}
                    <h3>{this.state.timeLeft.d}</h3>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <h4 className="d-sm-none">H</h4>
                  <h4 className="d-none d-sm-block">Stunden</h4>
                  <div className="align-self-center">
                    {" "}
                    <h3>{this.state.timeLeft.h}</h3>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <h4 className="d-sm-none">M</h4>
                  <h4 className="d-none d-sm-block">Minuten</h4>
                  <div className="align-self-center">
                    {" "}
                    <h3>{this.state.timeLeft.m}</h3>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <h4 className="d-sm-none">S</h4>
                  <h4 className="d-none d-sm-block">Sekunden</h4>
                  <div className="align-self-center ">
                    {" "}
                    <h3>{this.state.timeLeft.s}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default Countdown;
