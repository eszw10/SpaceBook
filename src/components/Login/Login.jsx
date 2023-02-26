import { Link } from 'react-router-dom'
import './Login.css'
import google from '../../assets/google.png'
import fb from '../../assets/facebook.png'

const Login = () => {
  return (
    <div className="container flex  min-w-full">
        <div className="form-container flex flex-col items-center justify-center w-1/2 h-screen gap-14">
            <div className="welcome flex flex-col gap-2  w-1/2">
                <h2 className='font-semibold text-4xl'>Welcome Back</h2>
                <p className='text-gray-300 mb-4'>login with your data entered during registration</p>
                <div className="flex flex-col gap-2">
                    <button className='btn flex justify-center items-center gap-3 font-semibold'><img src={google}/>Sign in with Google</button>
                    <button className='btn flex justify-center items-center gap-3 font-semibold'><img src={fb} alt="" /> Sign in with facebook</button>
                </div>
            </div>
            <div className="email m-0 flex flex-col gap-3  w-1/2">
                <h2 className='font-semibold text-2xl'>Email</h2>
                <input type="text" className='btn-email'/>
                <h2 className='font-semibold text-2xl' >Password</h2>
                <input type="password" className='btn-email'/>
                <div className="remember flex gap-2 justify-between">
                    <div className="remember flex gap-2">
                        <input type="checkbox" className='accent-slate-500' />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <p className='font-bold justify-self-end'>Forgot Password?</p>
                </div>
                <button className='btn  bg-gray-500 text-white'>Login</button>
                <p className='self-center'>Dont have an account? <Link className='font-bold' to={'/signUp'}>Sign Up</Link></p>
            </div>
        </div>
        <div className="img-container w-1/2 bg-gray-400 h-screen"></div>
    </div>
  )
}

export default Login