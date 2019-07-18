import React, { Component } from 'react';
import '../styles/Banner.css'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return <div id="banner">
            <div className="banner-container">
                <div className="top"></div>
                <div className="bottom"> </div>
            </div>
        </div>
    }
}

export default Banner;