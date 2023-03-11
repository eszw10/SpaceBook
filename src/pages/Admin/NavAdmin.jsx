import DashAdmin from "./DashAdmin"
import Galeri from "./Galeri"
import ScheAdmin from "./ScheAdmin"
import { useLocation } from "react-router-dom"

const NavAdmin = () => {    
  return (
    <div className="flex text-white">
        <nav className="bg-primary w-[20vw] h-screen px-12 py-24 flex flex-col gap-20">
            <img src="/assets/icons/logo2.svg" className="w-[145px]" />
            <div className="choice flex flex-col gap-4">
                <div className="c1 flex gap-3 hover:bg-secondary p-3 hover:rounded-md">
                    <img src="/assets/icons/tiles.svg"/>
                    <p>Dashboard</p>
                </div>
                <div className="c2 flex gap-3 hover:bg-secondary p-3 hover:rounded-md">
                    <img src="/assets/icons/schedule.svg" alt="" />
                    <p>Jadwal</p>
                </div>
                <div className="c3 flex gap-3 hover:bg-secondary p-3 hover:rounded-md">
                    <img src="/assets/icons/gallery.svg" alt="" />
                    <p>Galeri</p>
                </div>
            </div>
            <div className="out flex items-center gap-3 mt-28">
                <img src="/assets/icons/out.svg" className="w-8" />
                <p>Keluar</p>
            </div>
        </nav>
        <div className="content w-full h-screen text-black">
            {/* <DashAdmin/> */}
            {/* <ScheAdmin/> */}
            <Galeri/>
        </div>
    </div>
  )
}

export default NavAdmin