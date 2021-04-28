import React, { Fragment } from "react"
import './book-list-item.css'

const BookListItem = ({book}) => {
    return(
        <Fragment>
            <span>{book.title}</span>
            <span>{book.author}</span>
        </Fragment>
    )
}

export default BookListItem