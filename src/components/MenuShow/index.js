import React from 'react';
import { Link } from 'react-router-dom';
import './style/main.css';

function MenuShow({page}) {
    return (
        <aside className='menu-tv-show'>
            <span>Menu</span>
            <ul>
                <li style={{"backgroundColor" : page === 'popular' ? 'var(--red-color)' : null }}>
                    <Link to={"/discovertvshows/popular"}>
                        Popular
                    </Link>
                </li>
                <li style={{"backgroundColor" : page === 'upcoming' ? 'var(--red-color)' : null }}>
                    <Link to={"/discovertvshows/upcoming"}>
                        Up Coming 
                    </Link>
                </li>
                <li  style={{"backgroundColor" : page === 'tranding' ? 'var(--red-color)' : null }}>
                    <Link to={"/discovertvshows/tranding"}>
                        Tranding 
                    </Link>
                </li>
            </ul>
        </aside>
    )
}

export default MenuShow;