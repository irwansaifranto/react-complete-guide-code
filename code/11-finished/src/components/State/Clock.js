import React from "react";
// import ReactDOM from "react-dom";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.text = "State and Lifecycle.";
    this.state = { date: new Date() }; // The only place where you can assign this.state is the constructor.
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    // console.log(ReactDOM.findDOMNode(this));
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    // console.log("Component Will Unmount.");
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>{this.text}</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Clock;
