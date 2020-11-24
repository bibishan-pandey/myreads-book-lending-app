import React from 'react';
import BookTop from "./BookTop";
import BookDetail from "./BookDetail";


const BookCard = ({book, shelves, onChange}) => {
    return (
        <div className="book">
            <BookTop book={book} shelves={shelves} onChange={onChange}/>
            <BookDetail title={book.title} authors={book.authors}/>
        </div>
    );
};

export default BookCard;
