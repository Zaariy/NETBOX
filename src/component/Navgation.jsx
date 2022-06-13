import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear , faBars , faFilm , faRankingStar , faFire} from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom'; 
import '../css/navigation.css';
import { useState } from 'react';

const logo = require('../images/logo.png');

function Navigation() {

    const [seeStatusMenu, setStatusMenu] = useState(false);


    
    return (
        <nav>
            <div className="container" >
                
                <div className='navGation'>
                    <img src={logo} alt='logo'></img>
                    <ul className='mainNav'>
                        <li ><a href='#'>Movies</a></li>
                        <li><a href='#'>Pupoler</a></li>
                        <li><a href='#'>Tranding</a></li>
                    </ul>
                    <div className='menu'>
                        <FontAwesomeIcon className='menuBars'  onClick={() =>  setStatusMenu(!seeStatusMenu) } icon={faBars} />
                        <ul className={seeStatusMenu ? 'mainMenu active' : "mainMenu"}>
                            <li ><a href='#'><FontAwesomeIcon icon={faFilm} />Movies</a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faFire} />Pupoler</a></li>
                            <li><a href='#'><FontAwesomeIcon icon={faRankingStar} />Tranding</a></li>
                            <li className='sys'>
                                System :
                                <ul className='subMenu'>
                                    <li><a href='#'><FontAwesomeIcon className='subMenuIconSetings' icon={faGear} />Setings</a></li>
                                </ul> 
                            </li>
                        </ul>
                        
                    </div>
                    <FontAwesomeIcon className='iconSetings' icon={faGear} />                
                </div>            
            </div>
        </nav>
    )
}
export default Navigation;