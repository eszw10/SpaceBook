import React, { useState } from 'react'
import '../../pages/Login/Login.css'

const EditFacility = ({handler,label}) => {
  const [inputs,setInputs] =  useState([{value:""}]);
  const addInput = ()=> {
    setInputs([...inputs, {value:''}]);
  }

  const deleteInput=(index)=> {
    const arr = [...inputs]
    arr.splice(index,1);
    setInputs(arr)
  }

  const handleChange= (e,index)=> {
    const arr = [...inputs]
    arr[index].value = e.target.value
    setInputs(arr)
  }
  
  return (
    <div className="fixed z-30 top-0 bg-opacity-30 left-0 flex justify-center items-center w-screen h-screen bg-slate-500">
        <form className="bg-white p-8 text-center flex flex-col gap-6 font-medium w-[30%] rounded-xl relative">
            <i className="fa-solid fa-x absolute top-2 right-5 text-base text-gray-400 hover:cursor-pointer" onClick={()=> handler(label)}></i>
            <div className="head flex justify-between w-full items-center">
              <h3 className='text-2xl'>{label}</h3>
              <img src="/assets/icons/add.svg" alt="" className='cursor-pointer' onClick={addInput}/>
            </div>
            <div className="inputs w-full flex flex-col gap-5">
              {inputs.map((input,index)=> (
                  <div className="input flex gap-3">
                    <input type="text" className='btn-email w-full' key={index} value = {input.value} onChange = {(e)=>handleChange(e,index)}/>
                    <i className="fa-regular fa-trash btn-orange self-center cursor-pointer" onClick={()=>deleteInput(index)}></i>
                  </div>
              ))}
            </div>
            <button type='submit' className='btn-orange self-center'>Simpan</button>
        </form>
    </div>
  )
}

export default EditFacility