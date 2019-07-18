import React, { Component } from 'react';
import '../styles/Footline.css'

class Footline extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { text } = this.props;
        return <div id="Footline">
            <span>
                {text}
            </span>
        </div>;
    }
}

export default Footline;