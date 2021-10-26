import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './MoviesByCategory.css';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function MoviesByCategory() {

    const [page, setPage] = useState(1);
    const [genre, setGenre] = useState(28);

    const url = 'https://api.themoviedb.org/3/discover/movie?api_key=';
    const key = '26f07839b664a690dcfc2af24210b786';
    const params = `&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=`;

    const [movies, setMovies] = useState([]);
    const [moviesGenre, setMoviesGenre] = useState([]);
    // const [IsTrue, setIsTrue] = useState(false);

    const IMGPATH = 'https://image.tmdb.org/t/p/w1280';

    const fetchMovies = async () => {
        try {
            const response = await fetch(url + key + params + genre);
            const data = await response.json();
            setMovies( prevState => [...prevState, ...data.results]);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        setMovies([]);
        setPage(1);
        fetchMovies();
    }, [genre]);

    const fetchMoviesGenre = async () => {
        try {
            const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=26f07839b664a690dcfc2af24210b786&language=en-US');
            const data = await response.json();
            setMoviesGenre( data.genres);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchMoviesGenre();
    }, []);

    if(movies.length !== 0) { 
        var settings = {
            centerMode: true,
            centerPadding: '70px',
            arrows: false,
            slidesToShow: 1,
            infinite: true,
            lazyLoad: 'ondemand',
            vertical: true,
            verticalSwiping: true,
            rows: 2
        };
        
            return (
                <>
                <div className="movieGenres">
                {
                    moviesGenre.map((genre) => {
                        return (
                            <p 
                            className="genreLink" 
                            id= { genre.id }
                            onClick= { (e) => changeGenre(e) }
                            key={ genre.id }
                            >
                            { genre.name } 
                            </p>
                        )
                    })
                }
                </div>
                <div className="allMovie">
                    <Slider {...settings}>
                        { movies.map((movie) => {
                                console.log(movie);

                                    return(
                                    <Link onClick={function(){
                                        sessionStorage.setItem("detailTitle", movie.title);
                                        sessionStorage.setItem("detailID", movie.id);}}
                                        to={movie.title}>
                                        <div className="cardDiscover">
                                            <div className="widthImg"><img src={IMGPATH + movie.poster_path} alt={ IMGPATH + movie.title } class='img-carousel-2' /></div>
                                            <p className="titleDiscover">
                                                { movie.title }
                                                <span className="dateColor">({ movie.release_date.substring(0,4) })</span>
                                            </p>
                                        </div>
                                    </Link>
                                    )
                                
                            })
            
                        }
                    </Slider>
                </div>
                </>
            );
    
        function changeGenre(e) {
            e.preventDefault();
            e.target.style.color = '#f57e2f';
            setGenre(e.target.id);
        }

    } else {
        return( 
            "No information found"
        )
    }
};