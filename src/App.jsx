import './App.css'
import Nav from './components/Nav'
import { Routes,BrowserRouter,Route } from 'react-router-dom'
import Search from './components/Search'
import Inicio from './components/inicio'
import MovieInfo from './components/MovieInfo'



function App() {

  return (
    <>
    <BrowserRouter>
   
   <Nav nombre="netsy" enlace1="INICIO" enlace2="CATEGORIAS" enlace3="POPULARES"/>

      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='search' element={<Search/>} />
        <Route path="/details/:movieId" element={<MovieInfo />} />
      </Routes>

    
    </BrowserRouter>

    

</>
  )
}

export default App
