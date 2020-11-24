import React from 'react';
import BookGrid from "./BookGrid";
import BookShelfTitle from "./BookShelfTitle";


const BookShelf = () => {
    return (
        <div className="bookshelf">
            <BookShelfTitle/>
            <BookGrid/>
        </div>
    );
};

export default BookShelf;
