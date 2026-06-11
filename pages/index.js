import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Dashboard from './components/Dashboard'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials '
import Faq from './components/Faq'

function index() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <HowItWorks/>
      <Stats/>
      <Dashboard/>
      <CTA/>
      <Testimonials/>
      <Faq/>
      <Footer/>
    </div>
  )
}

export default index