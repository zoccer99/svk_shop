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

  toString() {}

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
      <div className="countdownContainer">
        <h1 >Next Game</h1>
        <div className="d-flex justify-content-around">
          <div>Days</div>
          <div>Hours</div>
          <div>Minutes </div>
          <div>Seconds </div>
        </div>
        <div className="d-flex justify-content-around">
          <div> {this.state.timeLeft.d}</div>
          <div> {this.state.timeLeft.h}</div>
          <div> {this.state.timeLeft.m}</div>
          <div> {this.state.timeLeft.s}</div>
        </div>
      </div>
    );
  }
}

export default Countdown;
