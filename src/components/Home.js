import React, { Component } from 'react';

import CoverPage from './CoverPage';
import PostForm from './PostForm';

import HelpBtn from './HelpBtn';

class Home extends Component {

  render() {
    return (
      <div>
        <CoverPage  />
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-xs-5 title-container">
                  <div>
                    <h3 className="title-container__title"><u>Morning, </u> <u>Bruce</u></h3>
                    <p className="title-container__subtitle">Track and analyze potential target companies...</p>
                  </div>
                </div>
                <div className="col-xs-7 form-container">
                  {/* eslint-disable-next-line */}
                  <h1 id="form"></h1>
                  <PostForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <HelpBtn />
      </div>
    );
  }
}

export default Home;