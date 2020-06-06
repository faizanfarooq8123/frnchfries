import React, { Component } from 'react';
import './App.css';
import Table from './Table.js'
import { AppBar,Typography,Toolbar,Button,IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'



class App extends Component {
  render() {      
    const charArray = [
      {
        name:"Ak",
        class:"CS",
      },
      {
        name:"Jawad",
        class:"CS",
      },
      {
        name:"Farhad",
        class:"CS",
      },
      {
        name:"Faizan",
        class:"Waila.",
      },
    ]
    return (   
      <div className="container">
        <div className="">
          <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className="" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className="">
              News      |
            </Typography>
            <Typography variant="h6" className="">
              Sports      |
            </Typography>
            <Typography variant="h6" className="">
              Politics      |
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div>
      <Table isNaam = { charArray }  ></Table>
      </div>
      </div>  
    );
  }
}


export default App;
