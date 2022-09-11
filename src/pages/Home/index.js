import React , {useState , useEffect} from "react";
import './style/main.css';
import Header from '../../components/Header/index' // import Header from global components
import Slider from "./components/slider"; // import Slider from local components
import FavoriteMOV from "./components/favoriteMovie"; // import FavoriteMovie component
import Loader from "../../components/loader";

function Home() {
    const [progress, setPro] = useState(false);

    
    useEffect(() => {
        setTimeout(() => {
            setPro(true)
        } , 2000)
    } , [])
    return (
        <div className="home">
            <Header />
            {
                progress ? (
                    <>
                        <Slider  />
                        <FavoriteMOV  />
                    </> 
                ) : <Loader /> 
            }
        </div>
    )
}

export default Home;