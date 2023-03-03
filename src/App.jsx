import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import AdminLogin from './pages/Login/AdminLogin'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/admin' element={ <AdminLogin/>}/>
        <Route path='/signUp' element={ <SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
