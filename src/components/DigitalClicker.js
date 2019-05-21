// Code DigitalClicker Component Here
import React, { Component } from 'react';

class DigitalClicker extends React.Component {

  state = {
    timesClicked: 0
  }

  clickHandler = (event) => {
    this.setState(prevState =>({
      timesClicked: prevState.timesClicked += 1
    })), console.log(this.state.timesClicked)
}
  render() {
    return (
      <div>
      <button onClick={this.clickHandler}>{this.state.timesClicked}</button>
      </div>
    );
  }

}

export default DigitalClicker;
