
const SignUp = () => {
  return (
    <div className="container flex  min-w-full">
        <div className="form-container flex flex-col items-center justify-center w-1/2 h-screen gap-6">
            <div className="welcome flex flex-col gap-2  w-1/2">
                <h2 className='font-semibold text-4xl'>Welcome</h2>
                <p className='text-gray-300 mb-4'>Lets Start your journey</p>
                <div className="flex flex-col gap-2">
                    <button className='btn'>Sign in With Google</button>
                    <button className='btn'>Sign in With facebook</button>
                </div>
            </div>
            <div className="email m-0 flex flex-col gap-3  w-1/2">
                <h2 className='font-semibold text-2xl'>Email</h2>
                <input type="text" className='btn-email'/>
                <h2 className='font-semibold text-2xl' >Password</h2>
                <input type="password" className='btn-email'/>
                <h2 className='font-semibold text-2xl' >Password</h2>
                <input type="password" className='btn-email'/>
                <h2 className='font-semibold text-2xl' >Password</h2>
                <input type="password" className='btn-email'/>
                <div className="remember flex gap-2 justify-between">
                    <div className="remember flex gap-2">
                        <input type="checkbox" className='accent-slate-500' />
                        <label htmlFor="">Remember me</label>
                    </div>
                    <p className='font-bold justify-self-end text-gray-300'>Forgot Password?</p>
                </div>
                <button className='btn  bg-gray-500 text-white'>Sign Up</button>
                <p className='self-center'>Dont have an account? <span className='font-bold'>Sign Up</span></p>
            </div>
        </div>
        <div className="img-container w-1/2 bg-gray-400 h-screen"></div>
    </div>
  )
}

export default SignUp