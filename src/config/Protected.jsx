import { Outlet, Navigate } from "react-router-dom"

const Auth = () => {
  if(window.localStorage.getItem('token'))
    return <Outlet/>

    return <Navigate to='/'/>
}

export default Auth