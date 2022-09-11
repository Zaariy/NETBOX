import React from "react";
import './style/main.css';
import { Link } from "react-router-dom";
import sources from "../../services/api_sources";
import { setToLocalStorage  , checkMovieOnList} from '../../utils/localstorage';

function CartTvShow({img , title  , id}) {
    
    return (
            <div
                className="cart-tv-show"
            >
                <Link to={`/tvshow/${title}`} state={{ id: id }} >
                    <img src={sources.poster_path + img} alt="logo recommendations"></img>
                </Link>

            <span
                className="add"
                onClick={(e) => {
                    e.target.style.backgroundColor = "var(--red-color)" 
                    setToLocalStorage('list_movies' , id )
                }}
                style={{'backgroundColor' : checkMovieOnList(id) ? "var(--red-color)" : "rgba(128, 128, 128, 0.795)" }}
            >+</span>
            </div>
    )
}
export default CartTvShow;