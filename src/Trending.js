import React from 'react';
import './Trending.css';

export default class Trending extends React.Component{

    state = {
        loading: true,
        person: null,
    }

    async componentDidMount(){
        const url = 'https://api.themoviedb.org/3/trending/movie/day?api_key=26f07839b664a690dcfc2af24210b786';
        const response = await fetch(url);
        const data = await response.json();
        
        this.setState({person: data.results[0], loading: false, poster: 'https://image.tmdb.org/t/p/original/' + data.results[0].poster_path});
    }

    render() {
        return (
        <div id="trending">
            <h2> Trending </h2>
            <div id="carrousel">
                {this.state.loading || !this.state.person ? 
                    <div> loading... </div> 
                : 
                    <div id='film-box'>
                        <img id='film-image' src={this.state.poster}/>
                        <div>{this.state.person.original_title}</div>
                    </div>
                }
                {/* <div id='carrousel-images'>
                    <div id='imdb-rating'>
                        IMDb rating
                    </div>
                    Carrousel images
                    <div id='carrousel-film-title'>
                        Film title
                    </div>
                </div> */}
            </div>
        </div>
        );
    };
};