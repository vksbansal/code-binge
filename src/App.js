import React, { Component } from 'react';
import './App.css';
import Banner from './components/Banner';
import Countdown from './components/Countdown';
import Footline from './components/Footline';
import { fetchIdeas } from './services/ideasApi';
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from 'moment'

const targetDate = moment("2019-07-24 23:59:59", "YYYY-MM-DD hh:mm:ss").toDate()
const prefix = "Time to Hackathon launch:"
const FootlineText = 'Exciting Prizes to be won for the Most Popular Idea'
const bannerBottomText = "SUBMIT YOUR IDEA BY 24TH JULY 2019"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ideas: [] }
  }

  componentDidMount() {
    fetchIdeas().then(({ data: ideas }) => {
      let allIdeas = ideas.map(idea => {
        let description = idea.description.replace(/\\n/g, "");
        idea.description = description;
        return idea;
      })
      this.setState({ ideas: allIdeas })
    })
  }

  render() {
    const { ideas } = this.state;

    return (
      <div className="App">
        <div id="top">
          <img src="logo.png" />
          <Countdown targetDate={targetDate} prefix={prefix}></Countdown>
        </div>
        <div id="bottom"> </div>
        <Banner ideas={ideas} bottomText={bannerBottomText}></Banner>
        <Footline text={FootlineText}></Footline>
      </div>
    );
  }
}


export default App;
