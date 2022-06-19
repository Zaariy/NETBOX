import React from 'react';
import '../css/search.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';



function Search() {
    const [dataSearch, setdataSearch] = useState('');
    
    return (
        <div className='search'>
            <div className='container'>
                <div className='content'>
                    <input type='text' onChange={(e) => setdataSearch(e.target.value)} placeholder='Search Here ...' ></input>
                    
                    <Link state={{id : dataSearch}} to={`/search/${dataSearch}`}>Submit</Link>
                </div>
            </div>
        </div>
    )
}


export default Search;
