import './App.css';
import {BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './pages/Home';
import ShowMOV from './pages/TvShow';
import DiscoverTvShow from './pages/discover';

function App() {
  return (
    <main className="App ">
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/tvshow/:id'} element={<ShowMOV  />} />
            <Route path={'/discovertvshows'} element={<DiscoverTvShow page={"popular"} />} />
            <Route path={'/discovertvshows/popular'} element={<DiscoverTvShow  page={"popular"}  />} />
            <Route path={'/discovertvshows/upcoming'} element={<DiscoverTvShow  page={"upcoming"} />} />
            <Route path={'/discovertvshows/tranding'} element={<DiscoverTvShow  page={"tranding"} />} />
            <Route path={'/*'} element={<Home />} />
        </Routes>  
    </BrowserRouter>
    </main>
  )
}

export default App;
