import React , {useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import file menu.scc 
import './menu.css';
import {
  faHouse,
  faBookmark ,
  faMagnifyingGlass ,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Menu() {
  const btnMenu = useRef(null);
  // add classes on Click btn
  function addClasses(e) {
    /*
     we will take children of ul list and then
     when user click on any button on menu 
     we will add class  active-m-btn-menu 
    */
    const li = btnMenu.current.children;
    // convert li to array to loop on it.
    const array= [...li];
    array.forEach((element) => {
      if (Number(element.id) === Number(e.nameId)) {
        element.classList.add('active-m-btn-menu');
      } else {
        element.classList.remove('active-m-btn-menu');
       }
    })
  }

  
  return (
    <div className='m-menu'>
        <ul ref={btnMenu}>
        <li onClick={(e) => {e.nameId = 1;addClasses(e) }} id='1' >
            <Link to={'/'}>
                <FontAwesomeIcon className='m-menu-icon' icon={faHouse} />
            </Link>
            </li>
            <li  onClick={(e) => {e.nameId = 2; addClasses(e)}} id='2' >
            <Link to={'/'}>
                <FontAwesomeIcon className='m-menu-icon' icon={faBookmark} />
            </Link>
            </li>
            <li onClick={(e) => { e.nameId = 3; addClasses(e)}} id="3">
            <Link to={'/'}>
                <FontAwesomeIcon  className='m-menu-icon'   icon={faMagnifyingGlass} />
            </Link>
            </li>
          <li onClick={(e) => { e.nameId = 4; addClasses(e)}} id="4" >
            <Link to={'/'}>
                <FontAwesomeIcon  className='m-menu-icon'  icon={faUser} />
            </Link>
            </li>
        </ul>
    </div>
  )
}

export default Menu