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

export {
    booksLoaded,
    booksRequested,
    booksReqError,
    fetchBooks
}