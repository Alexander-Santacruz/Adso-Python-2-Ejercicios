import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import Area from './pages/Area/Area'
import { Teacher } from './pages/Teacher/Teacher'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/area" element={<Area/>}/>
        <Route path="/area/create" element={<Area/>}/>
        <Route path="/teacher" element={<Teacher/>}/>
        <Route path="/teacher/create" element={<Teacher/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
