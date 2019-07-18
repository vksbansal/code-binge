import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Countdown from './components/Countdown';

const targetDate = new Date('2019-07-24 23:59:59');
const prefix = "Idea Box Closes In:"

function App() {
  return (
    <div className="App">
      <div id="top"></div>
      <div id="bottom"> </div>
      <Banner></Banner>
      <Countdown targetDate={targetDate} prefix={prefix}></Countdown>
    </div>
  );
}

export default App;
