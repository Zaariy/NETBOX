import React, { useEffect, useState} from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import {faImdb } from '@fortawesome/free-brands-svg-icons';
import useFetch, { API_KEY } from '../../../../hooks/useFetch';
import sources from '../../../../services/api_sources';
import {dateEdit} from './utils/date_edite';
// import localstoage funcionalities
import { setToLocalStorage } from '../../../../utils/localstorage';
import './style/main.css';


function Slider() {
    const [componentRunder, setComponent] = useState({
        overview: true,
        episode: false 
    })
    const id = '71446'
    const { data, state} = useFetch(`tv/${id}`, 'get');
    return (
        
            <div className='slider'>
                {
                    componentRunder.episode ?
                    <Episodes data={data} id={id} state={state} /> :
                    <Overview data={data} id={id} state={state} />  
                }
                <div
                    className='nav-slider '
                    onClick={(e) => {
                        e.target.classList.toggle('active-nav-slider')
                    }}
                >
                <span onClick={() => {
                    setComponent((prv) => {
                        return {...prv, overview : true , episode: false}
                        })
                    }} className='active-nav-slider'>
                        OVERVIEW 
                    </span>
                    <span onClick={() => {
                    setComponent((prv) => {
                        return {...prv, overview : false , episode: true}
                        })
                    }}>
                        EPISODES 
                    </span>
                    <span>
                        DETAILS 
                    </span>
                </div>
            </div>
        
        
    )
}

function Overview({data , state }) {

    return (
        state ? 
        <div
            className='slider-content'
            style={{"backgroundImage" : `url(${sources.background_path + data?.backdrop_path})`}}
        >
            <div className='slider-info container' >
                <h1>{data?.title || data?.name }</h1>
                <ul>
                    <li>{ dateEdit(data?.release_date || data?.last_air_date)}</li>
                    <li>{ data?.vote_average}<FontAwesomeIcon icon={faImdb} className='brand-icon-imdb' /> </li>
                    <li>{ data?.episode_run_time[0]} Minute</li>
                </ul>
                <p>
                    {data?.overview }
                </p>
                <div className='buttons' >
                <button>
                    <FontAwesomeIcon icon={faPlay} className='icon-slider' />
                    Play 
                </button>
                    <button onClick={() => {
                        setToLocalStorage('list_movies' , data?.id)
                    }}>
                    <FontAwesomeIcon icon={faPlus}  className='icon-slider' />
                    My list
                </button>
                </div>
                
            </div>
            </div>
        : null
    )
}

function Episodes(props) {
    // episodes  : tv/94997/season/1/episode/1
    // sessions : 

    const [movieInfo, setInfo] = useState({
        seasons: 1,
        episode: 1,
        episodes: [],
    });

    // const { data, state } = useFetch(`tv/94997/season/${movieInfo.seasons}/episode/${movieInfo.episode}`, 'get');
    // get general data from parent about movie
    const parentdata = props.data;
    const id = props.id
    
    
    function setEpisodes() {
        // we are loading all episodes and push it to useState
        const eps =  []
        for (let i = 1; i <= parentdata.number_of_episodes; i++) {
            axios.get(`${sources.url}tv/${id}/season/${movieInfo.seasons}/episode/${i}?api_key=${API_KEY}`).then((data) => {
                eps.push(data.data)
            })
        }
      

        // re-render 
        // waiting for fetch all episodes
        setTimeout(() => {
            setInfo((prv) => {
                return {...prv , episodes: eps}
            })
        }, 1000 )
    }

    function setSeasons(season) {
        setInfo((prv) => {
            return {...prv , seasons : season}
        })
    } 

    useEffect(() => {
        // pushing episodes into sate
        setEpisodes()
    }, [movieInfo.seasons])
    
    return (
        <div
            className='episodes'
            style={{"backgroundImage" : `url(${sources.background_path + parentdata.backdrop_path})`}}
        >
            <div className='content-episodes container'>
                <h1>{parentdata.title || parentdata?.name}</h1>
                
                <div className='seasons'>
                   
                    <select onChange={(e) => setSeasons(e.target.value)}>
                        {
                            [...Array(parentdata.number_of_seasons)].map((ele , index) => {
                                index += 1;
                                return  <option key={index} value={index} > {index} Session </option>
                            })
                        }
                    </select>
                    <span>See All &#62; </span>
                </div>
                <div className='carts'>
                    {
                        movieInfo.episodes?.map((episode, index) => {
                            index = index + 1
                            return (
                                <div className='cart' key={index} >
                                    {
                                        episode.still_path ? (
                                            <img src={`${sources.poster_path + episode.still_path}` } alt='images of poster movie'></img>
                                            
                                            ) : <span className='fail-cart'></span>
                                        }
                                        <span className='number-episode'>{episode.episode_number}</span>

                                </div>
                            )
                        })
                     }   
                </div>
            </div>
        </div>
    )

}
export default Slider; 