import React, { useState } from "react";

class Countdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { timeLeft: {}, date: props.date };
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
      <div className="countdownContainer card border-secondary m-2 Oswald-sans-serif">
        <div className = "card-body ">
        <h1 className="text-center Oswald-sans-serif">Next Game</h1>
        <div className="d-flex justify-content-around">
          <div className="d-flex flex-column ">
            <div>Days</div>
            <div className="align-self-center"> {this.state.timeLeft.d}</div>
          </div>
          <div className="d-flex flex-column">
            <div>Hours</div>
            <div className="align-self-center"> {this.state.timeLeft.h}</div>
          </div>
          <div className="d-flex flex-column">
            <div>Minutes </div>
            <div className="align-self-center"> {this.state.timeLeft.m}</div>
          </div>
          <div className="d-flex flex-column">
            <div>Seconds </div>
            <div className="align-self-center"> {this.state.timeLeft.s}</div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Countdown;
