import React from 'react'

const Part3 = () => {
  return (
    <section className='mx-20 flex flex-col gap-5 mt-20'>
        <div className="fasil flex justify-between items-center">
            <div className="fal1 flex flex-col gap-4">
                <h2 className='font-medium text-3xl'>Fasilitas</h2>
                <ul>
                    <li>Wifi Kencang</li>
                    <li>Proyektor</li>
                    <li>Snack dan Minuman</li>
                </ul>
            </div>
            <div className="fal2 flex flex-col gap-4">
                <h2 className='font-medium text-3xl'>Opening Hours</h2>
                <p>Mon-Fri</p>
                <div className="time flex gap-3 items-center">
                    <i className="fa-regular fa-clock text-secondary"></i>
                    <p>7am-6pm</p>
                </div>
            </div>
            <div className="fal3 flex flex-col gap-4">
                <h2 className='font-medium text-3xl'>Kapasitas</h2>
                <ul>
                    <li>Coworking Space - 25 orang</li>
                    <li>Meeting Room - 50 orang</li>
                </ul>
            </div>
        </div>
        <div className="lokasi flex flex-col gap-3 mt-20">
            <h2 className='font-medium text-3xl'>Lokasi</h2>
            <div className="map flex gap-2">
            <i className="fa-solid fa-location-dot text-secondary"></i>
                <p className='font-semibold'>Jl. Dewandaru No.68, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141</p>
            </div>
        </div>
    </section>
  )
}

export default Part3