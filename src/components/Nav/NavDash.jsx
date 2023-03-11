import { Link, useNavigate } from 'react-router-dom'
import './Nav.css'

const NavDash = () => {
  const navigate = useNavigate();
  const logOut =()=> {
    window.localStorage.removeItem('token');
    navigate('/')
}
  return (
    <nav className='flex px-12 lg:px-20 py-5 items-center justify-between sticky top-0 z-10 bg-white'>
        <Link to={'/dashboard'}><img src='/assets/icons/logo.svg' alt="logo" className='h-[60px]'/></Link>
        <ul className='absolute opacity-0 lg:opacity-100 top-20 h-[90vh] -left-[400px] transition-all duration-300 lg:static flex lg:flex-row flex-col gap-12 lg:h-full m-0 text-xl peer-checked:navResponsive items-center justify-center w-full'>
            <li className='font-medium hover-underline-animation'><Link to={'/'}>Home</Link></li>
            <li className='font-medium hover-underline-animation'><a href='#search'>Cari Tempat</a></li>
            <li className='font-medium hover-underline-animation'> <a href='#add'>Tambah Tempat</a></li>
            <div className="lg:hidden gap-3 items-center flex flex-col">
              <button onClick={()=>navigate('/login')} type='button' className='btn-orange w-[250px]'>Masuk</button> 
              <button onClick={()=>navigate('/signUp')} type='button'className='btn-orange-outline w-[250px]'>Daftar</button> 
            </div>
        </ul>
        <label htmlFor="user" className='w-[65px]'><img src='/assets/images/profil.png' alt="" className='hover:cursor-pointer'/></label>
        <input type="checkbox" name="" id="user" className='hidden peer'/>    
        <div className="hidden bg-white peer-checked:flex detailP absolute right-[20px] flex-col top-24 rounded-[10px] p-3 shadow-2xl w-[200px] z-20">
            <h2 className='font-semibold'>Admin</h2>
            <p className=' text-grey'>kel14@gmail.com</p>
            <hr className='border-[1.5px]'/>
            <p className='font-semibold text-secondary hover:cursor-pointer' onClick={logOut}>Keluar</p>
        </div>                                                                                                                                                              
    </nav>
  )
}


export default NavDash