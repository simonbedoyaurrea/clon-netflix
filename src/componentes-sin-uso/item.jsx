import React from 'react'
import { useEffect,useState } from 'react'
import '../estilos/products.css'

 function Item({product}) {

  return (
  <div className='contenedor-productos'>
   { product.map((item)=>
        <div className='item' key={item.id}>
        <img src={item.image}/>
        <div className='item-info'>
        <h1>{item.title}</h1>
        <button className='ver-mas-boton'>Ver más</button>
        </div>
        </div>)
}
   </div>
 )
}


export default Item