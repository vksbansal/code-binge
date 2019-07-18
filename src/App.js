import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Countdown from './components/Countdown';
import Footline from './components/Footline';

const targetDate = new Date('2019-07-24 23:59:59');
const prefix = "Idea Box Closes In:"
const FootlineText = 'Exciting Prizes to be won for the Most Popular Idea'

function App() {
  return (
    <div className="App">
      <div id="top"></div>
      <div id="bottom"> </div>
      <Banner></Banner>
      <Countdown targetDate={targetDate} prefix={prefix}></Countdown>
      <Footline text={FootlineText}></Footline>
    </div>
  );
}

export default App;
