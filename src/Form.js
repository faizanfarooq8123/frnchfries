import React,{ useState, useContext } from 'react';
import { BookContext } from './BookContext';

const Form = () => {
    const { dispatch } = useContext(BookContext);
    const [song,setSong]= useState('');
    const handleSubmit = (e) => {    
        e.preventDefault();
        dispatch({type:'ADD',book:{
            title:song,
        }
        })        
        setSong('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Enter Song:</label>
            <input type='text' required value={song} onChange={ (e) => { setSong(e.target.value) } }/>
            <input type='submit'/>
        </form>
    );
}
 
export default Form;