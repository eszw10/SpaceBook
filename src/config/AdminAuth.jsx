import { Navigate, Outlet } from "react-router-dom"

const AdminAuth = () => {
    if(window.localStorage.getItem('AdminToken')) {
      return <Navigate to='/admin/dashboard'/>
    } else {
      return <Outlet/>
    }
  }
  
  export default AdminAuth