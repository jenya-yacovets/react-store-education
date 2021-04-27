import actionsTypes from "../action-types"

const booksLoaded = (newBooks) => {
    return {
        type: actionsTypes.BOOKS_LOADED,
        payload: newBooks
    }
}

export {
    booksLoaded
}