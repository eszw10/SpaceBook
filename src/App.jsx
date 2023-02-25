import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/Login/Login'
import SignUp from './components/SignUp/SignUp'

function App() {

  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={ <Login/>}/>
        <Route path='/signUp' element={ <SignUp/>}/>
      </Routes>
    </div>
  )
}

export default App
