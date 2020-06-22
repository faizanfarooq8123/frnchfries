import React, { useContext } from 'react';
import { TContext } from './ThemeContext';
import { BookContext } from './BookContext';


const List = () => {
    const { isLightTheme,light,dark } = useContext(TContext);
    const { books } =useContext(BookContext);
    const theme = isLightTheme?light:dark;
    const {dispatch} = useContext(BookContext);
    return ( 
    <div style={{ background:theme.bg, color:theme.syntax }} className='book-list'>
        <ul> 
            { books.map((book)=>{
                return(
                    <li className='indibook' key={book.id} onClick={ () => dispatch({type:'Remove', id:book.id})}>
                        {book.title}
                    </li> 
                )
            })
            }
        </ul>      
    </div> );
}
 
export default List;

