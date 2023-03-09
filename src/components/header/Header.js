import React from "react"
import "./Header.css";
import { Link } from "react-router-dom";

function Header(){
    return(
        <div className="header">
          <div className="header-left">
               <Link className="App-link"to="/" ><img className="header-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"/></Link>
          </div>
            <div className="header-right">
               <Link className="App-link"to="/movies/popular" ><span>Popular</span></Link>
               <Link className="App-link"to="/movies/top_rated" ><span>Top Rated</span></Link>
               <Link className="App-link"to="/movies/upcoming" ><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header;