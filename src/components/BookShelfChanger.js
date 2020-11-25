import React from 'react';


const BookShelfChanger = ({book, shelves, onChange}) => {
    return (
        <div className="book-shelf-changer">
            <select name={"shelf"} value={book.shelf} onChange={(e) => onChange(e, book)}>
                <option value="move" disabled>Move to...</option>
                {shelves.length !== 0 && shelves.map((shelf, index) => {
                    const shelfName = shelf.id === 'currentlyReading'
                        ? shelf.title : shelf.id === 'wantToRead'
                            ? shelf.title : shelf.title;
                    return <option key={index} value={shelf.id}>{shelfName}</option>;
                })}
                <option value="none">None</option>
            </select>
        </div>
    );
};

export default BookShelfChanger;
