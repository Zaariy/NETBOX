import  React, { useEffect, useState } from 'react';
import  './style/main.css'
import  useFetch from '../../../../hooks/useFetch';
import  api_sources from '../../../../services/api_sources';
import {getToLocalStorage} from '../../../../utils/localstorage';

function FavoriteMOV() {
    const [ids, setIds] = useState({
        ids : ['94997'] , 
        carts : []
    })
    
    const { data, state } = useFetch(`tv/${ids.ids[0]}`, 'get');
    return (
        <div className='favorite-movie container'>
            <div className='header'>
                <h2>My list</h2>
                <span>See All</span>
            </div>
            <div className='carts' >

                <div
                    className='cart'
                    style={{'backgroundImage' : `url(${api_sources.poster_path + data?.poster_path})`}}
                >
                    <span className='name'>{data?.name  }</span>
                </div>
            </div> 
        </div>
    )
}
export default FavoriteMOV;