import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ApiURL, userToken } from '../../config/ApiUrl';

const Rating = ({handler,data}) => {
  const [ratingku,setRating] = useState('')
  const [ulasanku,setUlasan] = useState('')
  const navigate = useNavigate();

  const handleSubmit= (e) => {
    e.preventDefault();
    axios.post(`${ApiURL()}/space/${data.ID}/review`,{
      ulasan : ulasanku,
      rating : ratingku
    },{
      headers: {
        Authorization: userToken()
      }
    }).then(()=>{
      navigate(0)
    })
    .catch()
  }

  return (
    <div className="fixed z-30 top-0 bg-opacity-30 left-0 flex justify-center items-center w-screen h-screen bg-slate-500">
        <form className="bg-white p-6 flex flex-col gap-4 font-medium w-[70%] md:w-[50%] rounded-xl relative" onSubmit={handleSubmit}>
            <i className="fa-solid fa-x absolute top-2 right-5 text-base text-gray-400 hover:cursor-pointer" onClick={handler}></i>
            <h2 className='text-2xl md:text-4xl'>Review Anda</h2>
            <label htmlFor=""></label>
            <select name="rating" id="rating" defaultValue="0" value={ratingku} onChange={e=> setRating(e.target.value)} className='text-xl border-2 border-black px-3 rounded-md w-[130px]'>
                <option value="0">Rating</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <textarea value={ulasanku} name="" id="" cols="30" rows="10" className='border-2 border-black rounded-md p-3' placeholder='Masukkan review anda' onChange={e=> setUlasan(e.target.value)}></textarea>
            <button type='submit' className='btn-orange self-center w-[117px] text-lg'>Kirim</button>
        </form>
    </div>
  )
}

export default Rating