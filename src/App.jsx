// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Getstarted from './components/Getstarted'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'


function App() {
  

  return (
    <div>
      <Navbar />
      <Body />
      <Getstarted />
      
      <Cards />
      <Newsletter />
      <Footer />
    

     
    </div>
  
  )
}

export default App
