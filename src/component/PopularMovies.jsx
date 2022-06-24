import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../css/PopularMovies.css';
import { Event } from '../S-FremworkEvents.js';
import APP_KEY from '../APP_KEY'; 
import axios from 'axios';
import {Link} from 'react-router-dom';
import FetchApi from '../FetchApi';
const events = new Event();
const star =  require('../images/starOrange.png')


function PopularMovies() {
    const [seeState, setState] = useState({ 'movies': true, 'tv': false })
    // const [data, setDataMovies] = useState([]);
    // const [loading, setLoading] = useState(false); 
    const {data , loading} = FetchApi(`https://api.themoviedb.org/3/${seeState.movies ? "movie" : "tv"}/popular?api_key=${APP_KEY}&language=en-US&page=1`)
    useEffect(() => { 
        
        
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
                                 <div className='cart'  key={data?.id}>
                                        <Link to='/movie' state={{"id" : data?.id , "kind" : seeState.movies ? 'movie' : 'tv'}}>
                                            <img className='logo' src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt='logo'></img>
                                        </Link>
                                        <div className='text'>
                                            <p>{data?.release_date || data?.first_air_date}</p>
                                            <h3>{ data?.title || data?.name}</h3>
                                            <span><img src={star}></img>{data?.vote_average}<span>{seeState.movies ? "movie" : 'tv'}</span> </span>
                                        </div>
                                    </div>
                            )
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