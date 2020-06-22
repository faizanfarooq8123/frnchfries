import uuid from 'uuid/dist/v1'

export const BookReducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return [...state, {
                title: action.book.title,
                id:uuid()
            }]

        case 'Remove':
            return state.filter(book => book.id !== action.id)
        default:
            return state;
    }
}