import React, { Component } from 'react';
import Clock from './Clock';
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
    )
  }
}

export default App;
