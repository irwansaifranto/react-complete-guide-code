import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOne: true,
      isToggleTwo: true,
      isToggleThree: true,
      isToggleFour: true,
    };

    // 1. This binding is necessary to make `this` work in the callback
    this.handleClickOne = this.handleClickOne.bind(this);
  }

  handleClickOne() {
    this.setState((prevState) => ({
      isToggleOne: !prevState.isToggleOne,
    }));
  }

  /* 2. Field Syntax */
  handleClickTwo = () => {
    this.setState((prevState) => ({
      isToggleTwo: !prevState.isToggleTwo,
    }));
  };

  handleClickThree() {
    this.setState((prevState) => ({
      isToggleThree: !prevState.isToggleThree,
    }));
  }

  handleClickFour(args) {
    this.setState((prevState) => ({
      isToggleFour: !prevState.isToggleFour,
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClickOne}>
          Button 1 : {this.state.isToggleOne ? "On" : "Off"}
        </button>
        <button onClick={this.handleClickTwo}>
          Button 2 : {this.state.isToggleTwo ? "On" : "Off"}
        </button>
        {/* 3. Arrow Function */}
        <button onClick={() => this.handleClickThree()}>
          Button 3 : {this.state.isToggleThree ? "On" : "Off"}
        </button>
        {/* 4. Passing Arguments to Event Handlers */}
        <button onClick={this.handleClickFour.bind(this, 1)}>
          Button 4 : {this.state.isToggleFour ? "On" : "Off"}
        </button>
      </div>
    );
  }
}

export { Toggle };
