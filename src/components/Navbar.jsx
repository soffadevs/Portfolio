import React from 'react'
import { Link } from 'react-router-dom';
import './CSS/Navbar.css';

const Navbar = () => {
  return (
    <div className='Navbar'>

      <h1 className='Nav-text'>Text</h1>
          
          <ul className='Nav' >
           <Link to = '/'>Home</Link>
           <Link to = '/About'>About</Link>
           <Link to = '/Project'>Project</Link>
          <Link to = '/Contact'>Contact</Link>
          </ul>
          
  

    </div>

    
  );
}

export default Navbar