import React from 'react';
import { useEffect } from 'react';
import FetchApi from '../FetchApi.js';
import APP_KEY from '../APP_KEY.js';
import { Link } from 'react-router-dom';
import '../css/pageTranding.css';
import { Event } from '../S-FremworkEvents.js';
import { useState } from 'react';
import  Navigation from './Navgation.jsx'

// const img = require('../images/Background.jpg');
const satr = require('../images/starOrange.png');
const events = new Event();


function PageTranding() {
    const {data , loading} = FetchApi(`https://api.themoviedb.org/3/trending/movie/day?api_key=${APP_KEY}`)
    const [state, setState] = useState(false);
    const [scroll, setScroll] = useState(453);

    useEffect(() => {
        
        // const {RemoveEvnetScrollXhorizontal} = events.scrollXhorizontal('.ulParent', '.frst', 2);
        
        // This event happen when scrolling slid     
        const { RemoveEvnetScrollXcircle } = events.ScrollYCircle('.ulParent', '.frst', () => {
            setState(true)
        });
        
        // this Event Fro centering Element on Center
        const parentElement = document.querySelectorAll('.ulParent')[0];
        const EvnetLoad =   window.addEventListener('load', () => {
                
            document.querySelectorAll('.ulParent .frst').forEach((element, index) => {
                
                if (index === 1) {
                    element.classList.add('activeCenter')
                } else {
                    element.classList.add('activeRight')
                }
            });
            
                parentElement.scrollTo(scroll, 0);
         
        })

     
        
        return () => {
            parentElement.removeEventListener('load' , EvnetLoad)
            RemoveEvnetScrollXcircle()  
            // RemoveEvnetScrollXhorizontal()
            
            
        }
    }, [state])
    
    function incressDescress(type) {
        const parentElement = document.querySelectorAll('.ulParent')[0];
        if (scroll < 0) {
            setScroll(0)
            return
        }
        // this from mobile
        if (window.screen.availWidth < 767) {
            setScroll(0);
            console.log('yes mobile')
            if (type === 'increase') {
                setScroll(scroll + 327)
                parentElement.scrollTo(scroll, 0);
            
            } else {

                setScroll(scroll - 327)
                parentElement.scrollTo(scroll, 0);
            }
            return
        }
        if (type === 'increase') {
            setScroll(scroll + 573)
            parentElement.scrollTo(scroll, 0);
            
        } else {

            setScroll(scroll - 573)
            parentElement.scrollTo(scroll, 0);
        }
    }

    return (
        <div className='topRate' >
            <Navigation  />
            <div className='contentSlaid' >
                
                    <span className='spanOne' onClick={() => {
                        incressDescress('decrease')
                    }}></span>
                <span className='spanTow' onClick={() => {
                    incressDescress('increase')
                    }}></span>
                
                <ul className='ulParent'>
                    {loading ? data?.results.map((data , index) => {
                        if (!data?.backdrop_path) {
                            return
                        }
                        if (index > 10) {
                            return
                        }
                    return (
                        
                        <li key={data?.id} className='frst' style={{ "backgroundImage": `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})` }}>
                            <div className='text'>
                                <ul className='ulChild'>
                                    <li><h1>{data?.title || data?.name}</h1></li>
                                    <li>{ data?.release_date}</li>
                                    <li>
                                        <span>{ data?.original_language}</span>
                                        <span>
                                            <img src={satr} alt='img'></img>
                                            { data?.vote_average}
                                        </span>
                                    </li>

                                    <li>
                                        <h2>overview :</h2>
                                        <p>
                                            {
                                                data?.overview
                                            }
                                        </p>
                                    </li>
                                    <li><Link state={{"id" : data?.id , "kind" : 'movie'}} to={'/movie'} >More</Link></li>
                                </ul>
                            </div>
                        </li>
                    )
                }) : <div>loadding</div>
                }
            </ul>
            </div>
        </div>
    )
}


export default PageTranding;

