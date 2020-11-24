import React from 'react';
import BookCard from "./BookCard";


const BookGrid = () => {
    return (
        <div className="bookshelf-books">
            <ol className="books-grid">
                <li>
                    <BookCard/>
                </li>
                <li>
                    <BookCard/>
                </li>
            </ol>
        </div>
    );
};

export default BookGrid;
