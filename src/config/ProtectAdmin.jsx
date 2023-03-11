import { Navigate, Outlet } from "react-router-dom"
import NavAdmin from "../pages/Admin/NavAdmin"

const ProtectAdmin = () => {
    if(window.localStorage.getItem('AdminToken')) {
        return <NavAdmin/>
      } else {
        return <Navigate to='/admin'/>
      }
}

export default ProtectAdmin