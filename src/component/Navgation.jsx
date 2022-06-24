import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear , faBars , faFilm , faRankingStar , faFire , faHouse} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
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
                        <li ><a href='/'>Home</a></li>
                        <li><a href='/popular'>Popular</a></li>
                        <li><a href='/trand'>Tranding</a></li>
                    </ul>
                    <div className='menu'>
                        <FontAwesomeIcon className='menuBars'  onClick={() =>  setStatusMenu(!seeStatusMenu) } icon={faBars} />
                        <ul className={seeStatusMenu ? 'mainMenu active' : "mainMenu"}>

                            <li ><Link to={'/'}><FontAwesomeIcon icon={faHouse} />Home</Link></li>
                            <li><a href='/popular'><FontAwesomeIcon icon={faFire} />Pupoler</a></li>
                            <li><a href='/trand'><FontAwesomeIcon icon={faRankingStar} />Tranding</a></li>
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