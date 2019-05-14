import React, { Component } from 'react';
// import PostForm from './components/PostForm';
// import AllPost from './components/AllPost';

import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from './components/Home';
import Targets from './components/Targets';
import About from './components/About';

class App extends Component {

  render() {
    return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/targets" component={Targets} />
        <Route exact path="/about" component={About} />
      </div>
    </Router>
    );
  }
}

export default App;