import React from 'react'

import './shoping-cart-table.css'

const ShopingCartTable = () => {
    return (
        <div className="shoping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <th>Name book</th>
                        <th>2</th>
                        <th>35$</th>
                        <th>70$</th>
                        <th>
                            <button className="btn btn-sm btn-success"><i className="bi bi-plus-circle"></i></button>
                            <button className="btn btn-sm btn-warning"><i className="bi bi-dash-circle"></i></button>
                            <button className="btn btn-sm btn-danger"><i className="bi bi-trash"></i></button>
                        </th>
                    </tr>
                </tbody>
            </table>
            <span className="total">Total: <b>70$</b></span>
        </div>
    )
}

export default ShopingCartTable