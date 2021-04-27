import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
// import React from 'react';

class App extends React.Component {
  state = {
    playlist: []
  }

  render() {
    return (
      <div className="App">
        
            <Header appname= "flow-chart" />
            <Form />
        
      </div>
    );
  }
}

export default App;
