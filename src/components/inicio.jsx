import React from 'react'
import Carrusel from './carrusel'
import MoviesContainer from './MoviesContainer'
import Header from './Header'

export default function Inicio() {
  return (
    <>
      <Header /> 
      <MoviesContainer />
      <Carrusel title='upcoming' apiUrl={`https://api.themoviedb.org/3/movie/upcoming?api_key=b3779b706b0e128230bce9b6c8ac8be4`} />
      <Carrusel title='top rated series' apiUrl={`https://api.themoviedb.org/3/tv/top_rated?page=1&api_key=b3779b706b0e128230bce9b6c8ac8be4`} />
      <Carrusel title='popular movies' apiUrl={`https://api.themoviedb.org/3/movie/popular?page=1&api_key=b3779b706b0e128230bce9b6c8ac8be4` } />
      <Carrusel title='top rated movies' apiUrl={`https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=b3779b706b0e128230bce9b6c8ac8be4`} />
    </>
  )
}
