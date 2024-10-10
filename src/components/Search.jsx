import React, { useState,useEffect } from 'react'
import { FaSearch } from "react-icons/fa";
import '../nuevos-estilos.css/search.css'
import { useNavigate } from 'react-router-dom';

function Search() {
    const [filtred, setFiltred] = useState(null);
    const [movieName, setMovieName] = useState('');
  
    useEffect(() => {
      if (movieName) {
        fetch(`https://api.themoviedb.org/3/search/multi?query=${movieName}&include_adult=true&api_key=b3779b706b0e128230bce9b6c8ac8be4`)
          .then(res => res.json())
          .then(data => {
              setFiltred(data);}
          )
        }},[movieName])

        const search=(e)=>{
setMovieName(e.target.value)
        }
        const navigate = useNavigate();

  const handleImageClick = (movieId) => {
    navigate(`/details/${movieId}`);
  };


  return (
    <div>
    <div className='search-container'>
        <div className='search-bar'>
        <div className='search-icon'><FaSearch /></div>
        <input type='text' placeholder='Buscar...' className='search-input' onChange={search} />
        </div>{filtred &&
        <div className='filter-image'>
        {filtred.results.filter(item => item.media_type === 'movie' || item.media_type === 'tv').slice(0, 5).map((movie, index) => (
            <img 
              key={index}
              className="searched-image" 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title || movie.name} 
              onClick={()=>{handleImageClick(movie.title || movie.name)}}
            />
          ))}
            </div>
        }
    </div>
  </div>)
}

export default Search