import React, { useContext } from 'react';
import { TContext } from './ThemeContext';


const Tbutton = () => {
    const {toggler} = useContext(TContext);
    return (
        <button onClick={toggler}>Change style</button>
    );
}
 
export default Tbutton;