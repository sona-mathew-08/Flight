import React from 'react'
import Header from '../components/Header/Header'
import ServiceSection from '../components/Services/ServiceSection'
import Slider from '../components/Slider/Slider'
import About from '../components/About/About'


const Home = () => {
  return (
    <div>
    <>
    <Header/>
    <Slider/>
   <ServiceSection/>
   <About/>
    </>
    </div>
  )
}

export default Home