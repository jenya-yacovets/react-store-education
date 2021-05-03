import actionsTypes from "../action-types"
import updateBookList from './book-list'
import updateShopingCart from './shoping-cart'

const initialState = {
    bookList: {
        books: [],
        loading: true,
        error: null,
    },
    shopingCart: {
        cartItems: [],
        orderTotal: 0
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionsTypes.FETCH_BOOKS_REQUEST:
        case actionsTypes.FETCH_BOOKS_SUCCESS:
        case actionsTypes.FETCH_BOOKS_FAILURE:
            return {
                ...state,
                bookList: updateBookList(state, action)
            }

        case actionsTypes.BOOK_ADD_TO_CART:
        case actionsTypes.ALL_BOOK_DELETE_FROM_CART:
        case actionsTypes.BOOK_DELETE_FROM_CART:
            return {
                ...state,
                shopingCart: updateShopingCart(state, action)
            }
        default: {
            return state
        }

    }
}

export default reducer