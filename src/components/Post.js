import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Table } from 'reactstrap';

class Post extends Component {

  render() {
    return (
      <div>
      <Table className="table">
        <thead>
          <tr>
            <th>Status</th>
            <th>Company Name</th>
            <th>Key Contacts</th>
            <th>Financial Performance</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr> 
        </thead>
        <tbody>
          <tr>
            <td><p className="post_status">{this.props.post.status}</p></td>
            <td><p className="post_company">{this.props.post.company}</p></td>
            <td><p className="post_contacts">{this.props.post.contacts}</p></td>
            <td><p className="post_performance">{this.props.post.performance}</p></td>
            <td>
              <button className="edit" onClick={() => this.props.dispatch({ type: 'EDIT_POST', id: this.props.post.id })}>Edit</button>
            </td>
            <td>
              <button className="delete" onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: this.props.post.id })}>Delete</button>
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}

export default connect()(Post);