import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
// import './App.css'

//common
import Navbar from './components/common/navbar'
import Footer from "./components/common/footer" 

//pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

function App() {

  return ( 
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer/>
    </>
  )
}

export default App
