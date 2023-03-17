import Footer from "../../components/Footer/Footer"
import NavDash from "../../components/Nav/NavDash"
import Section1 from "./Components/Section1"
import Section2 from "./Components/Section2"
import Section3 from './Components/Section3'
import Section4 from "./Components/Section4"
import Section5 from "./Components/Section5"
import Section7 from "./Components/Section7"

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