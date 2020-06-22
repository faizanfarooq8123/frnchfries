import React, { Component,createContext } from 'react';


export const authContext = createContext();

class AuthContextProvider extends Component {
    state = { 
        isAuthify:false,
        show:{ display:'none'},
        hide:{ display:'none'}
    }
    toggleAuth = () => {
        this.setState({ isAuthify: !this.state.isAuthify });
    }

    render() { 
        return (  
            <authContext.Provider value={{...this.state, toggleAuth:this.toggleAuth}}>
                {this.props.children}
            </authContext.Provider>
        );
    }
}
 
export default AuthContextProvider;