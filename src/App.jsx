import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Sustainability from './pages/Sustainability'
import ContactUs from './pages/ContactUs'
import ScrollToTop from './components/ScrollToTop'



function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sustainability" element={<Sustainability />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
