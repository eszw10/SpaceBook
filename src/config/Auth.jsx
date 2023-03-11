import { Outlet, Navigate } from "react-router-dom"

const Auth = () => {
  if(window.localStorage.getItem('token')) {
    return <Navigate to='dashboard'/>
  } else {
    return <Outlet/>
  }
}

export default Auth