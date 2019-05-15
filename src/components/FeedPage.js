import React, { Component } from 'react'

import Feed from './Feed';

// import SearchBar from './SearchBar';

import  '.././Feed.css';

export default class FeedPage extends Component {
  render() {
    return (
      <div>
        {/* <SearchBar /> */}
        <Feed />
      </div>
    )
  }
}
