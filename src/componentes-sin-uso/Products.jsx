import { useState ,useEffect} from "react"
import Item from "./item"


 function Products() {

const [product, setProduct]=useState([])

useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then((res)=>res.json())
    .then((data)=>setProduct(data))}, [])

   

  return (
  <Item product={product}/>
  )
}

export default Products