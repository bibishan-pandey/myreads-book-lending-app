import React from 'react';
import PropTypes from "prop-types";


const BookDetail = ({title, authors}) => {
    return (
        <React.Fragment>
            <div className="book-title">{title}</div>
            <div className="book-authors">
                {authors && authors.map((author, index) => <p key={index}>{author}</p>)}
            </div>
        </React.Fragment>
    );
};

BookDetail.propTypes = {
    title: PropTypes.string.isRequired,
};

export default BookDetail;
