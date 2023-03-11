import Footer from "../../components/Footer/Footer"
import NavDash from "../../components/Nav/NavDash"
import Section1 from "./Pages/Section1"
import Section2 from "./Pages/Section2"
import Section3 from './Pages/Section3'
import Section4 from "./Pages/Section4"
import Section5 from "./Pages/Section5"
import Section7 from "./Pages/Section7"

const Dashboard = () => {
  return (
    <div>
        <NavDash/>
        <Section1/>
        <Section7/> 
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>       
        <Footer/>
    </div>
  )
}

export default Dashboard