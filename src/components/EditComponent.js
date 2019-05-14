import React, { Component } from 'react';

import { connect } from 'react-redux';

class EditComponent extends Component {
  handleEdit = (e) => {
    e.preventDefault();
    const newCompany = this.getCompany.value;
    const newStatus = this.getStatus.value;
    const newContacts = this.getContacts.value;
    const newPerformance = this.getPerformance.value;
    const data = {
      newCompany,
      newStatus,
      newContacts,
      newPerformance
    }
  this.props.dispatch({ type: 'UPDATE', id: this.props.post.id, data: data })
  }
  
  render() {
    return (
      <div key={this.props.post.id} className="post">
        <form className="form" onSubmit={this.handleEdit}>
          <input required type="text" ref={(input) => this.getCompany = input}
          defaultValue={this.props.post.company} placeholder="Enter Company Name..." /><br /><br />
          <input required type="text" ref={(input) => this.getStatus = input}
          defaultValue={this.props.post.status} placeholder="Enter Status..." /><br /><br />
          <input required type="text" ref={(input) => this.getContacts = input}
          defaultValue={this.props.post.contacts} placeholder="Enter Key Contacts..." /><br /><br />
          <input required type="text" ref={(input) => this.getPerformance = input}
          defaultValue={this.props.post.performance} placeholder="Enter Financial Performance..." /><br /><br />
          <button>Update</button>
        </form>
      </div>
    );
  }
}

export default connect()(EditComponent);