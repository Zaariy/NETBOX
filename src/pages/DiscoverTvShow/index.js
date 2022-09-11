import React , {useState , useEffect} from 'react';
import './style/main.css'
import useFetch from '../../hooks/useFetch';
import CartTvShow from '../../components/CartTvShow';
import Loader from '../../components/loader/index';

function MainDiscoverTvShow({page}) {
    const [counterLoader, setCounter] = useState(1);
    const { data, state } = useFetch(selectUrl(page), "get", `&page=${counterLoader}`, [page , counterLoader]);

    function selectUrl(page) {
        switch  (page ){
            case 'popular':
                return "tv/popular" 
            case 'tranding':

                return "trending/tv/week"
            case 'upcoming':
                return "tv/top_rated"
            default:
                return "tv/popular"
        }
    }
    useEffect(() => {
        return () => {
            setCounter(1)
        }
    } , [page])
    return (
        <div className='carts-discover-tv-show'>
            {

                state ? (
                    data?.results?.map((ele, index) => {
                        if (ele?.poster_path) {
                            return <CartTvShow
                                img={ele?.poster_path}
                                title={ele?.name}
                                id={ele?.id}
                                key={index}
                                
                            />
                        }
                    })
                ) : <Loader /> 
            }
            {
                state ? (
                
                    <div className='btn-loader'>
                        <button
                            onClick={() => {
                                setCounter((prv) => prv =  prv + 1)
                            }}
                        >See More</button>
                    </div>

                ) : null
            }
        </div>
            
    )
}

export default MainDiscoverTvShow;