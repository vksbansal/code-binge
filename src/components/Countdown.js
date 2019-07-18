import React, { Component } from 'react';
import '../styles/Countdown.css';
import moment from 'moment';

class Countdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            timeToDisplay: ''
        }
    }

    update = () => {
        const { prefix, targetDate } = this.props;

        let duration = moment.duration(targetDate.getTime() - new Date().getTime());

        if (duration.asSeconds() <= 0) {
            clearInterval(this.intervalId);
            this.setState({
                timeToDisplay: "Countdown Ended"
            })
            return;
        }

        //Otherwise
        duration = moment.duration(duration.asSeconds() - 1, 'seconds');

        const timeToDisplay = 'T - ' + (duration.days() + ' Days, ' + duration.hours() + ' Hours, ' + duration.minutes() + ' Min, ' + duration.seconds() + ' Sec');

        this.setState({
            timeToDisplay
        })
    }

    componentDidMount() {
        this.intervalId = setInterval(this.update, 1000);
        this.update();
    }

    render() {
        return (
            <div className="countdown">
                <div>{this.props.prefix}</div>
                <div>{this.state.timeToDisplay}</div>
            </div>
        )
    }
}

export default Countdown;