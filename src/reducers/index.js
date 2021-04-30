import actionsTypes from "../action-types"

const initialState = {
    books: [],
    loading: true,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionsTypes.BOOKS_LOADED:
            return {
                books: action.payload,
                loading: false,
                error: null
            }

        case actionsTypes.BOOKS_REQUESTED:
            return {
                books: [],
                loading: true,
                error: null
            }

        case actionsTypes.BOOKS_REQ_ERROR:
                return {
                    books: [],
                    loading: false,
                    error: action.payload
                }
                
        default:
            return state
    }
}

export default reducer