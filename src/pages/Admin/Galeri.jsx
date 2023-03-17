import axios from "axios";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom"
import PostPic from "../../components/Modal/PostPic";
import { ApiURL, adminToken } from "../../config/ApiUrl";

const Galeri = () => {
  const [file,setFile] = useState();
  const [modal,setModal] = useState(false);
  const [pics,SetPics] = useState([])
  const modalHandler= () => setModal(!modal)
  const [loading,setLoading] = useState(false);

  const getPic=()=> {
    setLoading(true)
    axios.get(`${ApiURL()}/owner/pictures`,{
      headers: {
        Authorization: adminToken()
      }
    }).then(res=>{
      SetPics(res.data.data)})
      setLoading(false)
  }

  useEffect(()=> {
    getPic()
  },[])
  
  return (
    <div className="px-32 py-20 flex flex-col justify-between h-full">
      {loading && <div className="justify-self-center loader ease-linear rounded-full border-8 border-t-8 border-secondary-h h-32 w-32"></div>}
        <div className="img-container items-center justify-center grid grid-cols-3 gap-5 overflow-hidden h-[250px]">
          {pics.map((pic,index)=>(
            <img src={pic} alt="" key={index}/>
          ))}
        </div>
        <button type="button" className="relative btn flex bg-secondary text-white items-center self-end gap-3 cursor-pointer hover:bg-primary-h" onClick={modalHandler}>
          <input type="file" className="opacity-0 w-full absolute top-0 left-0" accept="image/png, image/jpeg, image/svg" onChange={e=>setFile(e.target.files[0])}/>
          <img src="/assets/icons/upload.svg" alt="" className="self-end" />
          <p>Unggah Foto</p>
        </button>
        {file && <PostPic handler={modalHandler} file={file}/>}
    </div>
  )
}

export default Galeri