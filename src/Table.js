import React, { Component } from 'react'


const Thead = () => {
        return (
            <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
            </tr>
          </thead>
        )
}
const Tbody = propss => {
    return (
    <tbody>
      <tr>
        <td>Charlie</td>
        <td>Janitor</td>
      </tr>
      <tr>
        <td>Mac</td>
        <td>Bouncer</td>
      </tr>
      <tr>
        <td>Dee</td>
        <td>Aspiring actress</td>
      </tr>
      <tr>
        <td>Dennis</td>
        <td>Bartender</td>
      </tr>
    </tbody>
    )
}

class Table extends Component{
    render() {        
        console.log("S");        
        console.log(this.props.cdc);
        return (
            <table>
                <Thead></Thead>
                <Tbody thisdata = { this.props.cdc }></Tbody>
            </table>

        );
    }
}


export default Table;