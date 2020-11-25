import React from 'react';
import PropTypes from "prop-types";

import BookCard from "./BookCard";


const BookGrid = ({books, shelves, onChange}) => {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                {books.map(book => <li key={book.id}><BookCard book={book} shelves={shelves} onChange={onChange}/></li>)}
            </ol>
        </div>
    );
};

BookGrid.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default BookGrid;
