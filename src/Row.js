import React, { useState , useEffect} from 'react'
import './Row.css'
import axios from 'axios';

//const baseUrl = 'https://image.tmdb.org/t/p/original'

function Row({title , fetchUrl ,isLargeRow = false }) {
const[movie , setMovie] = useState([]);

useEffect( () => {
  const fetchData = async () =>{
      try{
          const request = await axios.get(`https://api.themoviedb.org/3${fetchUrl}`);
          setMovie( request.data.results)
      }
      catch(error){
          console.error(error)
      }
  }
  fetchData();
} , [fetchUrl])
console.log(movie)

  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
          
        {movie ? movie.map( (item) => {
          return <img className={`row_poster ${isLargeRow && "row_posterLarge"}`}
           src={`https://image.tmdb.org/t/p/original/${isLargeRow && item.poster_path && item.backdrop_path? item.poster_path : item.backdrop_path}`} 
           alt={item.name}/>

        }) : <p>image not found</p>}
        </div>
       
    </div>
  )
}

export default Row;