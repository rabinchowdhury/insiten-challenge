import React, { Component } from 'react';
import PostForm from './PostForm';
// import AllPost from './AllPost';

class Home extends Component {

  render() {
    return (
    <div>
      <PostForm />
      {/* <AllPost /> */}
    </div>
    );
  }
}

export default Home;