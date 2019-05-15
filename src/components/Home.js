import React, { Component } from 'react';

import CoverPage from './CoverPage';

import Titles from './Titles';
import PostForm from './PostForm';

class Home extends Component {

  render() {
    return (
      <div>
        {/* <button className="cover-button"><a href="#section1">Add Companies</a></button> */}
        <CoverPage />
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <Titles />
                </div>
                <div className="col-xs-7 form-container">
                  <PostForm />
                  <h1 id="section1"></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;