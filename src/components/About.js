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
      <div className="post">Well this is awkward... No posts yet...</div>
    );
    return (
      <div>
        <div className="profile">
          <p>This was made using the following technologies: HTML, CSS, SASS, Bootstrap, JavaScript, React (Axios, React Router, Recharts) and Redux. You can find the code repository for this project on my <a href="https://github.com/rabinchowdhury/insiten-challenge">GitHub</a> page. I'm constantly trying to improve as a front-end developer, and so any feedback will be appreciated. I'm working to learn about back-end technologies like Node.JS (Express.JS) and MongoDB so that I can incorporate them into my projects. Wow, if you made it this far, you're awesome. I love web technologies. My love for web technologies started when I was applying some sick styling to my Myspace page. I'm from a generation that was raised by the internet (hello, 2007 Runescape). This is really a labor of love. <b>Thank you, Insiten Team, for giving me the opportunity to show off my sick (maybe not) skills. </b> I'll leave you with my favorite quote.</p>
          <p>"The credit belongs to the man who spends himself in a worthy cause;  who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly.” - Theodore Roosevelt</p>
        </div>
        {postList}
      </div>
    );
  }
}

export default About;
