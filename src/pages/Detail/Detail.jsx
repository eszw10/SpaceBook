import Footer from "../../components/Footer/Footer"
import NavDash from "../../components/Nav/NavDash"
import Part1 from "./Pages/Part1"
import Part2 from "./Pages/Part2"
import Part3 from "./Pages/Part3"
import Part4 from "./Pages/Part4"

const Detail = () => {
  return (
    <div className="flex flex-col gap-10">
        <NavDash/>
        <Part1/>
        <Part2/>
        <Part3/>
        <Part4/>
        <Footer/>
    </div>
  )
}

export default Detail