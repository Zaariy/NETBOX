import React from 'react';
import '../css/search.css';

function Search() {
    return (
        <div className='search'>
            <div className='container'>
                <div className='content'>
                    <input type='text' placeholder='Search Here ...' ></input>
                    <a href='#'>Submit</a> 
                </div>
            </div>
        </div>
    )
}


export default Search;
