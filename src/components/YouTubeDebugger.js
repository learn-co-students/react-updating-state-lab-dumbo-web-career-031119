import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {
  state = {
  errors: [],
  user: null,
  settings: {
    bitrate: 8,
    video: {
      resolution: '1080p'
    }
  }
}
  changeBitrate = () => {
    this.setState({
      settings: {
       ...this.state.settings,
       bitrate: 12
     }
    })
  }

  changeRes =  () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution:"720p"
        }
      }
    })
  }
  render() {
    return(
      <div>
      <button onClick = {this.changeBitrate} className="bitrate">Change Bitrate {this.state.settings.bitrate}</button>
      <button onClick = {this.changeRes} className="resolution">Change Resolution {this.state.settings.video.resolution}</button>
      </div>
    )
  }
};
