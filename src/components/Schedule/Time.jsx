import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { adminToken, ApiURL } from "../../config/ApiUrl"

const Time = ({date,options,category,jam,tanggal,hari}) => {
  const navigate = useNavigate();
  const [clicked,setClicked] = useState(false);
  const idxStyle = () => {
    let style = 'bg-success hover:border-success hover:bg-grey-f hover:border-2 hover:text-black text-white'
    if(clicked && !window.localStorage.getItem('AdminToken')) {
        style = 'text-black border-success bg-grey-f border-2'
    }
    return style
  }
  const getTimeById=id=> {
    const time = options.find(val=>val.ID==id)
    return time
  }

  const getDateById = id => {
    const tgl = date.find(val=>val.option_id==id)
    return tgl
  }

  const handlePost=()=> {
    setClicked(!clicked)
    if(!window.localStorage.getItem('AdminToken')) {
      jam(getTimeById(date.option_id).rentang)
      tanggal(date.tgl)
      hari(date.hari)
      console.log(tanggal)
    } else {
    axios.patch(`${ApiURL()}/owner/space/${category}/${date.ID}
    `,{},{
      headers: {
        Authorization:adminToken()
      }
    }).then(()=>navigate(0))
    }}
  return (
    <button type="button" className={`${date.tersedia? idxStyle():'bg-grey-lact text-white'} flex rounded-[10px] p-2 flex-col items-center shadow-md cursor-pointer`}
    onClick={handlePost}
    >
        {getTimeById(date.option_id).rentang && <p>{getTimeById(date.option_id).rentang}</p>}
    </button>
  ) 
}

export default Time