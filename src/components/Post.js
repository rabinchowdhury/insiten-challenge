import React, { Component } from 'react';

import { connect } from 'react-redux';

class Post extends Component {
  
  render() {
    return (
      <div className="post">
        <h3 className="post_company">Company: {this.props.post.company}</h3>
        <p className="post_status"><b>Status:</b> {this.props.post.status}</p>
        <p className="post_information"><b>Company Information:</b> {this.props.post.information}</p>
        <p className="post_contacts"><b>Company Contacts:</b> {this.props.post.contacts}</p>
        
        <div className="control-buttons">
          
          {/* Post buttons */}
          
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