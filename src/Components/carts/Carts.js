import React from 'react'
// import useFetch from hooks
import useFetch from '../../Hooks/useFetch';
// import cart components
import Cart from '../cart/cart'; 
// import sccss
import './carts.css';

function Carts({ url,  title  , page=1}) {
  const { data, state } = useFetch(url, 'get', `page=${page}`);
  return (
    <div className='carts'>
      <h1>{ title}</h1>
      <div className='content'>
      {
        state ? (
          data.results.map((ele , index) => {
            return (
              <Cart key={index} data={{
                poster_path: ele.poster_path,
                title: ele.title,
                release_date: ele.release_date,
                id: ele.id , 
              }} />
            )
          })
        ) : '' 
      }

      </div>
    </div>
  )
}

export default Carts; 

