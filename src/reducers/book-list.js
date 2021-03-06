import actionsTypes from '../action-types'

const updateBookList = (state, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionsTypes.FETCH_BOOKS_REQUEST: {
            return {
                books: [],
                loading: true,
                error: null
            }
        }

        case actionsTypes.FETCH_BOOKS_SUCCESS: {
            return {
                books: action.payload,
                loading: false,
                error: null
            }
        }

        case actionsTypes.FETCH_BOOKS_FAILURE: {
            return {
                books: [],
                loading: false,
                error: action.payload
            }
        }
    }
}

export default updateBookList