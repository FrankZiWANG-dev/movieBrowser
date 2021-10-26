import React from "react";
import Nav from './Nav.js';
import Footer from './Footer.js';
import MoviesByCategory from './MoviesByCategory.js';
import './Discover.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Discover() {
    return (
        <>
        <Nav/>

        <div id='search-box'>
            <FontAwesomeIcon icon={faSearch} id='search-icon'/>
            <input id='search' placeholder='Search Movie'></input>
        </div>
        
        <MoviesByCategory/>

        <Footer/>

        </>
    );
}