import React , {useState} from 'react' 
import { SliderTranding } from './PageTranding';
import Navigation from './Navgation';
import '../css/popularPage.css';
import FetchApi from '../FetchApi';
import APP_KEY from '../APP_KEY';
import { Link } from 'react-router-dom';
import Footer from './Footer.jsx';

const star = require('../images/starOrange.png');

function MoreMovies(props) {
    const seeState = props.state;
    const [page, setPage] = useState(1); 
    const {data , loading} = FetchApi(`https://api.themoviedb.org/3/${seeState.movies ? "movie" : "tv"}/popular?api_key=${APP_KEY}&language=en-US&page=${page}`)
    
    console.log(data)
    return (
        <div className='content' >
                                {
                        
                loading ? data.results.map((data , index) => {
                    if (index > 17) {
                                return
                            }
                            if (!data?.poster_path) {
                                return
                            }
                            return (
                                 <div className='cart'  key={data?.id}>
                                        <Link to='/movie' state={{"id" : data?.id , "kind" : seeState.movies ? 'movie' : 'tv'}}>
                                            <img className='logo' src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`} alt='logo'></img>
                                        </Link>
                                        <div className='text'>
                                            <p>{data?.release_date || data?.first_air_date}</p>
                                            <h3>{ data?.title || data?.name}</h3>
                                            <span><img src={star}></img>{data?.vote_average}<span>{seeState.movies ? "movie" : 'tv'}</span> </span>
                                        </div>
                                    </div>
                            )
                       }) : <div className='animation'>
                                <span>L</span>        
                                <span>O</span>
                                <span>D</span>
                                <span>I</span>
                                <span>N</span>
                                <span>G</span>
                            </div>
            } 
            <button onClick={() => setPage(page + 1)}>More</button>
        </div>
    )

}


function PopularPage() {
    const [seeState, setState] = useState({ 'movies': true, 'tv': false })
    
    
    return ( 
        <div className='allPopularPage'>
            <Navigation />
            <SliderTranding name='https://api.themoviedb.org/3/movie/popular' />
            <div className='pagePopular'>
                <div className='container' >
                <h1 className='tag'><span>Popular </span>Movies</h1>
                    <div className='choices' >
                        <span style={{'backgroundColor' : seeState.tv ? 'var(--main-color-orange)' : 'var(--main-color-b)' }} onClick={() => {
                            setState({ movies: false, tv: true })
                        }}  >TV</span>
                        <span style={{'backgroundColor' : seeState.movies ? 'var(--main-color-orange)' : 'var(--main-color-b)' }} onClick={() => {
                            setState({ tv: false, movies: true })
                        }}> Movies</span>
                    </div>
                    <MoreMovies state={seeState} />
                 </div>
            </div>
            <Footer />
        </div>
    )
}

export default PopularPage;