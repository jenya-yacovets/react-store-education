import actionsTypes from "../action-types"

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
}

const allDeleteItems = (items, inx) => {
    return [
        ...items.slice(0, inx),
        ...items.slice(inx + 1)
    ]
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case actionsTypes.FETCH_BOOKS_REQUEST: {
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            }
        }

        case actionsTypes.FETCH_BOOKS_SUCCESS: {
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            }
        }

        case actionsTypes.FETCH_BOOKS_FAILURE: {
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            }
        }

        case actionsTypes.BOOK_ADD_TO_CART: {
            const bookId = action.payload
            const oldItemIndex = state.cartItems.findIndex(({ id }) => id === bookId)

            let cartItems
            let orderTotal

            if (oldItemIndex !== -1) {

                let oldItem = state.cartItems[oldItemIndex]
                const newItem = {
                    ...oldItem,
                    count: oldItem.count + 1,
                    total: oldItem.total + oldItem.price
                }
                cartItems = [
                    ...state.cartItems.slice(0, oldItemIndex),
                    newItem,
                    ...state.cartItems.slice(oldItemIndex + 1),
                ]
                orderTotal = state.orderTotal + oldItem.price
            } else {

                const book = state.books.find(({ id }) => id === bookId)
                const newItem = {
                    id: book.id,
                    title: book.title,
                    count: 1,
                    price: book.price,
                    total: book.price
                }
                cartItems = [
                    ...state.cartItems,
                    newItem
                ]
                orderTotal = state.orderTotal + newItem.total
            }

            return {
                ...state,
                cartItems,
                orderTotal
            }
        }

        case actionsTypes.ALL_BOOK_DELETE_FROM_CART: {
            const itemId = action.payload
            const itemIndex = state.cartItems.findIndex(({ id }) => id === itemId)

            return {
                ...state,
                cartItems: allDeleteItems(state.cartItems, itemIndex),
                orderTotal: state.orderTotal - state.cartItems[itemIndex].total
            }
        }

        case actionsTypes.BOOK_DELETE_FROM_CART: {
            const itemIndex = state.cartItems.findIndex(({ id }) => id === action.payload)
            const item = state.cartItems[itemIndex]

            let cartItems
            let orderTotal

            if (item.count > 1) {

                cartItems = [
                    ...state.cartItems.slice(0, itemIndex),
                    {
                        ...item,
                        count: item.count - 1,
                        total: item.total - item.price
                    },
                    ...state.cartItems.slice(itemIndex + 1),
                ]
                orderTotal = state.orderTotal - item.price
            } else {
                cartItems = allDeleteItems(state.cartItems, itemIndex)
                orderTotal = state.orderTotal - item.total
            }

            return {
                ...state,
                cartItems,
                orderTotal
            }
        }

        default: {
            return state
        }

    }
}

export default reducer