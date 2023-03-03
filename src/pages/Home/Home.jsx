import React from 'react'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import Section1 from './Pages/Section1'
import Section2 from './Pages/Section2'
import Section3 from './Pages/Section3'

const Home = () => {
  return (
    <div>
      <Nav/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Footer/>
    </div>
  )
}

export default Home