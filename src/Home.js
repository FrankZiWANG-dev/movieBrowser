import react from "react";
import Nav from './Nav.js';
import Footer from './Footer.js';
import Trending from './Trending.js';
import './Home.css';

export default function Home() {
    return (
        <>
        <Nav/>
        <div id="spotlight">
            <div id="spotlight-label">
                
            </div>
        </div>
        <Trending/>

        <Footer/>
        </>
    );
}