import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { inject } from 'mobx-react';

class App extends Component {

  componentDidMount() {
    this.props.forage.videos.init()
  }

  render() {
    const { forage } = this.props
    const { videos } = forage
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={videos.get}>Fetch</button>
          <button onClick={videos.clear}>Clear</button>
          <button onClick={videos.drop}>Drop</button>
          {/* <button onClick={videos.downloadYTVideo}>Download</button> */}
          <button onClick={videos.expressDownloadYTVideo}>Download!</button>
          {/* <button onClick={videos.ytdlVideo}>Download</button> */}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <body>
            <div id="attendees"></div>
        </body>
      </div>
    );
  }
}

export default inject('forage')(App);
