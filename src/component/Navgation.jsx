import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGear , faBars  , faRankingStar , faFire , faHouse} from '@fortawesome/free-solid-svg-icons';
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
                        <li ><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/popular'}>Popular</Link></li>
                        <li><Link to={'/trand'}>Tranding</Link></li>
                    </ul>
                    <div className='menu'>
                        <FontAwesomeIcon className='menuBars'  onClick={() =>  setStatusMenu(!seeStatusMenu) } icon={faBars} />
                        <ul className={seeStatusMenu ? 'mainMenu active' : "mainMenu"}>

                            <li ><Link to={'/'}><FontAwesomeIcon icon={faHouse} />Home</Link></li>
                            <li><Link to={'/popular'}><FontAwesomeIcon icon={faFire} />Pupoler</Link></li>
                            <li><Link to={'/trand'}><FontAwesomeIcon icon={faRankingStar} />Tranding</Link></li>
                            <li className='sys'>
                                System :
                                <ul className='subMenu'>
                                    <li><Link to={'#'}><FontAwesomeIcon className='subMenuIconSetings' icon={faGear} />Setings</Link></li>
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