 import { Link } from 'react-router-dom'
import '../estilos/Navbar.css'
 
 function Navbar() {
  return (
   <nav>
    <a><h1 className="logo">sistore</h1></a>
    <ul className='links'>
    <li><Link to="/" className="link">INICIO</Link></li>
    <li><Link to="/nosotros" className="link">NOSOTROS</Link></li>
    <li><Link className="link">CONTACTO</Link></li>
    </ul>
   </nav>
  )
}

export default Navbar
