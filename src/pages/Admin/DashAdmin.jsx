import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import EditFacility from '../../components/Modal/EditFacility';
import EditPrice from '../../components/Modal/EditPrice';
import ApiURL from '../../config/ApiUrl';

const DashAdmin = () => {
  const [show,setShow] = useState(false);
  const [edit,setEdit] = useState(false)
  const showHandler = ()=>setShow(!show)
  const editHandler = ()=>setEdit(!edit)
  const data = useOutletContext();

  return (
    <div className='text-black px-32 flex flex-col gap-5 py-16'>
      <div className="name">
        <h2 className='font-semibold text-3xl'>{data.spaces[0].nama}</h2>
        <p>{data.spaces[0].deskripsi}</p>
      </div>
      <div className="harga mb-4">
        <header className='flex justify-between'>
          <h2 className='font-semibold text-2xl'>Harga</h2>
          <img src="/assets/icons/edit.svg" alt="" onClick={editHandler} className="cursor-pointer"/>
        </header>
        <div className="list flex justify-between w-[30%]">
          <p>Coworking Space</p>
          <p>Rp {data.spaces[0].harga} /Jam</p>
        </div>
        <div className="list flex justify-between w-[30%]">
          <p>Meeting Room</p>
          <p>Rp {data.spaces[1].harga} /Jam</p>
        </div>
      </div>
      <div className="lokasi flex flex-col gap-3">
        <h2 className='font-medium text-3xl mb-4'>Lokasi</h2>
        <div className="map flex gap-2">
          <i className="fa-solid fa-location-dot text-secondary"></i>
          <p className='font-semibold text-lg'>{data.spaces[0].alamat}</p>
        </div>
      </div>
      <div className="jam mb-4">
        <h2 className='font-semibold text-2xl mb-4'>Jam Buka dan Kapasitas</h2>
        <div className="contain flex justify-between w-[25%]">
          <div className="container1">
            <div className="list flex gap-3">
              <i className="fa-regular fa-clock text-secondary"></i>
              <p>Mon-Fir</p>
            </div>
            <div className="list flex gap-2">
              <i className="fa-solid fa-user-group text-secondary"></i>
              <p>Kapasitas</p>
            </div>
          </div>
          <div className="container2">
            <p>7am - 6pm</p>
            <p>{data.spaces[0].kapasitas} orang</p>
          </div>
        </div>
      </div>
      <div className="fasil mb-4">
        <header className='flex justify-between'>
          <h2 className='font-semibold text-2xl'>Fasilitas</h2>
          <img src="/assets/icons/edit.svg" alt="" onClick={showHandler} className="cursor-pointer"/>
        </header>
        <ul className='font-semibold flex gap-6 text-lg'>
          <li>Wifi</li>
          <li>Proyektor</li>
          <li>Snack</li>
          <li>Mushalla</li>
        </ul>
      </div>
      {edit && <EditPrice handler ={editHandler}/>}
      {show && <EditFacility handler ={showHandler}/>}
    </div>
  )
}

export default DashAdmin