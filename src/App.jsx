import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <div className="App-title">Countdown to Decemebr 25, 2018</div>
      <div>
        <div className="Clock-days">14 Days</div>
        <div className="Clock-hours">30 hours</div>
        <div className="Clock-miniutes">15 miniutes</div>
        <div className="Clock-seconds">20 seconds</div>
      </div>
      <div>
        <input placeholder="new date"/>
        <button>Submit</button>
      </div>
    </div>
    )
  }
}

export default App;