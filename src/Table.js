import React, { Component } from 'react'
import { Button,TextField } from '@material-ui/core'


const Thead = () =>{
    return(
        <thead>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                </tr>                    
        </thead>
    )
}
const Tbody = props => {
    console.log("From Tbody");
    console.log(props.yeLou);
    const rows = props.yeLou.map((row, index) => {
        return (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.class}</td>
            <Button variant='contained' color='primary' >Submit</Button>
            <TextField variant='outlined' label="Data"></TextField>
          </tr>
        )
      })
    
    return(
    <tbody>{rows}</tbody>
    )
}


class Table extends Component{
    render(){
        console.log("From Table");        
        console.log(this.props.isNaam);

        return(
            <table>
                <Thead></Thead>
                <Tbody yeLou = { this.props.isNaam } ></Tbody>
            </table>
        );
    }
}

export default Table;