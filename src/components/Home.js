import React, { Component } from 'react';
import PostForm from './PostForm';
import AllPost from './AllPost';

import Titles from './Titles';

class Home extends Component {

  render() {
    return (
              <div>
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
                <AllPost />
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Home;