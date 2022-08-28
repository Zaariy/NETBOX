import React from 'react';
import './mheader.css';
import { Link } from 'react-router-dom';

const logo = require('../../assets/logo.png');
const iconPoints = require('../../assets/icons8-more-30.png');
function Mheader() {
  return (
    <header>
      <div className='content'>
        <img src={logo} alt='logo' />
        <Link to={'/'}><img src={iconPoints} alt='iconMenu'></img></Link>
      </div>
    </header> 
  )
}

export default Mheader