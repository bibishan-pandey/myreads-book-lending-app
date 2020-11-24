import React from 'react'
import * as BooksAPI from './BooksAPI'

import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import BookList from "./components/BookList";

import './App.css'


class BooksApp extends React.Component {
    state = {
        /**
         * TODO: Instead of using this state variable to keep track of which page
         * we're on, use the URL in the browser's address bar. This will ensure that
         * users can use the browser's back and forward buttons to navigate between
         * pages, as well as provide a good URL they can bookmark and share.
         */
        showSearchPage: false,
        books: [],
        shelves: [],
    }

    shelves = [];

    componentDidMount() {
        BooksAPI.getAll().then(books => {
            books.map(book => (!this.shelves.includes(book.shelf.trim())) && this.shelves.push(book.shelf));
            this.setState({books, shelves: this.shelves});
        });
    }

    changeShelf = (e, book) => {
        const books = [...this.state.books];
        const sameShelfBooks = books.filter(b => b.id !== book.id);
        const changedShelfBook = books.filter(b => b.id === book.id)[0];
        changedShelfBook.shelf = e.currentTarget.value;
        const updatedBooks = [...sameShelfBooks, changedShelfBook];
        BooksAPI.update(book, e.currentTarget.value).then(() => this.setState({books: updatedBooks}))
    };

    render() {
        const {books, shelves} = this.state;
        return (
            <div className="app">
                {this.state.showSearchPage ? (
                    <SearchBar/>
                ) : (
                    <div className="list-books">
                        <Header/>
                        <BookList books={books} shelves={shelves} onChange={this.changeShelf}/>
                        <div className="open-search">
                            <button onClick={() => this.setState({showSearchPage: true})}>Add a book</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default BooksApp
