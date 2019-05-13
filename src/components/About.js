import React, { Component } from "react";

// Promise based HTTP client for the browser and node.js
import axios from "axios";

class About extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://api.myjson.com/bins/ae0q2").then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 2)
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.title}</span>
              <p>{post.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div>No posts yet</div>
    );
    return (
      <div>
        {postList}
      </div>
    );
  }
}

export default About;