import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../components/Footer/Footer"
import Nav from "../../components/Nav/Nav"
import NavDash from "../../components/Nav/NavDash"
import ApiURL from "../../config/ApiUrl"
import Part1 from "./Components/Part1"
import Part2 from "./Components/Part2"
import Part3 from "./Components/Part3"
import Part4 from "./Components/Part4"

const Detail = () => {
  const [data,setData] = useState();
  const { id } = useParams();
  const [loading,setLoading] = useState(true)
  

  const getDetail= () => {
    axios.get(`${ApiURL()}/space/${id}`)
    .then(res=>{
      console.log(res)
      setData(res.data.data.space)
      setLoading(false)
    })
    .catch(err=>console.log(err))
  }
  
  useEffect(()=> {
    getDetail();
  },[])

  if(loading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="justify-self-center loader ease-linear rounded-full border-8 border-t-8 border-secondary-h h-32 w-32"></div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-10">
        {window.localStorage.getItem('token')?<NavDash/>:<Nav/>}
        <Part1 data={data}/>
        <Part2/>
        <Part3 data={data}/>
        <Part4 data={data}/>
        <Footer/>
    </div>
  )
}

export default Detail