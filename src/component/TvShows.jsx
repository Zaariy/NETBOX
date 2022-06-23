import React from 'react';
import FetchApi from '../FetchApi.js';
import APP_KEY from '../APP_KEY.js';
import '../css/tvShows.css';
import { Event } from '../S-FremworkEvents.js';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const events = new Event();

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
                                <div className='tvCards' data={data?.vote_average}  key={data?.id}>
                                    <div className='cart' >

                                        <Link state={{'id' : data?.id , 'kind' : 'tv'}} to={'/movie'} ><img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt='img'></img></Link>
                                        <h3>{ data.original_name}</h3>
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