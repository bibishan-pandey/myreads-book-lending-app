import React from 'react';
import {Link} from "react-router-dom";

import * as BooksAPI from '../BooksAPI'

import BookCard from "./BookCard";


class SearchBar extends React.Component {

    state = {
        query: '',
        books: [],
    }

    handleUpdateQuery(query) {
        if (this.state.query !== '' && query !== '') {
            BooksAPI.search(query).then(books => books ? this.setState({ books }) : []);
            this.setState({ query: query });
        } else {
            BooksAPI.search(query).then(() => this.setState({ books: [] }));
            this.setState({query: query});
        }
    }

    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to={'/'}><button className="close-search">Close</button></Link>
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
                        {this.state.books.error ? <div>No results found</div>
                            : this.state.books.map(book =>
                                <li key={book.id}>
                                    <BookCard book={book} shelves={this.props.shelves} onChange={this.props.onChange}/>
                                </li>)}
                    </ol>
                </div>
            </div>
        );
    }
}

export default SearchBar;
