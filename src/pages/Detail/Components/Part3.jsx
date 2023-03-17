import React from 'react'

const Part3 = ({data}) => {
  return (
    <div className='mx-5 lg:mx-20 flex flex-col gap-5 md:mt-20'>
        <div className="fasil flex flex-col md:flex-row justify-between md:items-center gap-3 md:gap-0">
            <div className="fal1 flex flex-col gap-2 self-start">
                <h2 className='font-semibold text-2xl md:text-3xl'>Harga</h2>
                <p>Rp {data.harga}/h</p>
            </div>
            <div className="fal2 flex flex-col gap-2 md:self-start">
                <h2 className='font-semibold text-2xl md:text-3xl'>Opening Hours</h2>
                <p>Mon-Fri</p>
                <div className="time flex gap-3 items-center md:self-start">
                    <i className="fa-regular fa-clock text-secondary"></i>
                    <p>7am-6pm</p>
                </div>
            </div>
            <div className="fal3 flex flex-col gap-4 md:self-start">
                <h2 className='font-semibold text-2xl md:text-3xl'>Kapasitas</h2>
                <p>{data.kategori=='coworking'?'Coworking Space':'Meeting Room'} - {data.kapasitas} orang</p>
            </div>
            <div className="contact md:flex flex-col gap-3 md:self-start">
            <h2 className="font-semibold text-2xl md:text-3xl">Fasilitas</h2>
                <ul>
                    {data.facilities.map(fasil => (
                        <li>{fasil.ket}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="lokasi flex flex-col gap-3 mt-5">
            <h2 className='font-medium text-2xl md:text-3xl'>Lokasi</h2>
            <div className="map flex gap-2">
            <i className="fa-solid fa-location-dot text-secondary"></i>
                <p className='font-semibold text-sm md:text-base'>{data.alamat}</p>
            </div>
        </div>
    </div>
  )
}

export default Part3