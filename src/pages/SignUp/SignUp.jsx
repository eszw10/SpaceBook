import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const SignUp = () => {
  const [seen, setSeen] = useState(false);
  const [konfirmasi, setKonfirmasi] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e)=> {
    e.preventDefault();
    axios.post('localhost:8080/register/customer', {
      "nama" : "Arvin",
      "email" : "arvin555@gmail.com",
      "password" : "12345"
    })
    .then(res=>{
      console.log(res)
    }).catch(err=> console.log(err));
  }


  return (
    <div className="container flex  min-w-full">
        <div className="form-container flex flex-col items-center justify-center w-full md:w-1/2 h-screen relative">
            <img onClick={()=>navigate('/')} src='/assets/icons/logo.svg' alt="spacebook-logo" className='self-start ml-11 absolute top-0 mt-7 w-[100px] lg:w-[130px] md:w-[90px] hover:cursor-pointer'/>
            <div className="welcome flex flex-col w-1/2 mt-16 gap-2">
                <h2 className='font-semibold text-2xl md:text-4xl'>Selamat Datang!</h2>
                <p className='text-[#858585] mb-4 text-sm'>Ayo mulai mencari working space terbaik</p>
            </div>
            <form className="email m-0 flex flex-col gap-3  w-1/2" onSubmit={handleRegister}>
                <h2 className='font-semibold text-xl md:text-2xl'>Nama Lengkap<span className='text-red-500'>*</span></h2>
                <input type="text" className='btn-email' required placeholder="Masukkan nama" onChange={e=>setName(e.target.value)}/>
                <h2 className='font-semibold text-xl md:text-2xl'>Email<span className='text-red-500'>*</span></h2>
                <input type="email" className='btn-email' required placeholder="kell4@gmail.com" onChange={e=>setEmail(e.target.value)}/>
                <h2 className='font-semibold text-xl md:text-2xl'>Password<span className='text-red-500'>*</span></h2>
                <div className="input btn-email flex justify-between items-center">
                  <input onClick={()=>setSeen(!seen)} type={seen === false? 'password':'text'} className='w-[90%] outline-none' required minLength={8} placeholder='Minimal 8 karakter'
                  onChange={e=>setPassword(e.target.value)}
                  />
                  <i onClick={()=>setSeen(!seen)} className= {`${seen===false?'fa-regular fa-eye-slash':'fa-regular fa-eye'} hover:cursor-pointer`}></i>
                </div>
                <h2 className='font-semibold text-xl md:text-2xl'>Konfirmasi Password<span className='text-red-500'>*</span></h2>
                <div className="input btn-email flex justify-between items-center">
                  <input onClick={()=>setKonfirmasi(!konfirmasi)} type={konfirmasi === false? 'password':'text'} className='w-[90%] outline-none' required minLength={8} placeholder='Minimal 8 karakter'
                  onChange={e=>setConfirmPassword(e.target.value)}
                  />
                  <i onClick={()=>setKonfirmasi(!konfirmasi)} className= {`${konfirmasi===false?'fa-regular fa-eye-slash':'fa-regular fa-eye'} hover:cursor-pointer`}></i>
                </div>
                <button type='submit' className='btn-orange text-xl font-semibold w-[80%] self-center mt-5'>Daftar</button>
                <p className='self-center text-center md:text-left'>Anda sudah punya akun? <Link className='font-bold' to={'/login'}>Masuk</Link></p>
            </form>
        </div>
        <div className="img-container w-1/2 bg-primary h-screen hidden md:flex items-center justify-center">
          <div className="img-container bg-white/40 w-[80%] h-[92%] rounded-[40px] relative">
            <h1 className='text-[56px] font-semibold text-white ml-7 mt-10'>Yuk Reservasi Sekarang!</h1>
            <img src='/assets/images/kerja.png' alt="" className='w-full absolute bottom-0'/>
          </div>
        </div>
    </div>
  )
}

export default SignUp