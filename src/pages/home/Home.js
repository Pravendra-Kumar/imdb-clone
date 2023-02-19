
import React, { useEffect, useState } from "react";
import './Home.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/MovieList";

const Home=()=>{

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(()=>{
        const url="https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
       fetch(url)
      .then((res)=>res.json())
      .then((data)=>{
        //console.log(data.results)
           setPopularMovies(data.results)});
    
    },[])

    return(
        <>
        <div className="poster">
        <Carousel
                    autoPlay={true}
                    showThumbs={false}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
          >
          {
            popularMovies.map((movie, index)=>(
            <Link key= {index} className="App-link" to={`/movie/${movie.id}`} >
              <div className="posterImage">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`}/>
              </div>
              <div className="posterImage-overlay">
                   <div className="posterImage-title">
                   {movie?movie.original_title: ""} 
                   </div>
                   <div className="posterImage-runtime">
                        {movie?movie.release_date: ""}
                        <span className="posterImage-rating">
                           {movie ?movie.vote_average:""}
                           <i className="fas fa-star">
                           {" "}
                           </i>
                        </span> 
                  </div>
                  <div className="posterImage-description">
                   {movie?(movie.overview).slice(0,200):""}
                  </div>

              </div>
              </Link>
              
              ))
          }
          </Carousel>
          <MovieList/>
        </div>
        
    
        </>
    )
}

export default Home;