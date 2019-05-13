import React, { Component } from 'react';

import { connect } from 'react-redux';

class PostForm extends Component {


  handleSubmit = (e) => {
  e.preventDefault();
  const company = this.getCompany.value;
  const status = this.getStatus.value;
  const information = this.getInformation.value;
  const contacts = this.getContacts.value;
  const data = {
    id: new Date(),
    company,
    status,
    information,
    contacts,
    editing: false
  }
  this.props.dispatch({
    type: 'ADD_POST',
    data
  })
  this.getCompany.value = '';
  this.getStatus.value = '';
  this.getInformation.value = '';
  this.getContacts.value = '';

  }
  
  render() {
    return (
    <div className="post-container">
      <h3 className="title-container__title">Add Company Details</h3>
      <br/>
      <form className="form" onSubmit={this.handleSubmit} >
      <input required type="text" ref={(input) => this.getCompany = input}
      placeholder="Enter Company Name..." /><br /><br />
      <input required type="text" ref={(input) => this.getStatus = input}
      placeholder="Enter Status..." /><br /><br />
      <textarea required rows="5" ref={(input) => this.getInformation = input}
      cols="28" placeholder="Enter Company Information..." /><br /><br />
      <input required type="text" ref={(input) => this.getContacts = input}
      placeholder="Enter Key Contacts..." /><br /><br />
      <button onClick={() => { alert('View targets on the view page!') }}>Submit</button>
      </form>
    </div>
    );
  }
}

export default connect()(PostForm);