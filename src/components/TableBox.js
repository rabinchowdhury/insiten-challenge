import React, { Component } from 'react'
import { Table } from 'reactstrap';

class TableBox extends Component {
  render() {
    return (
      <div>
        <Table dark>
            <thead>
                {/* <tr>
                <th>Status</th>
                <th>Company Name</th>
                <th>Key Contacts</th>
                <th>Financial Performance</th>
                <th>Edit</th>
                <th>Delete</th>
                </tr>  */}
            </thead>
            <tbody>
            </tbody>
        </Table>
      </div>
    )
  }
}

export default TableBox;