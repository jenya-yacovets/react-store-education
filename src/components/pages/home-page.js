import React from 'react'

import BookList from '../book-list'
import ShopingCartTable from '../shopping-cart-table'

const HomePage = () => {
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <BookList />
                <ShopingCartTable />
            </div>
        </div>
    )
}

export default HomePage