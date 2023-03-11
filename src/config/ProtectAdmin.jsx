import { Navigate, Outlet } from "react-router-dom"

const ProtectAdmin = () => {
    if(window.localStorage.getItem('AdminToken')) {
        return <Outlet/>
      } else {
        return <Navigate to='/admin'/>
      }
}

export default ProtectAdmin