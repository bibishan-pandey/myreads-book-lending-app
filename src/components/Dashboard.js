import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import Header from "./Header";
import BookList from "./BookList";


const Dashboard = ({books, shelves, onChange}) => {
    return (
        <div className="list-books">
            <Header/>
            <BookList books={books} shelves={shelves} onChange={onChange}/>
            <Link to={'/search'} className="open-search">Add a book</Link>
        </div>
    );
};

Dashboard.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Dashboard;
