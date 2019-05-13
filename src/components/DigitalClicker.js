// Code DigitalClicker Component Here
import React, { Component } from 'react'

export default class DigitalClicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }

  increment = () => {
    let newCount = this.state.timesClicked;
    newCount++;
    this.setState({
      timesClicked: newCount
    })
  }

  render() {
    return (
      <button label={this.state.timesClicked} onClick={this.increment}>{this.state.timesClicked}</button>
    )
  }

}
