import { Link, Outlet, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
import ApiURL from "../../config/ApiUrl";

const NavAdmin = () => {    
    const [idx,setIdx] = useState(1);
    const navigate = useNavigate();
    const [data,setData] = useState();
    const [loading,setLoading] = useState(true);
    const handleLogOut = () => {
        window.localStorage.removeItem('AdminToken')
        navigate('/admin')
    }
    const idxHandler = id=> {
        setIdx(id)
    }
    const idxStyle = id => {
        let style = 'flex gap-3 hover:bg-secondary p-3 rounded-md'
        if(id == idx) {
            style += ' bg-secondary'
        }
        return style
    }

    const getData= ()=> {
        setLoading(true)
        axios.get(`${ApiURL()}/owner/spaces`, {
            headers: {
                Authorization:`Bearer ${window.localStorage.getItem('AdminToken')}`
            }
        })
        .then(res=> {
            console.log(res)
            setData(res.data.data)
            setLoading(false)})
        .catch(err=>console.log(err))
      }
    
      useEffect(()=> {
        getData()
      },[])

    if(loading) {
    return (
        <div className="w-screen h-screen flex items-center justify-center">
            <div className="justify-self-center loader ease-linear rounded-full border-8 border-t-8 border-secondary-h h-32 w-32"></div>
        </div>
        )
    }

  return (
    <div className="flex text-white">
        <nav className="bg-primary w-[20vw] h-screen px-12 py-24 flex flex-col gap-20">
            <img src="/assets/icons/logo2.svg" className="w-[145px]" />
            <div className="choice flex flex-col gap-4">
                <Link className={idxStyle(1)} to="/admin/dashboard" onClick={()=> idxHandler(1)}>
                    <img src="/assets/icons/tiles.svg"/>
                    <p>Dashboard</p>
                </Link>
                <Link className={idxStyle(2)} to="/admin/jadwal" onClick={()=> idxHandler(2)}>
                    <img src="/assets/icons/schedule.svg" alt="" />
                    <p>Jadwal</p>
                </Link>
                <Link className={idxStyle(3)} to="/admin/galeri" onClick={()=> idxHandler(3)}>
                    <img src="/assets/icons/gallery.svg" alt="" />
                    <p>Galeri</p>
                </Link>
            </div>
            <div className="out flex items-center gap-3 mt-28">
                <img src="/assets/icons/out.svg" className="w-8 cursor-pointer" onClick={handleLogOut} />
                <p>Keluar</p>
            </div>
        </nav>
        <div className="content w-full h-screen text-black">
            <Outlet context={data}/>
        </div>
    </div>
  )
}

export default NavAdmin