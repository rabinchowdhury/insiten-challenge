import React, { Component } from 'react';

// import TableBox from './TableBox';

import AllPost from './AllPost';
import DoughnutGraph from './DoughnutGraph';

import HelpBtn from './HelpBtn';

import SearchBar from './SearchBar';

class Targets extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <DoughnutGraph /> 
        <AllPost />
        <HelpBtn />
      </div>
    );
  }
}

export default Targets;