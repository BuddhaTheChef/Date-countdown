import React, { Component } from 'react';
import './App.css';

class Clockk extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      miniutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000)%60);
    const miniutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({days, hours, miniutes, seconds});
  }

  render() {
    return (
    <div>
      <div className="Clock-days"><div className="num-days">{this.leading0(this.state.days)}</div> days</div>
      <div className="Clock-hours"><div className="num-hours">{this.leading0(this.state.hours)}</div> hours</div>
      <div className="Clock-miniutes"><div className="num-miniutes">{this.leading0(this.state.miniutes)}</div> miniutes</div>
      <div className="Clock-seconds"><div className="num-seconds">{this.leading0(this.state.seconds)}</div> seconds</div>
    </div>
    )
  }
}

export default Clockk;
