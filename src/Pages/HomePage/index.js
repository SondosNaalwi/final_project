import React from 'react'
import BlackFriday from '../../Components/BlackFriday'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HeroSection from '../../Components/HeroSection'
import ShopNow from '../../Components/ShopNow'
import TakeLook from '../../Components/TakeLook'

function HomePage() {
    return (
        <>
          <Header />
          <HeroSection /> 
          <ShopNow />
          <TakeLook />
          <BlackFriday />
          <Footer /> 
        </>
    )
}

export default HomePage
