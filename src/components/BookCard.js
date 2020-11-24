import React from 'react';
import BookTop from "./BookTop";
import BookDetail from "./BookDetail";


const BookCard = () => {
    return (
        <div className="book">
            <BookTop/>
            <BookDetail/>
        </div>
    );
};

export default BookCard;
