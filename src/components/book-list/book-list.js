import React, { Component } from 'react'
import { connect } from 'react-redux'

import './book-list.css'
import BookListItem from '../book-list-item'
import { withBookStoreService } from '../hoc'
import { booksLoaded } from '../../actions'
import { compose } from '../../utils'

class BookList extends Component {

    componentDidMount() {
        const { bookStoreService, booksLoaded } = this.props
        const data = bookStoreService.getBooks()
        booksLoaded(data)
    }

    render() {
        const { books } = this.props

        return (
            <ul>
                {
                    books.map(book => {
                        return (
                            <li key={book.id}><BookListItem book={book} /></li>
                        )
                    })
                }
            </ul>
        )
    }
}

const mapStateProps = ({ books }) => {
    return { books }
}

export default compose(
    withBookStoreService(),
    connect(mapStateProps, { booksLoaded })
)(BookList)