import React, { Component } from 'react';

import { connect } from 'react-redux';

class PostForm extends Component {

  handleSubmit = (e) => {
  e.preventDefault();
  const company = this.getCompany.value;
  const status = this.getStatus.value;
  const contacts = this.getContacts.value;
  const performance = this.getPerformance.value;
  const data = {
    id: new Date(),
    company,
    status,
    contacts,
    performance,
    editing: false
  }
  this.props.dispatch({
    type: 'ADD_POST',
    data
  })
  this.getCompany.value = '';
  this.getStatus.value = '';
  this.getContacts.value = '';
  this.getPerformance.value = '';

  }
  
  render() {
    return (
    <div className="post-container">
      <p className="title-container__title">Add Company Details</p>
      <br/>
      <form className="form" onSubmit={this.handleSubmit} >
      <input required type="text" ref={(input) => this.getCompany = input}
      placeholder="Enter Company Name..." /><br /><br />
      <input required type="text" ref={(input) => this.getStatus = input}
      placeholder="Enter Status..." /><br /><br />
      <input required type="text" ref={(input) => this.getContacts = input}
      placeholder="Enter Key Contacts..." /><br /><br />
      <input required type="text" ref={(input) => this.getPerformance = input}
      placeholder="Enter Financial Performance..." /><br /><br />
      <button onClick={() => { alert('View Target Companies on the View Page!') }}>Submit</button>
      </form>
    </div>
    );
  }
}

export default connect()(PostForm);