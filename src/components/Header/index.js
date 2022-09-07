import React , {useState} from "react";
import { Link } from "react-router-dom";
import './style/main.css'
import Search from "../Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBell,
    faCaretDown,
    faBars,
    faGear,
    faUser,
    faArrowRightFromBracket

} from '@fortawesome/free-solid-svg-icons';
// import images for test 
const brand = require('../../assets/netbox.png');
const userImg = require('../../assets/user-img.png');
function Header() {
    const [states, setStates] = useState({
        popUserMenu : false,
    })
    return (
        <header className="container">
            <div className="brand">
                <img src={brand} alt="brand"></img>
            </div>

            <div className="content">
                <Search />
                <div className="user">
                    <FontAwesomeIcon icon={faBell} className='icon-bell' />
                    <img src={userImg} alt="avatar" className="avatar"></img>
                    <span onClick={() => setStates((prv) => {
                        return {...prv , popUserMenu : !states.popUserMenu}
                    })}>
                        <FontAwesomeIcon icon={faCaretDown} className='icon-caret' />
                    </span>
                    <ul style={{"display" : states.popUserMenu ? "block": "none"}} className="pop-menu-user">
                        <li>
                            <img src={userImg} alt="avatar" className="avatar"></img>
                            <span>Kivn</span>
                        </li>
                        <li>
                            <Link to='/'>
                                <FontAwesomeIcon icon={faUser} className='icon' />
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <FontAwesomeIcon icon={faGear} />
                                Settings
                            </Link>
                        </li>
                        <li>
                            <Link to='/'>
                                <FontAwesomeIcon icon={faArrowRightFromBracket} />
                                log Out
                            </Link>
                        </li>
                    </ul>
                </div>
                <FontAwesomeIcon icon={faBars} className='menu-icon' />
            </div>
        </header>
    )
}
export default Header;