import React, { useEffect } from 'react';
import '../css/slider.css';
import { useState } from 'react';
import APP_KEY from '../APP_KEY';
import axios from 'axios';





function Slider() {
    let list = [526896, 338953, 752623];
    const [data, setd] = useState(null);
    const [counter, setCounter] = useState(0);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        // componentWillMounte
        setLoading(true);
        axios(`https://api.themoviedb.org/3/movie/${list[counter]}?api_key=${APP_KEY}&language=en`)
            .then((res) => setd(res.data))
        
        const timeOut = setInterval(() => {
        if (counter === 3) {
            setCounter(0)
            return
        }
        
        setCounter(counter + 1)
        }, 6000)
        
        // ComponentWillUnmountt
        return () => {
            clearInterval(timeOut)
           
        }
    }, [counter])
    

    return (
        <div>
           
            {
                loading ? 
                    <div className='slider' style={{ 'backgroundImage' : `url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`}}>
                        <div className='dark' ></div>
                        <div className='container' >
                            <div className='content' >
                                <div className='text'>
                                    <div className='kind' >
                                        <span>{ data?.genres[0].name}</span>
                                        <span>{ data?.genres[1].name}</span>
                                        <span>{ data?.genres[2].name}</span>
                                    </div>
                                    <h1>{ data?.title}</h1>
                                    <span>{data?.vote_average }</span>
                                    <div className='clickSlid'>
                                        <span onClick={() => setCounter(0)}></span>
                                        <span onClick={() => setCounter(1)}></span>
                                        <span onClick={() => setCounter(2)}></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 : console.log('Loadiing ..l..') 
                // loading ? counter +=1 : counter=counter
            }
        </div>
    )
 }

export default Slider;
/*
 <div className='slider' style={{ 'backgroundImage' : `url(${testImage})`}}>
            <div className='dark' ></div>
            <div className='container' >
                <div className='content' >
                    <div className='text'>
                        <div className='kind' >
                            <span>Advanter</span>
                            <span>Advanter</span>
                            <span>Advanter</span>
                        </div>
                        <h1>Fantastic Beasts: The Secrets of Dumbledore</h1>
                        <span>7.5</span>
                        <div className='clickSlid'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
*/