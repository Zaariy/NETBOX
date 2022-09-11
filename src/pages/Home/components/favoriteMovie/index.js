import  React  , {useEffect , useState} from 'react';
import  './style/main.css'
import  {API_KEY} from '../../../../hooks/useFetch';
import  api_sources from '../../../../services/api_sources';
import axios from 'axios';
import {getToLocalStorage } from '../../../../utils/localstorage';
import  Loader from '../../../../components/loader/index'
import { Link } from 'react-router-dom';

function FavoriteMOV() {
    const [favoriteTvShow, setFTS] = useState({
        tvShowData: [],
        state : false
    }) // FTS : Favorite Tv Show
    function collectFTS() {

        const idsTvShow = getToLocalStorage('list_movies')
        
        if (idsTvShow === false) {
            setFTS((prv) => {
                return {...prv , state : true}
            })
            return
        }

        const FTS =  []
        
        for (let i = 0; i < idsTvShow.length ; i++) {
            axios.get(`${api_sources.url}/tv/${idsTvShow[i]}?api_key=${API_KEY}`).then((data) => {
                FTS.push(data.data)
            })
        }
      

        // re-render 
        // waiting for fetch all episodes
        setTimeout(() => {
            
            setFTS((prv) => {
                return {...prv , tvShowData: FTS , state : true}
            })
        }, 1000 )
    }
    useEffect(() =>  {
        collectFTS()
    } , [])
    return (
        <div className='favorite-movie container'>
            <div className='header'>
                <h2>My list</h2>
                <span>See All</span>
            </div>
            <div className='carts' >
                {
                    favoriteTvShow.state ? (
                        favoriteTvShow?.tvShowData?.map((ele , index) => {
                            if (index > 5) {
                                return null
                            }
                            return (
                                <Link key={index} to={`/tvshow/${ele?.name}`} state={{id : ele?.id}}>
                                <div
                                    
                                    className='cart'
                                    style={{ 'backgroundImage': `url(${api_sources.poster_path + ele?.poster_path})` }}
                                    
                                >
                                    <span className='name'>{ele?.name}</span>
                                </div>
                                </Link>
                            )
                        })
                    ) : <Loader /> 
                }
            </div> 
        </div>
    )
}
export default FavoriteMOV;