import actionsTypes from "../action-types"

const booksLoaded = (newBooks) => {
    return {
        type: actionsTypes.FETCH_BOOKS_REQUEST,
        payload: newBooks
    }
}
const booksRequested = () => {
    return {
        type: actionsTypes.FETCH_BOOKS_SUCCESS
    }
}
const booksReqError = (error) => {
    return {
        type: actionsTypes.FETCH_BOOKS_FAILURE,
        payload: error
    }
}
const fetchBooks = (bookStoreService, dispatch) => async () => {
    dispatch(booksRequested())
    try {
        const data = await bookStoreService.getBooks()
        dispatch(booksLoaded(data))
    } catch (error) {
        dispatch(booksReqError(error))
    }
}
const bookAddToCart = (bookId) => {
    return {
        type: actionsTypes.BOOK_ADD_TO_CART,
        payload: bookId
    }
}

const bookDeleteFromCart = (itemId) => {
    return {
        type: actionsTypes.BOOK_DELETE_FROM_CART,
        payload: itemId
    }
}

const allBookDeleteFromCart = (itemId) => {
    return {
        type: actionsTypes.ALL_BOOK_DELETE_FROM_CART,
        payload: itemId
    }
}


export {
    booksLoaded,
    booksRequested,
    booksReqError,
    fetchBooks,
    bookAddToCart,
    bookDeleteFromCart,
    allBookDeleteFromCart
}