import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/PopularMovies.css';
import { Event } from '../S-FremworkEvents.js';
import APP_KEY from '../APP_KEY'; 
import axios from 'axios';
import {Link} from 'react-router-dom';
const events = new Event();



function PopularMovies() {
    const [seeState, setState] = useState({ 'movies': true, 'tv': false })
    const [data, setDataMovies] = useState([]);
    const [loading, setLoading] = useState(false); 
    
    useEffect(() => { 
        
        axios.get(`https://api.themoviedb.org/3/${seeState.movies ? "movie" : "tv"}/popular?api_key=${APP_KEY}&language=en-US&page=1`)
            .then((response) => {
                setDataMovies(response.data)
                setLoading(true)
            })
            // This for scrolling Hirazontale   
        const {RemoveEvnetScrollXhorizontal} = events.scrollXhorizontal('.popularMovies .content', '.cartMovies');
        
        return () => {
            RemoveEvnetScrollXhorizontal()
        }
    } ,[seeState])
    return (
        <div className='popularMovies'>
            <div className='container' >
                <h1 className='tag'><span>Popular </span>Movies</h1>
                    <div className='choices' >
                        <span style={{'backgroundColor' : seeState.tv ? 'var(--main-color-orange)' : 'var(--main-color-b)' }} onClick={() => {
                            setState({ movies: false, tv: true })
                        }}  >TV</span>
                        <span style={{'backgroundColor' : seeState.movies ? 'var(--main-color-orange)' : 'var(--main-color-b)' }} onClick={() => {
                            setState({ tv: false, movies: true })
                        }}> Movies</span>
                    </div>
                <div className='content'>
                   
                    {
                        
                        loading ? data.results.map((data) => {
                            if (!data?.poster_path) {
                                return
                            }
                            return (
                            <div className='cartMovies' data={data?.vote_average} key={data?.id} >
                                <div className='cart'>
                                     {/* <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt=''></img> */}
                                        <Link to={"/movie"} state={{"id" : data?.id , "kind" : seeState.movies ? "movie" : 'tv'  }}>

                                            <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt=''></img>
                                        </Link>
                                    <h3>{data?.title || data?.original_name }</h3>
                                </div>
                            </div>)
                       }) : <div className='animation'>
                                <span>L</span>        
                                <span>O</span>
                                <span>D</span>
                                <span>I</span>
                                <span>N</span>
                                <span>G</span>
                            </div>
                    } 
                </div>
                
            </div>
        </div>
    )
}
export default PopularMovies;