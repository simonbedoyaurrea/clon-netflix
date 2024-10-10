import React, { useState } from 'react'
import '../estilos/nav.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';


function Nav({nombre,enlace1,enlace2,enlace3}) {
  const [navColor, setNavColor] = useState('transparent');

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavColor('rgba(0, 0, 0, 1)'); // Cambia a un color oscuro
    } else {
      setNavColor('transparent'); // Mantén el color transparente
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className='netsy'  style={{ backgroundColor: navColor }}>
    <Link className='logo-netsy'  to='/' ><h1 className='nombre-netsy'>{nombre}</h1></Link>
    <ul className='links'>
    <li><Link to='search' className="link"><FaSearch /></Link></li>
    <li><Link to="/" className="link">{enlace1}</Link></li>
    <li><Link to="/" className="link">{enlace2}</Link></li>
    <li><Link to='/' className="link">{enlace3}</Link></li>
  
    </ul>
   </nav>
  )
}
export default Nav