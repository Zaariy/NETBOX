import React from 'react';
import { useEffect } from 'react';
import FetchApi from '../FetchApi.js';
import APP_KEY from '../APP_KEY.js';
import { Link } from 'react-router-dom';
import '../css/pageTranding.css';
import { Event } from '../S-FremworkEvents.js';
import { useState } from 'react';
import Navigation from './Navgation.jsx';
import Footer from './Footer.jsx'


const satr = require('../images/starOrange.png');
const events = new Event();


function SliderTranding(props) {
    const name_api = props.name;
    const {data , loading} = FetchApi(`${name_api}?api_key=${APP_KEY}`)
    const [state, setState] = useState(false);
    const [scroll, setScroll] = useState(453);
    // console.log(data)
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
        <div className='pageTranding' >
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

function PageTranding() {
    const [page, setPage] = useState(1); 
    const [statetype, setStateType] = useState({ 'movie': true });
    const [ statetypePeriod  , setPeriod] = useState({'day': true})
    const {data , loading} = FetchApi(`https://api.themoviedb.org/3/trending/${statetype.movie ? 'movie' : 'tv'}/${statetypePeriod.day ? 'day' : 'week'}?api_key=${APP_KEY}&page=${page}`)
    console.log(data)
    return (
        <div>
        <div className='allpageTranding'>
            <Navigation  />
            <SliderTranding name='https://api.themoviedb.org/3/trending/movie/day' />
            <div className='container' >
                    <h1 className='tag'><span>Tranding </span>Movies</h1>
                <div className='content'>
                    < div className='sidBar'>
                        <div className='select'>
                            <ul>
                                    Type :
                                <li>
                                    <label htmlFor='movie'>{statetype.movie ? 'Movies' : 'Tv' }</label>
                                    <input type="checkbox" name="movie" id="movie" onClick={(e) => setStateType({'movie' : e.target.checked})} />
                                </li>

                           
                            </ul>
                            <ul>
                                Period :
                                <li>
                                    <label htmlFor='day'>{statetypePeriod?.day ? 'Day' : 'Week' }</label>
                                    <input type="checkbox" name="day" id="day" onClick={(e) => {
                                        setPeriod({ 'day': e.target.checked })
                                        
                                    }} />
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className='presentMovies'>
                        {
                           loading ? data?.results.map((data) => {
                                return (
                                    <div className='cart' key={data?.id}>
                                        <Link to='/movie' state={{"id" : data?.id , "kind" : statetype.movie ? 'movie' : 'tv'}}>
                                            <img className='logo' src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt='logo'></img>
                                        </Link>
                                        <div className='text'>
                                            <p>{data?.release_date || data?.first_air_date}</p>
                                            <h3>{ data?.title || data?.name}</h3>
                                            <span><img src={satr}></img>{data?.vote_average}<span>{data?.media_type }</span> </span>
                                        </div>
                                    </div>
                                )
                            }) : <div>loading ...</div>
                        }
                    </div>
                    <button onClick={() => setPage(page + 1)}>More</button>
                </div>
                
            </div>
        </div>
        <Footer />
        </div>
    )
}
// here we export to component
// because we will use SliderTranding in multiple componenet
export  {PageTranding , SliderTranding} ;

