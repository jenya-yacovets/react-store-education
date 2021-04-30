import React, { Component } from 'react'
import { connect } from 'react-redux'

import './book-list.css'
import BookListItem from '../book-list-item'
import { withBookStoreService } from '../hoc'
import { booksLoaded, booksRequested, booksReqError } from '../../actions'
import { compose } from '../../utils'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

class BookList extends Component {

    async componentDidMount() {
        const { bookStoreService, booksLoaded, booksReqError } = this.props
        try {
            const data = await bookStoreService.getBooks()
            booksLoaded(data)
        } catch (error) {
            booksReqError(error)
        }
    }

    componentWillUnmount() {
        const { booksRequested } = this.props
        booksRequested()
    }

    render() {
        const { books, loading, error } = this.props

        if (error) {
            return <ErrorIndicator />
        }
        if (loading) {
            return <Spinner />
        }

        return (
            <div className="book-list">
                <ul>
                    {
                        books.map(book => {
                            return (
                                <li key={book.id}><BookListItem book={book} /></li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

const mapStateProps = ({ books, loading, error }) => {
    return { books, loading, error }
}

export default compose(
    withBookStoreService(),
    connect(mapStateProps, { booksLoaded, booksRequested, booksReqError })
)(BookList)