import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Home from './components/Home'
import List from './components/List'
import Error from './components/Error'
import { fetchTracks } from './actions/fetchTracks'
import { connect } from 'react-redux';


class App extends Component {

  
 

  // componentDidMount() {
  //   this.props.fetchTracks()
  // }
  //   search = () => {
  //     fetch('http://localhost:3001/api/v1/tracks/search?q=drake')
  //     .then(r => r.json())
  //     .then(data => console.log(data))
  //     }



  // addTrack = track => {
  //   this.setState({
  //     tracks: [...this.state.tracks, track]
  //   })
  // }

  render() {
    return (
      <Router>
        <div className="App">
              <Header appname= "flow-chart" />
              <Form />
              <Switch> 
                <Route exact path="/" component={Home} />
                <Route exact path="/tracks" component={List} />
                <Route component={Error} />

              </Switch>

        </div>
      </Router>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchTracks: () => dispatch(fetchTracks)
  }
}

export default connect(null, mapDispatchToProps)(App);
