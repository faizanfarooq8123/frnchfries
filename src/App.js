import React, { Component } from 'react';
import './App.css';
import Table from "./Table.js";

// const cData () => {

// }

class App extends Component {
  render() {
    const cData = [
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
    console.log(cData);
    
    return (   
      <div className="container">
        <Table cdc={ cData } /> 
      </div>   
             
    );
  }
}


export default App;
