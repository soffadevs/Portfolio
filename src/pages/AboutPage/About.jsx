import React from 'react'
import Navbar from '../../components/Navbar'
import './About.css'
const About = () => {
  return (
    <div>
   
                      <Navbar/>
        <div className='about-title'>
          <h1 style={{textAlign: 'center', padding: '10px', textTransform: 'uppercase', color: 'blue', fontWeight: 800, fontSize: '40px'}}>About Me</h1>
        </div>

       <section className='about-section'>
         <div className='about-text'>
          <p>Hi, I'm <span>SOFFIYAH ABDURRAZAQ</span>, a Frontend Developer on a mission to become a Full Stack Developer.
            I began my tech journey with a strong curiosity about how websites are built, and that curiosity quickly grew into a passion.
            During my training, I gained hands-on experience with HTML, CSS, JavaScript, Bootstrap, and React.js.  
            I believe in building complete, end-to-end solutions that solve real-world problems.
            My favorite part of development is problem-solving. I love to explore new tools, 
            research best practices, and constantly improve my skills.
            When I'm not coding, I enjoy reading about technology trends, working on personal projects, and learning from the developer community.</p>
         </div>
         
        <div className='about-skills'>
           <div className='skill-1'>
          <h1 style={{color: 'blue', padding: '20px' }}>Problem Solver</h1>
          <p style={{padding: '10px'}}>Always looking for creative solutions to challenges.</p>
         </div>
         <div className='skill-2'>
           <h1 style={{color: 'blue', padding: '20px'}}>UI/UX Designer </h1>
           <p style={{padding: '10px'}}>Focused on smooth, intuitive user experiences.</p>
         </div>
         <div className='skill-3'>
            <h1 style={{color: 'blue', padding: '20px'}}>Public Speaker</h1>
            <p style={{padding: '10px'}}> Confident in sharing ideas and engaging with audiences.</p>
         </div>
         <div className='skill-4'>
          <h1 style={{color: 'blue', padding: '20px'}}>Creative Builder</h1>
         <p style={{padding: '10px'}}>Enjoy transforming ideas into clean, functional web apps.</p>
         </div>
        </div>
         
        </section>

       
        <section>
        <div>

        </div>
        </section>

    </div>
     
  )
}

export default About