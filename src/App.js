import React from 'react';
import {
    Switch,
    Redirect,
    Route,
} from "react-router-dom";

import * as BooksAPI from './BooksAPI';

import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";

import './App.css'


class BooksApp extends React.Component {
    state = {
        books: [],
        shelves: [
            {
                title: 'Currently Reading',
                id: 'currentlyReading',
            },
            {
                title: 'Want To Read',
                id: 'wantToRead',
            },
            {
                title: 'Read',
                id: 'read',
            },
        ],
    }

    async componentDidMount() {
        const books = await BooksAPI.getAll();
        this.setState({books});
    }

    changeShelf = (e, book) => {
        const books = [...this.state.books];
        const sameShelfBooks = books.filter(b => b.id !== book.id);
        const changedShelfBook = books.filter(b => b.id === book.id)[0] || book;
        changedShelfBook.shelf = e.currentTarget.value;
        const updatedBooks = [...sameShelfBooks, changedShelfBook];
        BooksAPI.update(book, e.currentTarget.value).then(() => this.setState({books: updatedBooks}))
    };

    render() {
        const {books, shelves} = this.state;
        return (
            <div className="app">
                <Switch>
                    <Route path="/" exact render={
                        (props) => <Dashboard books={books} shelves={shelves} onChange={this.changeShelf} {...props} />
                    }/>
                    <Route path="/search" render={
                        (props) => <SearchBar books={books} shelves={shelves} onChange={this.changeShelf} {...props} />
                    }/>
                    <Redirect to={'/'}/>
                </Switch>
            </div>
        )
    }
}

export default BooksApp
