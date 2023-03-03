import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/icons/logo.svg'
import kerja from '../../assets/images/kerja.png'

const SignUp = () => {
    const [seen, setSeen] = useState(false);
    const [konfirmasi, setKonfirmasi] = useState(false);
    const navigate = useNavigate();
  return (
    <div className="container flex  min-w-full">
        <div className="form-container flex flex-col items-center justify-center w-full md:w-1/2 h-screen gap-6 relative">
            <img onClick={()=>navigate('/')} src={logo} alt="spacebook-logo" className='self-start ml-11 absolute top-0 mt-7 w-[100px] lg:w-[150px] md:w-[90px] hover:cursor-pointer'/>
            <div className="welcome flex flex-col gap-2  w-1/2 mt-16">
                <h2 className='font-semibold text-4xl'>Selamat Datang!</h2>
                <p className='text-gray-300 mb-4'>Ayo mulai mencari working space terbaik</p>
            </div>
            <form className="email m-0 flex flex-col gap-3  w-1/2">
                <h2 className='font-semibold text-2xl'>Nama Lengkap<span className='text-red-500'>*</span></h2>
                <input type="text" className='btn-email' required placeholder="Masukkan nama"/>
                <h2 className='font-semibold text-2xl'>Email<span className='text-red-500'>*</span></h2>
                <input type="text" className='btn-email' required placeholder="kell4@gmail.com"/>
                <h2 className='font-semibold text-2xl'>Password<span className='text-red-500'>*</span></h2>
                <div className="input btn-email flex justify-between items-center">
                  <input onClick={()=>setSeen(!seen)} type={seen === false? 'password':'text'} className='w-[90%] outline-none' required minLength={8} placeholder='Minimal 8 karakter'/>
                  <i onClick={()=>setSeen(!seen)} className= {`${seen===false?'fa-regular fa-eye':'fa-solid fa-eye-slash'} hover:cursor-pointer`}></i>
                </div>
                <h2 className='font-semibold text-2xl'>Konfirmasi Password<span className='text-red-500'>*</span></h2>
                <div className="input btn-email flex justify-between items-center">
                  <input onClick={()=>setKonfirmasi(!konfirmasi)} type={konfirmasi === false? 'password':'text'} className='w-[90%] outline-none' required minLength={8} placeholder='Minimal 8 karakter'/>
                  <i onClick={()=>setKonfirmasi(!konfirmasi)} className= {`${konfirmasi===false?'fa-regular fa-eye':'fa-solid fa-eye-slash'} hover:cursor-pointer`}></i>
                </div>
                <button className='btn text-2xl bg-primary hover:bg-primary-h text-white font-semibold'>Daftar</button>
                <p className='self-center'>Already have an account? <Link className='font-bold' to={'/login'}>Login</Link></p>
            </form>
        </div>
        <div className="img-container w-1/2 bg-primary h-screen hidden md:flex items-center justify-center">
          <div className="img-container bg-primary-lact w-[80%] h-[92%] rounded-[40px] relative">
            <h1 className='text-[56px] font-semibold text-white ml-7 mt-10'>Yuk Reservasi Sekarang!</h1>
            <img src={kerja} alt="" className='w-full absolute bottom-0'/>
          </div>
        </div>
    </div>
  )
}

export default SignUp