import './Login.css'
import logo from '../../assets/icons/logo.svg'
import { useState } from 'react'
import kerja from '../../assets/images/adminKerja.png'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [seen, setSeen] = useState(false)
  const navigate = useNavigate();

  return (
    <div className="flex w-full">
        <div className="form-container flex flex-col items-center justify-center w-full md:w-1/2 h-screen gap-6 relative">
            <img onClick={()=>navigate('/')} src={logo} alt="spacebook-logo" className='self-start ml-11 absolute top-0 mt-8 w-[150px] md:w-fit hover:cursor-pointer' />
            <div className="welcome flex flex-col gap-2  w-1/2">
                <h2 className='font-semibold text-4xl leading-[54px]'>Selamat datang kembali!</h2>
                <p className='text-gray-300'>Mohon isi kembali data anda</p>
            </div>
            <form className="email m-0 flex flex-col gap-3 md:w-1/2">
                <h2 className='font-semibold text-2xl'>Email<span className='text-red-500'>*</span></h2>
                <input type="text" className='btn-email outline-none' required placeholder='ketik emailmu'/>
                <h2 className='font-semibold text-2xl'>Password<span className='text-red-500'>*</span></h2>
                <div className="input btn-email flex justify-between items-center">
                  <input onClick={()=>setSeen(!seen)} type={seen === false? 'password':'text'} className='w-[90%] outline-none' required minLength={8} placeholder='Minimal 8 karakter'/>
                  <i onClick={()=>setSeen(!seen)} className= {`${seen===false?'fa-regular fa-eye':'fa-solid fa-eye-slash'} hover:cursor-pointer`}></i>
                </div>
                <button className='btn text-2xl font-semibold bg-primary hover:bg-primary-h text-white'>Masuk</button>
            </form>
        </div>
        <div className="img-container w-1/2 bg-primary h-screen hidden md:flex items-center justify-center">
          <div className="img-container bg-primary-lact w-[80%] h-[92%] rounded-[40px] relative">
            <h1 className='text-[56px] font-semibold text-white ml-7 mt-10'>Pantau terus tempatmu!</h1>
            <img src={kerja} className='w-full absolute bottom-0'/>
          </div>
        </div>
    </div>
  )
}

export default AdminLogin