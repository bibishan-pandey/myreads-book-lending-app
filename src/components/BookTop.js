import React from 'react';
import PropTypes from "prop-types";

import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";


const BookTop = ({book, shelves, onChange}) => {
    const image = book.imageLinks ? book.imageLinks.thumbnail : '';
    return (
        <div className="book-top">
            <BookCover image={image}/>
            <BookShelfChanger book={book} shelves={shelves} onChange={onChange}/>
        </div>
    );
};

BookTop.propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default BookTop;
