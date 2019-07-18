import React, { Component } from 'react';
import '../styles/Logo.css'

class Logo extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { url } = this.props;
        return <div className="logo">
            <img alt="logo" src={url}></img>
        </div>
    }
}

export default Logo;