import React, { useEffect } from 'react';
import '../css/slider.css';
import { useState } from 'react';
import APP_KEY from '../APP_KEY';
import axios from 'axios';
import Navigation from './Navgation.jsx'




function Slider() {

    const [data, setd] = useState(null);
    const [counter, setCounter] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // Ids of Movies
        let list = [526896, 639933, 453395];
        // componentWillMounte
        setLoading(true);
        axios(`https://api.themoviedb.org/3/movie/${list[counter]}?api_key=${APP_KEY}&language=en`)
            .then((res) => setd(res.data))
        
        const timeOut = setInterval(() => {
        if (counter === 2) {
            setCounter(0)
            return
        }
        
        setCounter(counter + 1)
        }, 6000)

        // functtion 
        function slidIcons() {
            // this function it is just selecting span and added to its a background-color orange 
            let iconsElement = document.querySelectorAll('.clickSlid span');
            iconsElement.forEach((ele) => {
                if (ele.id === counter.toString()) {
                    ele.style.backgroundColor = 'var(--main-color-orange)';
                } else {
                    ele.style.backgroundColor = 'var(--main-color-white)';
                }
            } ) 
        }
        slidIcons()
        
        // ComponentWillUnmountt
        return () => {
            clearInterval(timeOut)
           
        }
    }, [counter])
       
   
    return (
        <div className='sliderimg'>
            {
                loading ? 
                <div className='slider' style={{ 'backgroundImage' : `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`}}>
                        <Navigation />
                        <div className='dark' ></div>
                        <div className='container' >
                            <div className='content' >
                                <div className='text'>
                                    <div className='kind' >
                                        <span >{ data?.genres[0].name}</span>
                                        <span>{ data?.genres[1].name}</span>
                                        <span>{ data?.genres[2].name}</span>
                                    </div>
                                    <h1>{ data?.title}</h1>
                                    <span>{data?.vote_average }</span>
                                    <div className='clickSlid'>
                                        <span  id='0' onClick={() => setCounter(0)}></span>
                                        <span id='1' onClick={() => setCounter(1)}></span>
                                        <span id='2' onClick={() => setCounter(2)}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 :  <div className='animation'>
                            <span>L</span>        
                            <span>O</span>
                            <span>D</span>
                            <span>I</span>
                            <span>N</span>
                            <span>G</span>
                    </div> 
                // loading ? counter +=1 : counter=counter
            }
        </div>
    )
 }

export default Slider;
