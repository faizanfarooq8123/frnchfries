import React, { Component } from 'react';
import Navbar from './Navbar'
import List from './List'
import ThemeContextProvider from './ThemeContext';
import  TButton  from './ToggleButton';
import AuthContextProvider from './authContext';
import Songlist from './Songlist';
import BookContextProvider from './BookContext'
import Form from './Form';


class App extends Component {
  render() {    
    
    return (   
      <div className='container App'>   
        <ThemeContextProvider>
          <AuthContextProvider>  
            <Navbar></Navbar>
            <BookContextProvider>
              <List/>
              <Form />
            </BookContextProvider>            
            {/* <TButton/>  */}
          </AuthContextProvider>
        </ThemeContextProvider>
        {/* <Songlist></Songlist> */}
     </div>
    );
  }
}


export default App;
