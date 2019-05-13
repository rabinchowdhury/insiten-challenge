import React, { Component } from 'react';

import { connect } from 'react-redux';

class Post extends Component {
  
  render() {
    return (
    <div className="post">
      <h2 className="post_company">Company: {this.props.post.company}</h2>
      <p className="post_status">Status: {this.props.post.status}</p>
      <p className="post_information">Company Information: {this.props.post.information}</p>
      <p className="post_contacts">Company Contacts: {this.props.post.contacts}</p>
      <div className="control-buttons">
      <button className="edit"
      onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })
      }
      >Edit</button>
      <button className="delete"
      onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}
      >Delete</button>
      </div>
      </div>
    );
  }
}

export default connect()(Post);