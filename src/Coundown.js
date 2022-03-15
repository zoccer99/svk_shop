import React, { useState } from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timeLeft: {
        d: 0,
        h: 0,
        m: 0,
        s: 0,
      },
      date: props.date,
      heimmannschaft: props.heimmannschaft,
      gastmannschaft: props.gastmannschaft,
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
    var temp = this.state.date - new Date();
    if (temp <= 0) {
      clearInterval(this.timerID);
      temp = 0;
    }
    this.setState({
      timeLeft: this.secondsToTime(temp),
    });
  }

  render() {
    return (
      <div className="d-flex justify-content-center ">
        <div className="countdownContainer my-4 p-3">
          <h1 className="text-center m-4">Nächstes Spiel</h1>
          <div className="d-flex justify-content-around m-3">
            <div>
              <h2 className="">{this.state.heimmannschaft}</h2>
            </div>
            <div>
              <h2>-</h2>
            </div>

            <div>
              <h2>{this.state.gastmannschaft}</h2>
            </div>
          </div>
          <div className="d-flex justify-content-around">
            <div className="d-flex flex-column ">
              <h4>Tage</h4>
              <div className="align-self-center">
                {" "}
                <h3>{this.state.timeLeft.d}</h3>
              </div>
            </div>
            <div className="d-flex flex-column">
              <h4>Stunden</h4>
              <div className="align-self-center">
                {" "}
                <h3>{this.state.timeLeft.h}</h3>
              </div>
            </div>
            <div className="d-flex flex-column">
              <h4>Minuten</h4>
              <div className="align-self-center">
                {" "}
                <h3>{this.state.timeLeft.m}</h3>
              </div>
            </div>
            <div className="d-flex flex-column">
              <h4>Sekunden</h4>
              <div className="align-self-center ">
                {" "}
                <h3>{this.state.timeLeft.s}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
