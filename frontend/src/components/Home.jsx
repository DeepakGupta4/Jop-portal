import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarrousel from './CategoryCarrousel'
import LatestJob from './LatestJob'
import Footer from './Footer'
import Browse from './Browse'

const Home = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <CategoryCarrousel />
        <LatestJob />
        <Footer />
        <Browse />
    </div>
  )
}

export default Home