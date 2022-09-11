import React from "react";
import Header from '../../components/Header/index';
import MenuShow from '../../components/MenuShow/index';
import MainDiscoverTvShow from '../DiscoverTvShow/index'; 
import './style/main.css'


function DiscoverTvShow({page}) {
    
    
   
    return (
        <>
            <Header ></Header>
            <div className="discover-tv-show container">
                <MenuShow page={page} />
                <MainDiscoverTvShow page={page}  />               
            </div>
        </>
    )
}





export default DiscoverTvShow;