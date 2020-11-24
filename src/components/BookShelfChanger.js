import React from 'react';


const BookShelfChanger = ({book, shelves, onChange}) => {
    return (
        <div className="book-shelf-changer">
            <select name={"shelf"} value={book.shelf} onChange={(e) => onChange(e, book)}>
                <option value="move" disabled>Move to...</option>
                {shelves.length !== 0 && shelves.map((shelf, index) => {
                    const shelfName = shelf === 'currentlyReading'
                        ? 'Currently Reading' : shelf === 'wantToRead'
                            ? 'Want to Read' : "Read";
                    return <option key={index} value={shelf}>{shelfName}</option>;
                })}
            </select>
        </div>
    );
};

export default BookShelfChanger;
