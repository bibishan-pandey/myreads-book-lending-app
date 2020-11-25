import React from 'react';
import PropTypes from "prop-types";


const BookShelfTitle = ({title}) => {
    return <h2 className="bookshelf-title">{title}</h2>;
};

BookShelfTitle.propTypes = {
    title: PropTypes.string.isRequired,
};

export default BookShelfTitle;
