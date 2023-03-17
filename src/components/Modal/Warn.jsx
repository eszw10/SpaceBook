import React from 'react'
import { Link } from 'react-router-dom'

const Warn = ({handler}) => {
  return (
    <div className="fixed z-30 top-0 bg-opacity-30 flex justify-center items-center w-screen h-screen bg-slate-500">
        <div className="bg-white p-6 text-center flex flex-col gap-4 font-medium w-[50%] items-center rounded-xl lg:text-2xl relative">
            <i className="fa-solid fa-x absolute top-2 right-5 text-base text-gray-400 hover:cursor-pointer" onClick={handler}></i>
            <img src="/assets/images/Hyperspace.png" className="w-[100px] lg:w-[219px]" />
            <p>Login dulu ngab</p>
            <Link  to='/login' className="btn-orange self-center w-[250px]">Login</Link>
        </div>
    </div>
  )
}

export default Warn