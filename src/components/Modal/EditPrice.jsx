import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { adminToken, ApiURL } from '../../config/ApiUrl';

const EditPrice = ({data,handler}) => {
  const [category,setCategory] = useState(2);  
  const [price,setPrice] = useState(''); 
  const [idx,setIdx] = useState(0) 
  const [val,setVal] = useState('Coworking Space')
  const navigate = useNavigate()

  const changeNum = (id, cat)=> {
    setCategory(cat)
    setIdx(id)
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    axios.patch(`${ApiURL()}/owner/space/${category}/price`, {
      harga : Number(price)
    }, {
      headers: {
        Authorization: adminToken()
      }
    }).then(()=> navigate(0))
  }

  useEffect(()=> {
    setPrice(data.spaces[idx].harga)
  },[data,category,idx])

  return (
    <div className="fixed z-30 top-0 bg-opacity-30 left-0 flex justify-center items-center w-screen h-screen bg-slate-500">
        <form className="bg-white p-8 text-center flex flex-col gap-6 font-medium w-[30%] rounded-xl relative" onSubmit={handleSubmit}>
            <i className="fa-solid fa-x absolute top-2 right-5 text-base text-gray-400 hover:cursor-pointer" onClick={handler}></i>
            <div className="head flex justify-between w-full items-center">
              <h3 className='text-2xl'>Edit Harga</h3>
            </div>
            <div className='flex flex-col gap-3'>
                <select name="" id="" className='border-2 border-black px-3 rounded-md self-start' value={val} onChange={e=>setVal(e.target.value)}>
                    <option value="Coworking Space" onClick={()=>changeNum(0,2)}>Coworking Space</option>
                    <option value="Meeting Room"onClick={()=>changeNum(1,3)}>Meeting Room</option>
                </select>
                <input type="text" name="" id="" className='btn-email' placeholder='50.000' value={price} onChange={e=>setPrice(e.target.value)}/>
            </div>
            <button type='submit' className='btn-orange self-center'>Simpan</button>
        </form>
    </div>
  )
}

export default EditPrice