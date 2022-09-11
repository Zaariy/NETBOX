import React, { useState , useEffect } from 'react';
import './style/main.css'
import axios from 'axios';
import { API_KEY } from '../../../../hooks/useFetch';
import sources from '../../../../services/api_sources';

function Episodes(props) {
    // episodes  : tv/94997/season/1/episode/1
    // sessions : 

    const [movieInfo, setInfo] = useState({
        seasons: 1,
        episode: 1,
        episodes: [],
    });

    // get general data from parent about movie
    const parentdata = props.data;
    const id = props.id
    
    
    function setEpisodes() {
        // we are loading all episodes and push it to useState
        const eps =  []
        for (let i = 1; i <= 10; i++) {
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
        return () => {
            setInfo((prv) => {
                return {...prv}
            })
        }
    }, [movieInfo.seasons , id])
    
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

export default Episodes;