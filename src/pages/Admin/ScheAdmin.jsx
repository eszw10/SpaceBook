import axios from "axios"
import { useEffect, useState } from "react"
import Date from "../../components/Schedule/Date"
import Time from "../../components/Schedule/Time"
import { adminToken, ApiURL } from "../../config/ApiUrl"


const ScheAdmin = () => {
  const [data,setData] = useState({pilihan:[]})
  const [times,setTimes] = useState({options:[]})
  const [category,setCategory] = useState(2);
  const [idx,setIdx] = useState(2)
  const handler= id=> {
    setCategory(id)
    setIdx(id)
  }
  const idxStyle = id => {
    let style = 'btn-orange-outline'
    if(id == idx) {
        style += ' bg-secondary text-white'
    }
    return style
}
  const getData = ()=> {
    axios.get(`${ApiURL()}/owner/space/${category}`,{
      headers: {
        Authorization:adminToken()
      }
    }).then(res=>{
      setData(res.data.data)
      setTimes(res.data.data.space)
    }).catch()
  }
  useEffect(()=> {
    getData()
  },[category])
  return (
    <div className="text-black flex flex-col justify-center gap-4 h-full">
      <div className="buttons flex items-center justify-center gap-3">
        <button className={idxStyle(2)} onClick={()=>handler(2)}>Coworking Space</button>
        <button className={idxStyle(3)} onClick={()=>handler(3)}>Meeting Room</button>
      </div>
      <div className="sign flex items-center justify-center gap-4">
        <img src="/assets/icons/warning.svg" alt="" />
        <p className="font-semibold">Klik jam baru untuk mencatat reservasi terbaru pelanggan</p>
        <img src="/assets/icons/warning.svg" alt="" />
      </div>
      <form className="flex flex-col gap-5 justify-center items-center">
          <div className="jadwal grid grid-cols-7 gap-4 bg-slate-40">
              {data.pilihan.slice(0,7).map(hari=>(
                <Date data={hari} key={hari.ID}/>
              ))}
              {data.pilihan.map(date=>(
                <div className="grid grid-rows-7 gap-4" key={date.ID}>
                <Time date={date} options ={times.options} category={category}/>
              </div>
              ))}
          </div>
          <div className="sign flex gap-5">
              <div className="w-6 h-6 bg-success rounded-[10px]"></div>
              <p>Tersedia</p>
              <div className="w-6 h-6 bg-grey-lact rounded-[10px]"></div>
              <p>Tak Tersedia</p>
          </div>
        </form>
    </div>
  )
}

export default ScheAdmin