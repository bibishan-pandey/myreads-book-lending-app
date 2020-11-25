import React from 'react';
import BookShelf from "./BookShelf";


const BookList = ({books, shelves, onChange}) => {
    return (
        <div className="list-books-content">
            <div>
                {shelves.map((shelf, index) => {
                    const title = shelf.id === 'currentlyReading'
                        ? shelf.title : shelf.id === 'wantToRead'
                            ? shelf.title : shelf.title;
                    const shelfBooks = books.filter(book => book.shelf === shelf.id);
                    return <BookShelf
                        key={index}
                        title={title} books={shelfBooks} shelves={shelves} onChange={onChange}/>;
                })}
            </div>
        </div>
    );
};

export default BookList;
