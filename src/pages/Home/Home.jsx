import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import Section1 from './Pages/Section1'
import Section2 from './Pages/Section2'
import Section3 from './Pages/Section3'
import Section4 from './Pages/Section4'
import Section5 from './Pages/Section5'
import Section6 from './Pages/Section6'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Footer/>
    </div>
  )
}

export default Home