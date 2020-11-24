import React from 'react';
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

export default BookGrid;
