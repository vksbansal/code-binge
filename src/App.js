import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Countdown from './components/Countdown';
import Footline from './components/Footline';
import Logo from './components/Logo';
import { fetchIdeas } from './services/ideasApi';

const targetDate = new Date('2019-07-24 23:59:59');
const prefix = "Idea Box Closes In:"
const FootlineText = 'Exciting Prizes to be won for the Most Popular Idea'
const logoSrc = window.location.href + "/logo.jpg"
const bannerBottomText = "SUBMIT YOUR IDEA BY 24TH JULY 2019"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ideas: [] }
  }

  componentDidMount() {
    fetchIdeas().then(({ data: ideas }) => {
      this.setState({ ideas })
    })
  }

  render() {
    const { ideas } = this.state;

    return (
      <div className="App">
        <Logo url={logoSrc}></Logo>
        <div id="top"></div>
        <div id="bottom"> </div>
        <Banner ideas={ideas} bottomText={bannerBottomText}></Banner>
        <Countdown targetDate={targetDate} prefix={prefix}></Countdown>
        <Footline text={FootlineText}></Footline>
      </div>
    );
  }
}


export default App;
