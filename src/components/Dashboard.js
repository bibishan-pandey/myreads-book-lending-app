import React from 'react';
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

export default Dashboard;
