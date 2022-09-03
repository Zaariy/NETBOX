import React from "react";
import './style/main.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {

    return (
        <div className="search-input">
            <input type='text' placeholder="I'm searching for ..."></input>
            <FontAwesomeIcon icon={faSearch}  className='icon-search' />
        </div>
    )
}
export default Search;