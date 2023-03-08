import { Link, useNavigate } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  const navigate = useNavigate();
  return (
    <nav className='flex px-12 py-5 items-center justify-between sticky top-0 bg-white z-20'>
        <Link to={'/'}><img src='/assets/icons/logo.svg' alt="logo" className='h-[60px]'/></Link>
        <label htmlFor="burgir"><i className="fa-solid fa-bars lg:hidden text-secondary text-3xl hover:cursor-pointer"></i></label>
        <input type="checkbox" name="" id="burgir" className='hidden peer'/>
        <ul className='absolute opacity-0 lg:opacity-100 top-20 h-[90vh] -left-[400px] transition-all duration-300 lg:static flex lg:flex-row flex-col gap-12 lg:h-full m-0 text-xl peer-checked:navResponsive items-center justify-center w-full'>
            <li className='font-medium hover-underline-animation'><Link to={'/'}>Home</Link></li>
            <li className='font-medium hover-underline-animation'><Link to={'/login'}>Cari Tempat</Link></li>
            <li className='font-medium hover-underline-animation'> <Link to={'/login'}>Tambah Tempat</Link></li>
            <div className="lg:hidden gap-3 items-center flex flex-col">
              <button onClick={()=>navigate('/login')} type='button' className='btn-orange w-[250px]'>Masuk</button> 
              <button onClick={()=>navigate('/signUp')} type='button'className='btn-orange-outline w-[250px]'>Daftar</button> 
            </div>
        </ul>                                                                                                                                                                 
        <div className="hidden lg:flex gap-3 items-center justify-center">
          <Link to={'/login'}><button type='button' className='btn-orange w-[120px]'>Masuk</button></Link> 
          <Link to={'/signUp'}><button type='button'className='btn-orange-outline w-[120px]'>Daftar</button></Link> 
        </div>
    </nav>
  )
}


export default Nav