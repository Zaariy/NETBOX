import './App.css';
import Header from './component/Header.jsx';
import Search from './component/Search.jsx';
import MainPage from './component/MainPage.jsx';
import SearchDetailes from './component/SearchDetailes';
import Navigation from './component/Navgation';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import ShowMovies from './component/ShowMovie';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <div>
                <Header />
                <Search />
                <MainPage />
            </div>
            } />
          <Route path='/search/:id' element={
            <div>
              <Navigation />
              <Search  />
              <SearchDetailes  />
            </div>
          } /> 
          <Route  path='/movie' element={<ShowMovies />} />
        </Routes>
      </BrowserRouter>
   
   </div> 
  )
}

export default App;
