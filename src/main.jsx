import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './component/Navbar/navbar'
import Hero from './component/Hero/hero'
import Section from './component/Section/section'
import Contact from './component/Contact/contact'
import Footer from './component/Footer/footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar/>
      <Hero/>
      <Section/>
      <Contact/>
      <Footer/>
  </StrictMode>,
)
