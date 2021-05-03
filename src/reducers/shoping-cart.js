import actionsTypes from '../action-types'

const allDeleteItems = (items, inx) => {
    return [
        ...items.slice(0, inx),
        ...items.slice(inx + 1)
    ]
}

const updateShopingCart = (state, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case actionsTypes.BOOK_ADD_TO_CART: {
            const bookId = action.payload
            const oldItemIndex = state.shopingCart.cartItems.findIndex(({ id }) => id === bookId)

            let cartItems
            let orderTotal

            if (oldItemIndex !== -1) {

                let oldItem = state.shopingCart.cartItems[oldItemIndex]
                const newItem = {
                    ...oldItem,
                    count: oldItem.count + 1,
                    total: oldItem.total + oldItem.price
                }
                cartItems = [
                    ...state.shopingCart.cartItems.slice(0, oldItemIndex),
                    newItem,
                    ...state.shopingCart.cartItems.slice(oldItemIndex + 1),
                ]
                orderTotal = state.shopingCart.orderTotal + oldItem.price
            } else {

                const book = state.bookList.books.find(({ id }) => id === bookId)
                const newItem = {
                    id: book.id,
                    title: book.title,
                    count: 1,
                    price: book.price,
                    total: book.price
                }
                cartItems = [
                    ...state.shopingCart.cartItems,
                    newItem
                ]
                orderTotal = state.shopingCart.orderTotal + newItem.total
            }

            return {
                cartItems,
                orderTotal
            }
        }

        case actionsTypes.ALL_BOOK_DELETE_FROM_CART: {
            const itemId = action.payload
            const itemIndex = state.shopingCart.cartItems.findIndex(({ id }) => id === itemId)

            return {
                cartItems: allDeleteItems(state.shopingCart.cartItems, itemIndex),
                orderTotal: state.shopingCart.orderTotal - state.shopingCart.cartItems[itemIndex].total
            }
        }

        case actionsTypes.BOOK_DELETE_FROM_CART: {
            const itemIndex = state.shopingCart.cartItems.findIndex(({ id }) => id === action.payload)
            const item = state.shopingCart.cartItems[itemIndex]

            let cartItems
            let orderTotal

            if (item.count > 1) {

                cartItems = [
                    ...state.shopingCart.cartItems.slice(0, itemIndex),
                    {
                        ...item,
                        count: item.count - 1,
                        total: item.total - item.price
                    },
                    ...state.shopingCart.cartItems.slice(itemIndex + 1),
                ]
                orderTotal = state.shopingCart.orderTotal - item.price
            } else {
                cartItems = allDeleteItems(state.shopingCart.cartItems, itemIndex)
                orderTotal = state.shopingCart.orderTotal - item.total
            }

            return {
                cartItems,
                orderTotal
            }
        }
    }
}

export default updateShopingCart