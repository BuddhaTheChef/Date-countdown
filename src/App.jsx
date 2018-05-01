import React, { Component } from 'react';
import Clockk from './Clockk';
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
      <div>
        <h1 className="nyText">New York</h1>
        <Clock className="clock-ny" format={'h:mm:ss a'} ticking={true} timezone={'America/New_York'} />
      </div>
      <div>
        <h1 className="hiText">Hawaii</h1>
        <Clock className="clock-hi" format={'h:mm:ss a'} ticking={true} timezone={'Pacific/Honolulu'} />
      </div>
      <div>
        <h1 className="tText">Seoul</h1>
        <Clock className="clock-kr" format={'h:mm:ss a'} ticking={true} timezone={'Asia/Seoul'} />
      </div>
    </div>
    <div className="App">
      <div className="App-title">Countdown to <div className="Date-title">{this.state.deadline}</div></div>
      <Clockk
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
