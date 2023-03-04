import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import logo from '../../assets/icons/logo.svg'
import { useState } from 'react'
import kerja from '../../assets/images/kerja.png'
import axios from 'axios'

const Login = () => {
  const [seen, setSeen] = useState(false)
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e)=> {
    e.preventDefault();
    axios.post('localhost:8080/login/', {
      "email" : "arvin555@gmail.com",
      "password" : "ujicoba"
    })
    .then(res=>{
      console.log(res)
      window.localStorage.setItem('token', res.data.token.token)
    }).catch(err=> console.log(err));
  }

  return (
    <div className="flex w-full">
        <div className="form-container flex flex-col items-center justify-center w-full md:w-1/2 h-screen gap-6 relative">
            <img onClick={()=>navigate('/')} src={logo} alt="spacebook-logo" className='self-start ml-11 absolute top-0 mt-8 w-[150px] md:w-fit hover:cursor-pointer'/>
            <div className="welcome flex flex-col w-1/2">
                <h2 className='font-semibold text-4xl leading-[54px]'>Selamat datang kembali!</h2>
                <p className='text-[#858585]'>Mohon isi kembali data anda</p>
            </div>
            <form className="email m-0 flex flex-col gap-3 md:w-1/2" onSubmit={handleLogin}>
                <h2 className='font-semibold text-2xl'>Email<span className='text-red-500'>*</span></h2>
                <input type="email" className='btn-email outline-none' required placeholder='ketik emailmu' onChange={e=>setEmail(e.target.value)}/>
                <h2 className='font-semibold text-2xl'>Password<span className='text-red-500'>*</span></h2>
                <div className="input btn-email flex justify-between items-center">
                  <input onClick={()=>setSeen(!seen)} type={seen === false? 'password':'text'} className='w-[90%] outline-none' required minLength={8} placeholder='Minimal 8 karakter'
                    onChange={e=>setPassword(e.target.value)}
                  />
                  <i onClick={()=>setSeen(!seen)} className= {`${seen===false?'fa-regular fa-eye':'fa-solid fa-eye-slash'} hover:cursor-pointer`}></i>
                </div>
                <button type='submit' className='btn text-2xl font-semibold bg-primary hover:bg-primary-h text-white self-center w-[80%] mt-5'>Masuk</button>
                <p className='self-center'>Belum punya akun? <Link className='font-bold' to={'/signUp'}>Daftar</Link></p>
            </form>
        </div>
        <div className="img-container w-1/2 bg-primary h-screen hidden md:flex items-center justify-center">
          <div className="img-container bg-primary-lact w-[80%] h-[92%] rounded-[40px] relative">
            <h1 className='text-[56px] font-semibold text-white ml-7 mt-10'>Yuk Reservasi Kembali!</h1>
            <img src={kerja} alt="" className='w-full absolute bottom-0'/>
          </div>
        </div>
    </div>
  )
}

export default Login