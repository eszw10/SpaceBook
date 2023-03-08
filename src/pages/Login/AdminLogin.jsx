import './Login.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const [seen, setSeen] = useState(false)
  const navigate = useNavigate();
  const [email, setEmail] = useState(false)
  const [password, setPassword] = useState(false)

  const handleLogin = (e)=> {
    e.preventDefault();
    axios.post('localhost:8080/login', {
      "email" : "owner1@gmail.com",
      "password" : "123456"
    })
    .then(res=>{
      console.log(res)
      window.localStorage.setItem('token',res.data.token.token)
    }).catch(err=> console.log(err));
  }

  return (
    <div className="flex w-full">
        <div className="form-container flex flex-col items-center justify-center w-full lg:w-1/2 h-screen gap-6 relative">
            <img onClick={()=>navigate('/')} src='/assets/icons/logo.svg' alt="spacebook-logo" className='self-start ml-11 absolute top-0 mt-8 w-[130px] hover:cursor-pointer' />
            <div className="welcome flex flex-col w-1/2">
                <h2 className='font-semibold text-4xl leading-[54px]'>Selamat datang kembali!</h2>
                <p className='text-[#858585]'>Mohon isi kembali data anda</p>
            </div>
            <form className="email m-0 flex flex-col gap-3 lg:w-1/2" onSubmit={handleLogin}>
                <h2 className='font-semibold text-2xl'>Email<span className='text-red-500'>*</span></h2>
                <input type="email" className='btn-email outline-none' required placeholder='ketik emailmu' onChange={e=>setEmail(e.target.value)}/>
                <h2 className='font-semibold text-2xl'>Password<span className='text-red-500'>*</span></h2>
                <div className="input btn-email flex justify-between items-center">
                  <input onClick={()=>setSeen(!seen)} type={seen === false? 'password':'text'} className='w-[90%] outline-none' required minLength={8} placeholder='Minimal 8 karakter'
                  onChange={e=>setPassword(e.target.value)}
                  />
                  <i onClick={()=>setSeen(!seen)} className= {`${seen===false?'fa-regular fa-eye-slash':'fa-regular fa-eye'} hover:cursor-pointer`}></i>
                </div>
                <button type='submit' className='btn-orange text-xl font-semibold w-[80%] self-center mt-5'>Masuk</button>
            </form>
        </div>
        <div className="img-container w-1/2 bg-primary h-screen hidden lg:flex items-center justify-center">
          <div className="img-container bg-white/40 w-[80%] h-[92%] rounded-[40px] relative overflow-hidden">
            <h1 className='text-[56px] font-semibold text-white ml-7 mt-10'>Pantau terus tempatmu!</h1>
            <img src='/assets/images/adminKerja.png' className='absolute -bottom-4'/>
          </div>
        </div>
    </div>
  )
}

export default AdminLogin