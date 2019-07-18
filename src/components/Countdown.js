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

        const timeToDisplay = prefix + " " + (duration.days() + 'd:' + duration.hours() + 'h:' + duration.minutes() + 'm:' + duration.seconds() + 's');

        this.setState({
            timeToDisplay
        })
    }

    componentDidMount() {
        this.intervalId = setInterval(this.update, 1000);
        this.update();
    }

    render() {
        const { timeToDisplay } = this.state;

        return <div>
            <h3>{timeToDisplay}</h3>
        </div>
    }
}

export default Countdown;