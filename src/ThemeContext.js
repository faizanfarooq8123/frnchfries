import React, { createContext,Component } from 'react';
export const TContext = createContext();

class ThemeContextProvider extends Component {
    state = { 
        isLightTheme: true,
        light: { syntax: '#555', ui: '#ddd', bg:'#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg:'#555' }
    }

    toggler = () => {
        this.setState({ isLightTheme: !this.state.isLightTheme  });
    }
    render() { 
        return ( 
        <TContext.Provider value = { {...this.state, toggler:this.toggler} }>
            { this.props.children }
        </TContext.Provider>
          );
    }
}
 
export default ThemeContextProvider;