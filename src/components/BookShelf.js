import React from 'react';
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

export default BookShelf;
