import { Route, Routes } from 'react-router-dom'
import './App.css'
import AdminAuth from './config/AdminAuth'
import Auth from './config/Auth'
import ProtectAdmin from './config/ProtectAdmin'
import Protected from './config/Protected'
import DashAdmin from './pages/Admin/DashAdmin'
import Galeri from './pages/Admin/Galeri'
import ScheAdmin from './pages/Admin/ScheAdmin'
import Detail from './pages/Detail/Detail'
import Dashboard from './pages/Home/Dashboard'
import Home from './pages/Home/Home'
import AdminLogin from './pages/Login/AdminLogin'
import Login from './pages/Login/Login'
import Search from './pages/Search/Search'
import SignUp from './pages/SignUp/SignUp'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/cari' element={<Search/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route element={<Protected/>}>
          <Route path='/dashboard' element={<Dashboard/>}/>
        </Route>
        <Route element={<Auth/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={ <Login/>}/>
          <Route path='/signUp' element={ <SignUp/>}/>
        </Route>
        <Route element={<AdminAuth/>}>
          <Route path='/admin' element={ <AdminLogin/>}/>
        </Route>
        <Route element={<ProtectAdmin/>}>
          <Route path='/admin/dashboard' element={<DashAdmin/>}></Route>
          <Route path='/admin/jadwal' element={<ScheAdmin/>}></Route>
          <Route path='/admin/galeri' element={<Galeri/>}></Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
