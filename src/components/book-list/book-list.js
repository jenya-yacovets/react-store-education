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
            <div className="row">
                <div className="col-md-8 offset-md-2">
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
                </div>
            </div>
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