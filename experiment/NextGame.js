import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NextGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enemy: 'Vfb Zeitz',
            time: {},
        };
        this.timer = 0;
        this.compareDate = new Date();
        this.countdown = this.countdown.bind(this);
        this.timeBetweenDates = this.timeBetweenDates(this);

    }

    timeBetweenDates(toDate) {
        var dateEntered = toDate;
        var now = new Date();
        var difference = dateEntered.getTime() - now.getTime();

        if (difference <= 0) {

            // Timer done
            clearInterval(timer);

        } else {

            var seconds = Math.floor(difference / 1000);
            var minutes = Math.floor(seconds / 60);
            var hours = Math.floor(minutes / 60);
            var days = Math.floor(hours / 24);

            hours %= 24;
            minutes %= 60;
            seconds %= 60;
        }
        let obj = {
            "d": days,
            "h": hours,
            "m": minutes,
            "s": seconds
        };

        return obj;
    }


    componentDidMount() {
        if (this.timer == 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.timeBetweenDates(compareDate), 1000);
        }

        let timeLeftVar = this.timeBetweenDates(new Date('December 17, 2025 03:24:00'))
        this.setState({
            time: this.timeLeftVar,
        });
    }


    render() {
        return (
            <div>
                <div>
                    <em>Nächstes Spiel-{this.state.enemy}</em>
                    <i>H:{this.state.time.h}-M:{this.state.time.m}- s:{this.state.time.s}</i>
                    <p>{this.state.date}</p>
                </div>
            </div>
        );
    }
}

NextGame.propTypes = {

};

export default NextGame;