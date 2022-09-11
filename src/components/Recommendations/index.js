import React from 'react';
import './style/main.css';
import useFetch from '../../hooks/useFetch';
import CartTvShow from '../CartTvShow';

function Recommendations({ id }) {
    
    const { data, state } = useFetch(`/tv/${id}/recommendations`, 'get', null, [id]);

    return (
        <div className='recommendation container'>
            <h2>
                Recommendations 
            </h2>
            <div className='carts-tv-show' >
                {
                    state ? (
                        data.results.map((ele, index) => {

                            if (ele?.poster_path) {
                                return (
                                    <CartTvShow
                                        key={index}
                                        id={ele?.id}
                                        img={ele?.poster_path}
                                        title={ele?.name}
                                    />
                                )
                            }
                        })
                    )  : null
                }             
            </div>
        </div>
    )
}

export default Recommendations;