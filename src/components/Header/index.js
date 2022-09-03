import React from "react";
import './style/main.css'
import Search from "../Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell , faCaretDown } from '@fortawesome/free-solid-svg-icons';
// import images for test 
const brand = require('../../assets/netbox.png');
const userImg = require('../../assets/user-img.png');
function Header() {

    return (
        <header>
            <div className="brand">
                <img src={brand} alt="brand"></img>
            </div>

            <div className="content">
                <Search />
                <div className="user">
                    <FontAwesomeIcon icon={faBell} className='icon-bell' />
                    <img src={userImg} alt="avatar" className="avatar"></img>
                    <span>
                        <FontAwesomeIcon icon={faCaretDown} className='icon-caret' />
                    </span>
                </div>
            </div>
        </header>
    )
}
export default Header;