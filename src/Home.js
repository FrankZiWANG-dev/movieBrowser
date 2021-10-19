import react from "react";
import Nav from './Nav.js';
import Footer from './Footer.js';
import Trending from './Trending.js';
import Spotlight from './Spotlight.js';
import './Home.css';

export default function Home() {
    return (
        <>
        <Nav/>

        <Spotlight/>

        <Trending/>

        <Footer/>

        </>
    );
}

