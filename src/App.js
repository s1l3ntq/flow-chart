import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
// import React from 'react';

class App extends React.Component {
  state = {
    tracks: [],
    playlist: [],
  }

  addTrack = track => {
    this.setState({
      tracks: [...this.state.tracks, track]
    })
  }

  render() {
    console.log(this.state.tracks)
    return (
      <div className="App">
        
            <Header appname= "flow-chart" />
            <Form addTrack={this.addTrack} />
        
      </div>
    );
  }
}

export default App;
