import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faImdb } from '@fortawesome/free-brands-svg-icons';
import sources from '../../../../services/api_sources';
import { dateEdit } from './utils/date_edite';
// import localstoage funcionalities
import { setToLocalStorage } from '../../../../utils/localstorage';

function Overview({data , state  , id}) {

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

export default Overview;