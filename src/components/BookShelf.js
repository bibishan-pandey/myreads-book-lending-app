import React from 'react';
import PropTypes from 'prop-types';

import BookGrid from "./BookGrid";
import BookShelfTitle from "./BookShelfTitle";


const BookShelf = ({title, books, shelves, onChange}) => {
    return (
        <div className="bookshelf">
            <BookShelfTitle title={title}/>
            <BookGrid books={books} shelves={shelves} onChange={onChange}/>
        </div>
    );
};

BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default BookShelf;
