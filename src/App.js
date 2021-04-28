import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Home from './components/Home'
import List from './components/List'
import MyFavorites from './components/MyFavorites'
import Error from './components/Error'
import { fetchFavoriteTracks } from './actions/fetchFavoriteTracks'
import { connect } from 'react-redux';



class App extends Component {

  
 

  componentDidMount() {
    this.props.fetchFavoriteTracks()
  }




  render() {
    return (
      <Router>
        <div className="App">
              <Header appname= "Flow-Chart" />
              <Form />
              <Switch> 
                <Route exact path="/" component={Home} />
                <Route exact path="/tracks" component={List} />
                <Route exact path="/favorites" component={MyFavorites} />
                <Route component={Error} />

              </Switch>

        </div>
      </Router>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    fetchFavoriteTracks: () => dispatch(fetchFavoriteTracks())
  }
}

export default connect(null, mapDispatchToProps)(App);
