import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import './style/main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch } from '@fortawesome/free-solid-svg-icons';
import { API_KEY } from '../../hooks/useFetch';
function Search() {
    const [states, setStates] = useState({
        inputData: '',
        state: false,
        data: [] 
    })
    useEffect(() => {
        if (states.inputData.length !== 0) {
            
            axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${states.inputData}&page=1`).then((data) => {
                setStates((prv) => {
                    return {
                        inputData: states.inputData,
                        state: true,
                        data : data.data.results
                    }
                })
            })
        }
        
    } , [states.inputData])
    
    return (
        <React.Fragment>

        <div className="search-input">
            <div className="input">
                    <input  type='text' placeholder="I'm searching for ..." onChange={
                        (e) => {
                            setStates((prv) => {
                                return {...prv , inputData : e.target.value}
                            })
                        }
                    }></input>
                <FontAwesomeIcon icon={faSearch}  className='icon-search' />
            </div>
           
        </div>
        <div  style={{"display" : states.inputData.length !== 0 ? 'block' : "none"}} className="results-search">
                <ul>
                    { 
                        states.state ? (
                            states.data?.map((ele , index) => {
                                if (ele?.poster_path) {
                                    return (
                                        <li key={index}>
                                            <Link to={`/tvshow/${ele?.name}`} state={{id : ele?.id}}><img src={`https://image.tmdb.org/t/p/w500${ele?.poster_path}`} alt="logo"></img></Link>
                                            <div className="info">
                                                <span className="title">{ele?.title || ele?.name }</span>
                                                <span className="date">{ele?.release_date || ele?.first_air_date }</span>
                                                <span className="vote">{ ele?.vote_average}</span>
                                            </div>
                                        </li>
        
                                    )

                                } 
                            })       
                        
                        ) : null
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}
export default Search;
