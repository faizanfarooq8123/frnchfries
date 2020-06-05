import React, { Component } from 'react';
import './App.css';
import Table from './Table.js'
import Form from './Form.js'





class App extends Component {
  state = {
    cData: [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
  }

  handleSubmit = cheez => {
    this.setState({
      cData: [...this.state.cData,cheez ]
    })
  }

  removeCharacter = index => {
    const { cData }  = this.state
  
    this.setState({
      cData: cData.filter((cData, i) => {
        return i !== index
      }),
    })
  }

  render() {      
    return (   
      <div className="container">
        <Table cDat={ this.state.cData } yeWalaFunction= { this.removeCharacter } ></Table>
        <div>
          <Form handle= { this.handleSubmit }></Form>
        </div>  
      </div>   
             
    );
  }
}


export default App;
