import React, { Component } from 'react';
import '../styles/Banner.css'

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { bottomText, ideas } = this.props;

        return <div id="banner">
            <div className="banner-container">
                <div className="top">
                    {/*ideas.map(idea => {
                        return <div>
                            <span className="span-text">{idea.creator}</span>
                            <br />
                            <span className="span-text">{idea.title}</span>
                            <br />
                            <span className="span-text">{idea.description}</span>
                        </div>
                    })*/}
                </div>
                <div className="bottom">
                    {bottomText}
                </div>
            </div>
        </div>
    }
}

export default Banner;