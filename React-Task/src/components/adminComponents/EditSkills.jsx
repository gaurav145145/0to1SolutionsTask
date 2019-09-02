import React from "react";
import '../Editskills.css';
export default class EditSkills extends React.Component {
  constructor(props) {
     super(props)
     this.state = {
        Transactions: [
           { Transaction_id: 1, name: 'Kanishk', age: 21, email: 'Kanishk@email.com' },
           { Transaction_id: 2, name: 'Shubham', age: 19, email: 'Shubham@email.com' },
           { Transaction_id: 3, name: 'Deepak', age: 16, email: 'Deepak@email.com' },
           { Transaction_id: 4, name: 'Abhishek', age: 25, email: 'Abhishek@email.com' }
        ]
     }
  }

  renderTableHeader() {
     let header = Object.keys(this.state.Transactions[0])
     return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>
     })
  }

  renderTableData() {
     return this.state.Transactions.map((Transaction, index) => {
        const { Transaction_id, name, age, email } = Transaction
        return (
           <tr key={Transaction_id}>
              <td>{Transaction_id}</td>
              <td>{name}</td>
              <td>{age}</td>
              <td>{email}</td>
           </tr>
        )
     })
  }

  render() {
     return (
        <div>
           <h1 id='title'>Transactions Data</h1>
           <table id='Transactions'>
              <tbody>
                 <tr>{this.renderTableHeader()}</tr>
                 {this.renderTableData()}
              </tbody>
           </table>
        </div>
     )
  }
}