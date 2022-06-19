import React from 'react';
import PopularMovies from './PopularMovies.jsx';
import TvShows from './TvShows.jsx';
import TrandingMovies from './Tranding.jsx';
import Footer from './Footer.jsx';
function MainPage() {
    return (
        <div>
            <PopularMovies /> 
            <TvShows />
            <TrandingMovies />
            <Footer /> 
        </div>
    )

}
export default MainPage;