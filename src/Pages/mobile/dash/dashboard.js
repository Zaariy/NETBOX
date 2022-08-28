import React from 'react';
// import menu mobile from m_menu 
import Menu from '../../../Components/m_menu/menu';
// import Header from m_header
import Mheader from '../../../Components/m_header/Mheader';
// import carts 
import Carts from '../../../Components/carts/Carts';


import "./mainPage.css";

function Dashboard() {
  
  return (
    <div className='m-dashboard'>
        <div className='content container'>
        <Mheader />
        <Carts title={'Up coming'} url={'movie/upcoming'} page={1}  ></Carts>
        <Carts title={'Populer'} url={'movie/popular'} page={2}  ></Carts>
        <Carts title={'Tv/Show'} url={'tv/popular'} page={1}  ></Carts>
        <Menu /> 
        </div>       
    </div>
  )
}

export default Dashboard