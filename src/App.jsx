import React, { Component } from 'react';
import Clock from './Clock';
import React  from 'react';
import Clock from 'react-live-clock';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: 'Decemebr 25, 2019',
      newDeadline: ''
    }
  }

  changeDeadline() {
    console.log('state', this.state);
    this.setState({deadline: this.state.newDeadline});
  }

  render() {
    return (
  <div>
    <div className="clock-div">
      <h1 className="nyText">New York</h1>
      <div>
      <h1 className="hiText">Hawaii</h1>
        <clock timezone-offset="-10" ></clock>
      </div>
      <h1 className="tText">Tokyo</h1>
    </div>
    <div className="App">
      <div className="App-title">Countdown to <div className="Date-title">{this.state.deadline}</div></div>
      <Clock
        deadline={this.state.deadline}
      />
      <div className="input-div">
        <input
          className="input-date"
          placeholder="Enter a date (month day, year)"
          onChange={event => console.log('event', this.setState({newDeadline: event.target.value}))}
        />
        <button className="button button1" onClick={() => this.changeDeadline()}>Submit</button>
      </div>
    </div>
  </div>
    )
  }
}

export default App;
