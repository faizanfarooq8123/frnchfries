import React, { createContext, useEffect ,useReducer } from 'react';
import uuid from 'uuid/dist/v1'
import { BookReducer } from './BookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer,[],() => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [
           { title:"Kaise hua",  id:1},
            { title:"Dil ka darya",  id:2},
            { title:"Psycho",  id:3},
        ];
    });
    useEffect(()=>{
        localStorage.setItem('books',JSON.stringify(books))
    },[books])
    return (
        <BookContext.Provider value={{books,dispatch}} >
            {props.children}
        </BookContext.Provider>
    );
}
 
export default BookContextProvider;