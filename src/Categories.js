import React from 'react';
import './Categories.css';

export default class Categories extends React.Component{

    state = {
        loading: true,
        person: null,
    }

    async componentDidMount(){
        const url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=26f07839b664a690dcfc2af24210b786&language=en-US';
        const response = await fetch(url);
        const data = await response.json();
        
        this.setState({genres: data.genres, loading: false});
    }

    render() {
        if (this.state.loading){
                return <div> Loading... </div>; 
        }
        
        if (!this.state.genres){
            return <div> Didn't get a genre</div>
        }
        
        return (
            
        <div id="categories">
            {this.state.genres.map(genre =>(
                <a href='/'>{genre.name}</a>
            ))}

        </div>
        );
    };
};