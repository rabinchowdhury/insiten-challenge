import React, { Component } from 'react';

import CoverPage from './CoverPage';

import Titles from './Titles';
import PostForm from './PostForm';

import {
  NavLink
} from "reactstrap";


class Home extends Component {

  render() {
    return (
        <div>
          <button><NavLink href="/about">Hello</NavLink></button>
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