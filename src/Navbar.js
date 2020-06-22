import React,{useContext} from 'react';
import { TContext } from './ThemeContext';
import { authContext } from './authContext';

const Navbar = () => {
    const { isAuthify,toggleAuth } = useContext(authContext);
    const { isLightTheme,light,dark } = useContext(TContext);
    const theme = isLightTheme?light:dark;
    return (
        <div  className='center'>                            
            <nav style={ { background:theme.bg, color: theme.syntax } }>
                <h1>Sample App</h1>
                <h2>Learning context API</h2>
                <div onClick={toggleAuth}>
                { isAuthify?'Logged In':'Logged Out' }
                </div>
                <ul>
                    <a href="/html/">Menu </a> |
                    <a href="/css/">Home</a> |
                    <a href="/js/">About</a> |
                    <a href="/python/">Jump</a>
                </ul>
            </nav>
        </div> 
        )};
    
 
export default Navbar;
