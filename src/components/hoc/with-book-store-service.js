import React from 'react'
import { BookStoreServiceConsumer } from '../book-store-service-context'

const withBookStoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <BookStoreServiceConsumer>
                {
                    (bookStoreService) => {
                        <Wrapped {...props} bookStoreService={bookStoreService} />
                    }
                }
            </BookStoreServiceConsumer>
        )
    }
}

export default withBookStoreService