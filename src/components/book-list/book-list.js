import React, { Component } from 'react'
import { connect } from 'react-redux'

import './book-list.css'
import BookListItem from '../book-list-item'
import { withBookStoreService } from '../hoc'
import { bookAddToCart, fetchBooks } from '../../actions'
import { compose } from '../../utils'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

const BookList = ({ books, onAddToCart, onInc }) => {
    return (
        <div className="book-list">
            <ul>
                {
                    books.map(book => {
                        return (
                            <li key={book.id}><BookListItem book={book} onAddToCart={() => onAddToCart(book.id)} /></li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

class BookListContainer extends Component {

    componentDidMount() {
        const { fetchBooks } = this.props
        fetchBooks()
    }

    render() {
        const { books, loading, error, onAddToCart } = this.props

        if (error) {
            return <ErrorIndicator />
        }
        if (loading) {
            return <Spinner />
        }

        return <BookList books={books} onAddToCart={onAddToCart} />
    }
}

const mapStateToProps = ({ books, loading, error }) => {
    return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: fetchBooks(ownProps.bookStoreService, dispatch),
        onAddToCart: (id) => dispatch(bookAddToCart(id)),
    }
}

export default compose(
    withBookStoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)