import React, { Component } from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from './components/Home';
import Targets from './components/Targets';
import FeedPage from './components/FeedPage';
import About from './components/About';

class App extends Component {

  render() {
    return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/targets" component={Targets} />
        <Route exact path="/feed-page" component={FeedPage} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
    );
  }
}

export default App;