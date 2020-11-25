import React from 'react';
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import * as BooksAPI from '../BooksAPI'

import BookCard from "./BookCard";


class SearchBar extends React.Component {

    state = {
        query: '',
        searchedBooks: [],
    }

    checkAddedBooks = (searchedBooks=[], stateBooks) => {
        const stateBookIDs = stateBooks.map(book => book.id);
        const addedBook = [];
        const notAddedBooks = [];

        (!searchedBooks.error && searchedBooks.length !== 0) && searchedBooks.map(searchedBook => {
            if (!stateBookIDs.includes(searchedBook.id)) {
                searchedBook.shelf = 'none';
                notAddedBooks.push(searchedBook);
            } else {
                stateBooks.length !== 0 && stateBooks.map(stateBook => {
                    if (stateBook.id === searchedBook.id) {
                        searchedBook.shelf = stateBook.shelf;
                        addedBook.push(searchedBook);
                    }
                    return stateBook;
                });
            }
            return searchedBook;
        });
        !searchedBooks.error ? this.setState({searchedBooks: [...addedBook, ...notAddedBooks]})
            : this.setState({searchedBooks});
    };

    handleUpdateQuery = (query) => {
        if (this.state.query !== '' && query !== '') {
            this.setState({ query: query });
            BooksAPI.search(query).then(searchedBooks => {
                return this.checkAddedBooks(searchedBooks, this.props.books);
            });
        } else {
            BooksAPI.search(query).then(() => this.setState({ searchedBooks: [] }));
            this.setState({query: query});
        }
    };

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={'/'} className={"close-search"}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text"
                               name={"query"}
                               value={this.state.query}
                               onChange={e => this.handleUpdateQuery(e.target.value)}
                               placeholder="Search by title or author"/>

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.state.searchedBooks.error ? <div>No results found</div>
                            : this.state.searchedBooks.map(book =>
                                <li key={book.id}>
                                    <BookCard book={book} shelves={this.props.shelves} onChange={this.props.onChange}/>
                                </li>)}
                    </ol>
                </div>
            </div>
        );
    }
}

SearchBar.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default SearchBar;
