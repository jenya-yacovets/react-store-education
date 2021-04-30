import actionsTypes from "../action-types"

const booksLoaded = (newBooks) => {
    return {
        type: actionsTypes.BOOKS_LOADED,
        payload: newBooks
    }
}
const booksRequested = () => {
    return {
        type: actionsTypes.BOOKS_REQUESTED
    }
}
const booksReqError = (error) => {
    return {
        type: actionsTypes.BOOKS_REQ_ERROR,
        payload: error
    }
}

export {
    booksLoaded,
    booksRequested,
    booksReqError
}