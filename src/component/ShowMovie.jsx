import React from 'react';
import '../css/showMovie.css';
import {Link} from "react-router-dom"
import FetchApi from '../FetchApi.js';
import APP_KEY from '../APP_KEY.js';
import Footer from './Footer.jsx';
import { useLocation } from 'react-router-dom';




const star = require('../images/star-full.png');
// Catst Component
function Casts(props) {
    const id_movie = props.id;
    const {data , loading } = FetchApi(`https://api.themoviedb.org/3/movie/${id_movie}/credits?api_key=${APP_KEY}`)
    

    return (
        <div className='casts'>
            <div className='container' >
                <h1>Casts :</h1>
                <div className='content' >
                    {
                        loading ? data.cast.map((data) => {
                            if (!data?.profile_path) {
                               return
                           }
                            return (
                                <div className='item' >
                                    <img src={`https://image.tmdb.org/t/p/w500${data?.profile_path}`}></img>
                                    <span>{ data?.name }</span>
                                </div>
                            )
                        }) : <div>Loadding ..</div>


                    }
                </div>
            </div>
        </div>
    )

}   


// Trailer Component
function TrailerShow(props) {
    const id_movie = props.id;

    const { data, loading } = FetchApi(`https://api.themoviedb.org/3/movie/${id_movie}/videos?api_key=${APP_KEY}`)
    

    
    return (

        <div className='trailer'>
                    <div className='container' >
                        <h1 className='tag'><span>Trailer </span>Show</h1>
                        <div className='content' >
                            {
                        data?.results.map((data, index) => {

                            return (
                                        
                            <div className='item' key={data?.id}>
                                <iframe 
                                        src={`https://www.youtube.com/embed/${data?.key}`}>
                                </iframe>
                            </div>
                                    )
                                })
                            }
                        </div>
                    </div>
        </div>
    )
}

// Reacommandation Component
function Reacommendation(props) {
    const id_movie = props.id
    const {data , loading} = FetchApi(`https://api.themoviedb.org/3/movie/${id_movie}/recommendations?api_key=${APP_KEY}&language=en-US&page=1`)
    console.log(data)
    return (
        <div className='recommendation' >
            <div className='container' >
                <h1>Recommendation</h1>
                <div className='content'>
                    {
                        loading ? data.results.map((data) => {
                            return (
                                <div className='item'>
                                    <Link state={{ "id": data?.id, "kind": 'movie' }} to={'/movie'}>
                                        <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}></img>
                                        
                                    </Link>
                                    <span>{ data?.original_title}</span>
                                </div>
                            )
                        }) : <div className='loading' >Loading....</div>
                    }
               </div>
            </div>
        </div>
    )
}


function ShowMovies() {
    const data_id = useLocation();
    const kind = data_id.state.kind
    const id_movie = data_id.state?.id;
    
    const {data , loading} = FetchApi(`https://api.themoviedb.org/3/${kind}/${id_movie}?api_key=${APP_KEY}&language=en`) 
    

    return (
        <div className='showMovie' >
            <div className='content'>
                {
                    loading ? (
                        <div>        
                            <div className='images' style={{"backgroundImage" : `url(https://image.tmdb.org/t/p/original${data?.backdrop_path})`}}>
                                <img src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt='img'></img>
                            </div>
                            <div className='text' >
                                    <div className='container'>
                                        <ul>
                                            <li><span>Data :</span> { data?.release_date}</li>
                                            <li>{data?.original_title }</li>
                                            <li>
                                            {data?.spoken_languages.map((data) => {
                                                return (
                                                    
                                                        <span key={data?.id}>{ data.english_name}</span>
                                                   )
                                                }) 
                                                }
                                            </li>
                                            <li><img src={star} alt='img'></img>{ data?.vote_average}</li>
                                            <li><a href={`https://www.2embed.ru/embed/imdb/movie?id=${data?.imdb_id}`} target='_blanck'>Watch</a></li>
                                        </ul>
                                        <div className='story'>
                                            <h2>Overview :</h2>
                                            <p>
                                                {
                                                    data?.overview
                                                }
                                            </p>
                                        </div>
                                    </div>
                            </div>

                        </div>
                    ) : <div>Loading</div>
                }

                <Casts id={id_movie}  />
                <TrailerShow id={id_movie} /> 
                <Reacommendation id={id_movie} />
                <Footer />
            </div>
        </div>
    )
}
export default ShowMovies;
