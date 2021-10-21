import React from 'react';
import {Link} from 'react-router-dom';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Trending.css';

export default class Trending extends React.Component{
    
    state = {
        loading: true,
    }

    async componentDidMount(){
        const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=26f07839b664a690dcfc2af24210b786';
        const response = await fetch(url);
        const data = await response.json();

if (sessionStorage.getItem('spotlight'))
{const spotlightID = sessionStorage.getItem('spotlight');
console.log(spotlightID);}

        const titles = []; 
        for (let x=0; x<10; x++) {
            titles.push(data.results[x].original_title);
        }
        
        const posters = []; 
        for (let x=0; x<10; x++) {
            posters.push('https://image.tmdb.org/t/p/original/' + data.results[x].poster_path);
        }

        const votes = []; 
        for (let x=0; x<10; x++) {
            votes.push(data.results[x].vote_average);
        }
        
        const ids = []; 
        for (let x=0; x<10; x++) {
            ids.push(data.results[x].id);
        }

        const movies = titles.map(function(x, i){
            return {title: x, poster: posters[i], vote: votes[i], id: ids[i]};
        })
        
        this.setState({
            movies : movies,
            loading: false, 
        });
    }

    render() {
        var settings = {
            centerMode: true,
            centerPadding: '70px',
            arrows: false,
            slidesToShow: 1,
            swipeToSlide: true,
            infinite: true,
            lazyLoad: 'ondemand',
        };

        if (this.state.loading){
            return (
                <div id="trending">
                    <h2> Trending </h2>
                    <div id="carrousel">
                        Loading...
                    </div>
                </div>
            )
        }
        if (!this.state.movies){
            return (
                <div id="trending">
                    <h2> Trending </h2>
                    <div id="carrousel">
                        Movie not found
                    </div>
                </div>
            )
        }
        return (
            <div id="trending">
                <h2> Trending </h2>
                <div id="carrousel">
                    <Slider {...settings}>
                            {this.state.movies.map(movie => (
                            <Link onClick={function(){
                                sessionStorage.setItem("detailTitle", movie.title);
                                sessionStorage.setItem("detailID", movie.id);}}
                                to={movie.title}>
                            <div class='film-box'>
                                
                                <div class='film-vote'>
                                    <span class='imdb'>IMDb</span><br/>
                                    <img class='star' alt='star' src='https://github.com/FrankZiWANG-dev/movieBrowser/blob/main/src/images/star.png?raw=true' />
                                    {movie.vote}
                                </div>
                            
                                <img class='film-image' alt='movie-poster' src={movie.poster}/>
                                
                                <div class='film-title'>{movie.title}</div>
                            
                            </div>
                            </Link>
                            ))}
                    </Slider>
                </div>
            </div>
        )
    };        
};

//fix carousel top and bottom margin due to film vote and film title
//fix film vote star placement margin right too big
//remove movie from spotlight in it