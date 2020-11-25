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
            <div className="open-search">
                <Link to={'/search'}><button>Add a book</button></Link>
            </div>
        </div>
    );
};

Dashboard.propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Dashboard;
