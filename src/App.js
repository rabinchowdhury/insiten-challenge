import React, { Component } from 'react';
// import PostForm from './components/PostForm';
// import AllPost from './components/AllPost';

import Header from "./components/Header";

import Home from './components/Home';
import About from './components/About';

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {

  render() {
    return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        {/* <PostForm /> */}
        {/* <AllPost /> */}
      </div>
    </Router>
    );
  }
}

export default App;