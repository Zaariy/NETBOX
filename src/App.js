import './App.css';
import Header from './component/Header.jsx';
import Search from './component/Search.jsx';
import MainPage from './component/MainPage.jsx';
import SearchDetailes from './component/SearchDetailes';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import ShowMovies from './component/ShowMovie.jsx';
import {PageTranding} from './component/PageTranding.jsx';
import PopularPage from './component/PagePopular';

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
              <SearchDetailes  />
          } /> 
          <Route  path='/movie' element={<ShowMovies />} />
          <Route path='/trand' element={<PageTranding />} />
          <Route path='/popular' element={<PopularPage />} />
        </Routes>
      </BrowserRouter>
   
   </div> 
  )
}

export default App;
