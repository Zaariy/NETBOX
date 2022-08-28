import React from 'react';
import { Link } from 'react-router-dom';
import './cart.css';
function Cart(props) {
    const {poster_path ,release_date , title , id } = props.data;
  return (
    <div className='cart'>
          <div className='content'>
              <Link to={'/'}><img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt='img movie'></img></Link>
              <div className='info'>
                  <h1>{title }</h1>
                  <span> {release_date }</span>
              </div>
        </div>
        
    </div>
  )
}

export default Cart;