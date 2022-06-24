import React from 'react';
import FetchApi from '../FetchApi.js';
import APP_KEY from '../APP_KEY.js';
import '../css/tvShows.css';
import { Event } from '../S-FremworkEvents.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const events = new Event();
const star = require('../images/starOrange.png');
function TvShows() {

    const {data , loading } = FetchApi(`https://api.themoviedb.org/3/tv/popular?api_key=${APP_KEY}&language=en-US&page=1`)
    useEffect(() => {
        // this for Scrolling 
        const {RemoveEvnetScrollXhorizontal} = events.scrollXhorizontal('.tvShows .content', '.tvCards');
        
        return () => {
            RemoveEvnetScrollXhorizontal()
        }
    } , [])
    return (
        <div className='tvShows'>
            <div className='container'  >
                <h1 className='tag'><span>Best</span> Tv Shows</h1>
                <h2>See <span>Best</span> Tv Shows</h2>
                <div className='content' >
                    {
                        loading ? data?.results.map((data) => {
                            if (!data?.poster_path) {
                                return
                            }
                            return (
                                <div className='cart'  key={data?.id}>
                                        <Link to='/movie' state={{"id" : data?.id , "kind" :  'tv'}}>
                                            <img className='logo' src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt='logo'></img>
                                        </Link>
                                        <div className='text'>
                                            <p>{data?.release_date || data?.first_air_date}</p>
                                            <h3>{ data?.title || data?.name}</h3>
                                            <span><img src={star}></img>{data?.vote_average}<span>tv</span> </span>
                                        </div>
                                </div>
                            )
                        })  : <div className='animation'>
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
export default TvShows;