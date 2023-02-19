import React, {useEffect, useState} from "react";
import Card from '../card/Card';
import './MovieList.css';
import { useParams } from "react-router-dom";//Params id provided dyanmic link

const MovieList=()=>{
    const [movieList, setMovieList] = useState([]);

    const {type}=useParams()

    useEffect(()=>{
        getData()
    }, [])

    useEffect(()=>{
        getData()
    }, [type])

    const getData=()=>{
      const url=`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
       fetch(url)
      .then((res)=>res.json())
      .then((data)=>{
        //console.log(data.results)
           setMovieList(data.results)
        });
    }

    return <div className="movie-list">
        <h2 className="list-title">{(type ? type:"POPULAR").toUpperCase()}</h2>
        <div className="list-cards">
        {
            movieList.map((movie,index)=>(
              <Card key={index} movie ={movie}/>  
            ))
        }
        </div>
    </div>
}

export default MovieList;