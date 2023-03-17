import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav/Nav"
import NavDash from "../../components/Nav/NavDash"
import Section5 from "../Home/Components/Section5"
import Bagian1 from "./Components/Bagian1"
import Bagian2 from "./Components/Bagian2"

const Search = () => {
  return (
    <div>
        {window.localStorage.getItem('token')?<NavDash/>:<Nav/>}
        <Bagian1/>
        <Bagian2/>
        <Section5/>        
        <Footer/>
    </div>
  )
}

export default Search