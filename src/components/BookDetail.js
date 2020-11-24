import React from 'react';


const BookDetail = ({title, authors}) => {
    return (
        <React.Fragment>
            <div className="book-title">{title}</div>
            <div className="book-authors">
                {authors.map((author, index) => <p key={index}>{author}</p>)}
            </div>
        </React.Fragment>
    );
};

export default BookDetail;
