import React, { useEffect} from "react";
import {Event} from '../S-FremworkEvents.js'
import FetchApi from '../FetchApi.js';
import APP_KEY from "../APP_KEY.js";
import { Link }  from 'react-router-dom';
import '../css/tranding.css';


const event = new Event();
const star = require('../images/starOrange.png');
function TrandingMovies() {
    const {data , loading}  =  FetchApi(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APP_KEY}`)

    useEffect(() => {
        const {RemoveEvnetScrollXhorizontal} = event.scrollXhorizontal('.trandingMovies .content', '.trandingMovies .cartMovies')
        return () => {
            RemoveEvnetScrollXhorizontal()

        }
    } , [])


    return (
        <div className="trandingMovies">
            <div className="container" >
                <h1 className='tag'><span>Tranding </span>Movies</h1>
                <div className="content" >
                    {
                        
                        loading ? data.results.map((data) => {
                            
                            if (!data?.poster_path) {
                                return
                            }
                            return (
                                <div className='cart'  key={data?.id}>
                                        <Link to='/movie' state={{"id" : data?.id , "kind" : 'movie' }}>
                                            <img className='logo' src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt='logo'></img>
                                        </Link>
                                        <div className='text'>
                                            <p>{data?.release_date || data?.first_air_date}</p>
                                            <h3>{ data?.title || data?.name}</h3>
                                            <span><img src={star}></img>{data?.vote_average}<span>movie</span> </span>
                                        </div>
                                </div>
                            
                            )

                       }) : <div>Loading</div>
                    } 
                   
                </div>
            </div>
        </div>
    )
}

export default TrandingMovies;