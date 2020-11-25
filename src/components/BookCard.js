import React from 'react';
import PropTypes from "prop-types";

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

BookCard.propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default BookCard;
