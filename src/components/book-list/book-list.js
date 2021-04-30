import React, { Component } from 'react'
import { connect } from 'react-redux'

import './book-list.css'
import BookListItem from '../book-list-item'
import { withBookStoreService } from '../hoc'
import { fetchBooks } from '../../actions'
import { compose } from '../../utils'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

class BookList extends Component {

    componentDidMount() {
        const { fetchBooks } = this.props
        fetchBooks()
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBooks: fetchBooks(ownProps.bookStoreService, dispatch)
    }
}

export default compose(
    withBookStoreService(),
    connect(mapStateProps, mapDispatchToProps)
)(BookList)