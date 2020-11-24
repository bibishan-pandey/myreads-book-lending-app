import React from 'react';
import BookShelf from "./BookShelf";


const BookList = ({books, shelves, onChange}) => {
    return (
        <div className="list-books-content">
            <div>
                {shelves.map((shelf, index) => {
                    const title = shelf === 'currentlyReading'
                        ? 'Currently Reading' : shelf === 'wantToRead'
                            ? 'Want to Read' : "Read";
                    const shelfBooks = books.filter(book => book.shelf === shelf);
                    return <BookShelf
                        key={index}
                        title={title} books={shelfBooks} shelves={shelves} onChange={onChange}/>;
                })}
            </div>
        </div>
    );
};

export default BookList;
