import React from 'react'
import { connect } from 'react-redux'
import { allBookDeleteFromCart, bookAddToCart, bookDeleteFromCart } from '../../actions'

import './shoping-cart-table.css'

const ShopingCartTable = ({ items, totalPrice, onInc, onDec, onDel }) => {
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
                    {
                        items.map(({ id, title, count, price, total }, idx) => {
                            return (
                                <tr key={id}>
                                    <th>{idx + 1}</th>
                                    <th>{title}</th>
                                    <th>{count}</th>
                                    <th>{price}$</th>
                                    <th>{total}$</th>
                                    <th>
                                        <button className="btn btn-sm btn-success" onClick={() => onInc(id)}><i className="bi bi-plus-circle"></i></button>
                                        <button className="btn btn-sm btn-warning" onClick={() => onDec(id)}><i className="bi bi-dash-circle"></i></button>
                                        <button className="btn btn-sm btn-danger" onClick={() => onDel(id)}><i className="bi bi-trash"></i></button>
                                    </th>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <span className="total">Total: <b>{totalPrice}$</b></span>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.cartItems,
        totalPrice: state.orderTotal
    }
}
const mapDispatchToProps = {
    onInc: bookAddToCart,
    onDec: bookDeleteFromCart,
    onDel: allBookDeleteFromCart

}

export default connect(mapStateToProps, mapDispatchToProps)(ShopingCartTable)