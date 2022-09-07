import React from "react";
import './style/main.css';
import Header from '../../components/Header/index' // import Header from global components
import Slider from "./components/slider"; // import Slider from local components
import FavoriteMOV from "./components/favoriteMovie"; // import FavoriteMovie component
function Home() {

    return (
        <div className="home">
            <Header />
            <Slider />
            <FavoriteMOV  />
        </div>
    )
}

export default Home;