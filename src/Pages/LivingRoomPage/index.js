import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HeroLivingRoom from '../../Components/HeroLivingRoom'
import LivingRoom from '../../Components/LivingRoom'
import LivingRoomIdeas from '../../Components/LivingRoomIdeas'
import MostPopular from '../../Components/MostPopular'

function LivingRoomPage() {
    return (
        <>
            <Header />
            <HeroLivingRoom />
            <LivingRoom />
            <LivingRoomIdeas />
            <MostPopular />
            <Footer />
            
        </>
    )
}

export default LivingRoomPage
