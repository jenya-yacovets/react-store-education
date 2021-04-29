import React from 'react'

import './book-list-item.css'

const BookListItem = ({ book: { title, author, price, coverImage } }) => {
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover" />
            </div>
            <div className="boox-details">
                <h3>{title}</h3>
                <div>
                    <h6>Author: <b>{author}</b></h6>
                    <h6>Price: <b>{price}$</b></h6>
                </div>
                <a href="/" className="btn btn-primary">Add to cart</a>
            </div>
        </div>
    )
}

export default BookListItem