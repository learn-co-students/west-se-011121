import React from 'react'
import BookCard from './BookCard'
import books from '../data/data'
import FormComponent from './FormComponent'

class BookContainer extends React.Component {

    state = {
        books: [...books],
        totalRead: 0
    }

    renderBooks = () => {
        return this.state.books.map(book => <BookCard
            key={book.isbn}
            title={book.title}
            author={book.author}
            img={book.image}
            addToTotalRead={this.addToTotal}
            />)
    }

    addToTotal = () => {
        console.log('increase total')
        this.setState({...this.state, totalRead: this.state.totalRead + 1})
    }

    handleAddBook = (book) => {
        console.log('book: ', book);
        this.setState({books: [...this.state.books, book]})
    }

    render(){
        return (
            <div>
                <h1> JavaScript Books </h1>
                <h4>Total Read: {this.state.totalRead}</h4>
                <FormComponent handleAddBook={this.handleAddBook}/>
                {this.renderBooks()}
                
            </div>
        )
    }

}

export default BookContainer