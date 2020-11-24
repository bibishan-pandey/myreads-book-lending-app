import React from 'react';
import BookShelf from "./BookShelf";


const BookList = () => {
    return (
        <div className="list-books-content">
            <div>
                <BookShelf/>
                <BookShelf/>
                <BookShelf/>
            </div>
        </div>
    );
};

export default BookList;
