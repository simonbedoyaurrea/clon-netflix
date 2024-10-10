import React from "react";
import { useState,useEffect } from "react"; 
import '../estilos/characters.css'




 function Characters() {

const [id, setId]=useState(1) 
const [character,setCharacter]=useState()

const next=()=>{
    setId(id+1)
}
const previous=()=>{

    id>1 && setId(id-1)
}


useEffect(()=>{
fetch(`https://rickandmortyapi.com/api/character/${id}`)
.then((res)=>res.json() )
.then((data)=>setCharacter(data))
},[id])

  return (
   <>{
character &&
<>
<div className="content">
<button className='rick-and-morty-button' onClick={previous}> <img src="https://static.vecteezy.com/system/resources/previews/015/696/386/original/portal-in-space-to-other-universes-png.png" /><span> &lt; </span></button>
    <div className="card-container">
   <h2>{character.name}</h2>
   <img src={character.image}/>
   <p>Especie: <span className="especie">{character.species}</span></p>
   </div>
   <button className='rick-and-morty-button' onClick={next}><img src="https://static.vecteezy.com/system/resources/previews/015/696/386/original/portal-in-space-to-other-universes-png.png" /><span> &gt;</span></button>
   </div>
 </>
   }
   </>
  )
}




export default Characters