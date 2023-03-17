import React from 'react'

const EditPrice = ({handler}) => {
  return (
    <div className="fixed z-30 top-0 bg-opacity-30 left-0 flex justify-center items-center w-screen h-screen bg-slate-500">
        <form className="bg-white p-8 text-center flex flex-col gap-6 font-medium w-[30%] rounded-xl relative">
            <i className="fa-solid fa-x absolute top-2 right-5 text-base text-gray-400 hover:cursor-pointer" onClick={handler}></i>
            <div className="head flex justify-between w-full items-center">
              <h3 className='text-2xl'>Edit Harga</h3>
            </div>
            <div className='flex flex-col gap-3'>
                <select name="" id="" className='border-2 border-black px-3 rounded-md self-start'>
                    <option value="Coworking Space">Coworking Space</option>
                    <option value="Meeting Room">Meeting Room</option>
                </select>
                <input type="text" name="" id="" className='btn-email' placeholder='50.000'/>
            </div>
            <button type='submit' className='btn-orange self-center'>Simpan</button>
        </form>
    </div>
  )
}

export default EditPrice