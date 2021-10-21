import React from "react";
import {Link} from 'react-router-dom';

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./DetailRelated.css";

export default class DetailRelated extends React.Component{
    state = {
        loading: true,
    };

    async componentDidMount(){
        const DetailID = sessionStorage.getItem('detailID');
        const url = 'https://api.themoviedb.org/3/movie/'+ DetailID + '/recommendations?api_key=26f07839b664a690dcfc2af24210b786&language=en-US&page=1';
        const response = await fetch(url);
        const data = await response.json();
       
       
        if (data.results.length !== 0){
            
            const relatedTitles = [];
            for (let x=0; x<5; x++) {
                relatedTitles.push(data.results[x].original_title);
            }

            const relatedID = [];
            for (let x=0; x<5; x++) {
                relatedID.push(data.results[x].id);
            }

            const relatedPosters = [];
            for (let x=0; x<5; x++) {
                relatedPosters.push('https://image.tmdb.org/t/p/original/'+ data.results[x].poster_path);
            }

            const relatedDates = [];
            for (let x=0;x<5;x++){
                relatedDates.push(new Date(data.results[x].release_date).getFullYear());
            }
            
            const related = relatedTitles.map(function(x,i){
                return {
                    relatedTitle: x,
                    relatedPoster: relatedPosters[i],
                    relatedDate: relatedDates[i],
                    relatedID: relatedID[i]
                };
            })
            console.log(related);
            
            this.setState({
                relatedMovies : related,
                loading: false 
            });
        }
        
    }
    
    render() {
        if (this.state.relatedMovies){
            var settings = {
                arrows: false,
                slidesToShow: 2,
                swipeToSlide: true,
                infinite: false,
                lazyLoad: 'ondemand',
            };

            if (this.state.loading){
                return (
                    <div id="DetailRelated">
                        Loading...
                    </div>
                )
            }

            else {
                return (
                    <div id="DetailRelated">
                        <h3>Related movies</h3>
                        <div id="relatedCarrousel">
                        <Slider {...settings}>
                                {this.state.relatedMovies.map(relatedMovie => (
                                <Link onClick={function(){
                                    sessionStorage.setItem("detailID", relatedMovie.relatedID);
                                    sessionStorage.setItem("detailTitle", relatedMovie.relatedTitle);
                                    setTimeout(function(){window.location.reload()}, 100);
                                }}
                                    to={relatedMovie.relatedTitle}>
                                <div class='related-film-box'>
                                    
                                    <div class='related-film-image-box'>
                                        <img class='related-film-image' alt='realted-movie-poster' src={relatedMovie.relatedPoster}/>
                                    </div>
                                
                                    <div class='related-film-text'>
                                    {relatedMovie.relatedTitle} ({relatedMovie.relatedDate})
                                    </div>
                                
                                </div>
                                </Link>
                                ))}
                        </Slider>
                        </div>
                    </div>
                );
            }; 
        }
        else {
            return (
            <div id='DetailRelated'>
                No related movies.
            </div>
        )}
    };      
};

