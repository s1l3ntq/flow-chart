import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Header from './components/Header'
import Form from './components/Form'
import Home from './components/Home'
import List from './components/List'
import About from './components/About'
import MyFavorites from './components/MyFavorites'
import ErrorPage from './components/Error'
import { fetchFavoriteTracks } from './actions/fetchFavoriteTracks'
import { connect } from 'react-redux';



class App extends Component {

  
 

  componentDidMount() {
    this.props.fetchFavoriteTracks()
  }




  render() {
    return (
      <Router>
        <NavBar />
        <div className="App">
              {/* <Header appname= "Flow-Chart" /> */}
              {/* <Form /> */}
              <Switch> 
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/tracks" component={List} />
                <Route exact path="/favorites" component={MyFavorites} />
                <Route component={ErrorPage} />

              </Switch>
              <Footer/>

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
