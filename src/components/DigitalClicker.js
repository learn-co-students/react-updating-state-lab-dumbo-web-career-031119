// Code DigitalClicker Component Here
import React, {Component} from 'react';

export default class DigitalClicker extends Component {
	constructor(props){
		super(props)
		this.state = {
			timesClicked: 0
		}
	}

	updateClicked = () => {
		this.setState(prevState => ({
			timesClicked: prevState.timesClicked+1
		}))
	}

	render(){
		return(
			<button onClick={this.updateClicked}>{this.state.timesClicked}</button>
		)
	}
}