import React, { Component } from 'react';
import '../styles/Banner.css'
import Carousel from 'react-bootstrap/Carousel';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { bottomText, ideas } = this.props;

        return <div id="banner">
            <div className="top">
                <Carousel controls={false} indicators={false} pauseOnHover={true} slide={true} interval={20000}>
                    {
                        ideas.map((idea,i) => {
                            return <Carousel.Item key={i}>
                                <div className="title">{idea.title}</div>
                                <div className="desc">{idea.description.replace('\n', '')}</div>
                                <div className="creator">{idea.creator}</div>
                            </Carousel.Item>
                        })
                    }
                </Carousel>
            </div>
            <div className="bottom">
                <div>{bottomText}</div>
            </div>
        </div>
    }
}

export default Banner;