import React, { Component } from "react";
import axios from "axios";

class About extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("https://api.myjson.com/bins/spp3q").then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 1)
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