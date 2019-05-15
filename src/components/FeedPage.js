import React, { Component } from 'react'

import SearchBar from './SearchBar';
import Feed from './Feed';
import  '.././Feed.css';

import HelpBtn from './HelpBtn';

export default class FeedPage extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Feed />
        <HelpBtn/ >
      </div>
    )
  }
}
