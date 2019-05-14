import React, { Component } from 'react';

import SearchBar from './SearchBar';

import TableBox from './TableBox';
import AllPost from './AllPost';

import DoughnutGraph from './DoughnutGraph';

class Targets extends Component {

  render() {
    return (
      <div>
        <SearchBar />
        <DoughnutGraph /> 
        <TableBox />
        <AllPost />
      </div>
    );
  }
}

export default Targets;