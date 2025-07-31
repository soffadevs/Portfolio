import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/footer'
import Pic from './../../assets/images/img.png';
import './Home.css';
const Home = () => {

  return (
    <div>
      <Navbar />
      <section className='hero-section'>
      <div className="hero-image">
        <img src= {Pic} alt="My pic" />
      </div>
      <div className="hero-content">
        <h1>Hi, I'm <span>SOFFADEV.</span> A Frontend Developer</h1>
        <p>I'm a passionate frontend developer with a strong interest in full stack development. 
           I enjoy exploring new technologies, conducting research,
          and building creative solutions to real-world problems.
          My goal is to grow into a versatile developer capable of delivering impactful digital experiences.</p>

       {/* <Link to = '/About' id='link'>Get to know more about me</Link> */}

      </div>
      <div className="hero-buttons">
        
      </div>
    </section>
      <Footer />
    
    </div>
  )
}

export default Home