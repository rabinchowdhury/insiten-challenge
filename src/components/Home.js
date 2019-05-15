import React, { Component } from 'react';

import OnePage from './OnePage';

import Titles from './Titles';
import PostForm from './PostForm';

class Home extends Component {

  render() {
    return (
        <div>
          <OnePage />
          <div className="wrapper">
            <div className="main">
              <div className="container">
                <div className="row">
                  <div className="col-xs-5 title-container">
                    <Titles />
                  </div>
                  <div className="col-xs-7 form-container">
                    <PostForm />
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