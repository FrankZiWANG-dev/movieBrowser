import react from "react";
import Nav from './Nav.js';
import Footer from './Footer.js';
import './Discover.css';

export default function Discover() {
    return (
        <>
        <Nav/>

        <div id='search-box'>
            <input id='search'></input>
        </div>
        
        <div id='categories'>
            Fantasy
        </div>
        
        <div id='movies'>
            Movies
        </div>

        <Footer/>

        </>
    );
}