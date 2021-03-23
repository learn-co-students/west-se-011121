import React from 'react'
import Book from '../component/Book'

const BookContainer = (props) => {
  return (
    <>
      {props.books.map(book => <Book book={book} key={book.id} captureBook={props.captureBook} />)}
    </>
  )
}

export default BookContainer