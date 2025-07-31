import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
 

import Home from './pages/HomePage/Home'
import About from './pages/AboutPage/About'
import Project from './pages/ProjectPage/Project'
import Contact from './pages/ContactPage/Contact'


import './App.css'


function App () {

return(

<Router>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path= '/About' element={<About/>} />
    <Route path= '/Project' element={<Project/>} />
    <Route path= '/Contact' element={<Contact/>} />
  </Routes>
 
</Router>

)







}

export default App