import React from 'react'
import { useState,useEffect } from 'react'
import '../nuevos-estilos.css/header.css'

export default function Header() {
  const [movieImage,setMovieImage]=useState(null)
  const [movieNumber,setMovieNumber]=useState(Math.floor(Math.random()*20))

useEffect(()=>{
fetch(`https://api.themoviedb.org/3/discover/movie?api_key=b3779b706b0e128230bce9b6c8ac8be4`)
.then(res=>res.json())
.then(data=>setMovieImage(data))
},[])
useEffect(()=>{
  setMovieNumber(Math.floor(Math.random()*20))
  },[])



  return (
    <div className='header-container'>
    {movieImage && <>
      <img className='header-image' src={`https://image.tmdb.org/t/p/w1280${movieImage.results[0].backdrop_path}`}/>
    <h1 className='header-title'> {movieImage.results[0].title}</h1>
</>}
    </div>
  )
}


  
