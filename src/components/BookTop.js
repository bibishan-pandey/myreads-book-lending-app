import React from 'react';
import BookCover from "./BookCover";
import BookShelfChanger from "./BookShelfChanger";


const BookTop = ({book, shelves, onChange}) => {
    const image = book['imageLinks']['thumbnail'];
    return (
        <div className="book-top">
            <BookCover image={image}/>
            <BookShelfChanger book={book} shelves={shelves} onChange={onChange}/>
        </div>
    );
};

export default BookTop;
