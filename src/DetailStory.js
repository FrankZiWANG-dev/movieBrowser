import React, {useState} from "react";
import "./DetailStory.css";

export default class DetailStory extends React.Component{
    state = {
        loading: true,
    }

    async componentDidMount(){
        const DetailID = sessionStorage.getItem('detailID');
        const url = 'https://api.themoviedb.org/3/movie/'+ DetailID +'?api_key=26f07839b664a690dcfc2af24210b786&language=en-US';
        const response = await fetch(url);
        const data = await response.json();

        this.setState({
            detailStory : data.overview,
            loading: false 
        });

    }
    
    render() {
        
        if (this.state.loading){
            return (
                <div id="story">
                    <h3>Synopsis</h3>
                    Loading...
                    <hr/>
                </div>
                
            )
        }
        else if (!this.state.detailStory){
            return (
                <div id="story">
                    <h3>Synopsis</h3>
                    No synopsis available
                    <hr/>
                </div>
            )
        }
        else {
            return (
                <div id="story">
                    <h3>Synopsis</h3>
                    {this.state.detailStory}
                    <hr/>
                </div>
            );
        } 
    };

};

//no readmore button yet