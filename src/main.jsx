import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './component/Navbar/navbar'
import Hero from './component/Hero/hero'
import Section from './component/Section/services/section'
import About from './component/Section/about/about'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <Navbar/>
      <Hero/>
      <Section/>
      <About/>
  </StrictMode>,
)
