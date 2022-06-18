import React from 'react';
import PopularMovies from './PopularMovies.jsx';
import TvShows from './TvShows.jsx';
import TrandingMovies from './Tranding.jsx';

function MainPage() {
    return (
        <div>

            <PopularMovies /> 
            <TvShows />
            <TrandingMovies />
            
        </div>
    )

}
export default MainPage;