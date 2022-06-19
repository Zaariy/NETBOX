import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../css/SearchDetailes.css';
import FetchApi from '../FetchApi.js';
import APP_KEY from '../APP_KEY.js';
import {} from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react';


function SearchDetailes() {
    const searchdata = useLocation();
    const id = searchdata.state?.id;
    const [counter, setCounter] = useState(1);
    const [typeSearch, setTypeSearch] = useState('movie');
    const [dataSelect, setSelect] = useState({ "movie": false, "tv": false, "preson": false });
    const {data , loading} =  FetchApi(`https://api.themoviedb.org/3/search/${typeSearch}?api_key=${APP_KEY}&query=${id}&page=${counter}`)
    


    function increaseDecreasesCounter(state) {
        // this function it is just increasing or 
        // decreaseing value of Counter Staste
        const MaxPages = data?.total_pages;

        if (counter === MaxPages) {
            setCounter(counter - 1);
            return
        }
        if (counter <= 1  ) {
            
            setCounter(counter + 1)
            return 
            
        }
        if (state === 'increases') {
            
            setCounter(counter + 1 )
        } else {
            setCounter(counter - 1)
        }

    }


    function cuteWords(word) {
        // This function it Cuting phargaph into small pices
        // And cullceted with it chather
        
            let words = word.split(' ');
            let newList =  []
            
            for (let i = 0; i < 25; i++){
                newList.push(words[i])
           
            }
            return newList.join(' ')
    }


    function slidIcons(e) {
        // this function it is just selecting span and added to its a background-color orange 
        let item =  e.target.attributes['value'].value
        if (item === 'movie') {
            setSelect({ 'movie': true, 'tv' : false , 'preson' : false})
        } else if (item === 'tv') {

            setSelect({ 'movie': false, 'tv' : true , 'preson' : false})
        } else {

            setSelect({ 'movie': false, 'tv' : false , 'preson' : true})
        }
    } 
        
 
    
    return (
        <div className='searchDetails'>
            <div className='container' >
                <h1 className='tag'><span>Search </span>Resolute: </h1> 
                <div className='content' >
                    <div className='containerItems' >
                        {
                            loading ? data?.results.map((data) => {
                                
                                if (!data?.poster_path) {
                                  return
                                }
                                return (
                                    <div className='items' key={data?.id}>
                                        <Link to={'/'} ><img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt='img'></img></Link>
                                        <div className='text'>
                                           
                                            
                                            <Link to={'/'} > <h3>{ data?.title}</h3></Link>
                                            <span>{ data?.release_date}</span>
                                            <p>
                                                { cuteWords(data?.overview)}
                                            </p>
                                        </div>
                                    </div>
                                )
                            }) : <div >Loadding...</div>
                       }
                    </div>
                    <div className='selectType'>
                        <h2>Search Resolut :</h2>
                        <div className='content' >
                            <ul className='frst'>
                                <li>
                                    Search For :
                                    <ul className='second'>
                                        <li style={{'backgroundColor': dataSelect.movie ? "var(--main-color-orange)" : ''}}  onClick={(e) => {
                                            setTypeSearch(e.target.attributes['value'].value)
                                            slidIcons(e)              
                                        }} value='movie'>Movies</li>
                                        <li style={{'backgroundColor': dataSelect.tv ? "var(--main-color-orange)" : ''}} onClick={(e) => {
                                            setTypeSearch(e.target.attributes['value'].value)
                                            slidIcons(e)
                                        }} value='tv'>Tv</li>
                                        <li style={{'backgroundColor': dataSelect.preson ? "var(--main-color-orange)" : ''}} onClick={(e) => slidIcons(e)} value='person'>Pepole</li>
                                    </ul>
                                </li>
                                
                            </ul>
                            <ul className='res'>
                                <li >{ data?.total_pages}</li>
                                <li>{ data?.total_results}</li>
                                <li>{ data?.page}</li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className='pages' >
                    <span onClick={() => increaseDecreasesCounter('increases')}>Next</span>
                    <span >{ counter}</span>
                    <span onClick={() => increaseDecreasesCounter('decreases')}>Prv</span>
                </div>
            </div>
            
        </div>
    )
}

export default SearchDetailes; 