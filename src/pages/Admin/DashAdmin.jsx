import React from 'react'

const DashAdmin = () => {
  return (
    <div className='text-black px-32 py-20 flex flex-col gap-7'>
      <div className="name">
        <h2 className='font-semibold text-3xl'>EZO Working Space Malang</h2>
        <p>Salah satu working space ternyaman dan terlengkap di Malang, cocok untuk kerja, diskusi, dan seminar dengan berbagai fasilitas dan makanan</p>
      </div>
      <div className="harga mb-4">
        <header className='flex justify-between'>
          <h2 className='font-semibold text-2xl'>Harga</h2>
          <img src="/assets/icons/edit.svg" alt="" />
        </header>
        <div className="list flex justify-between w-[30%]">
          <p>Coworking Space</p>
          <p>Rp 50.000 / Jam</p>
        </div>
        <div className="list flex justify-between w-[30%]">
          <p>Meeting Room</p>
          <p>Rp 50.000 / Jam</p>
        </div>
      </div>
      <div className="lokasi flex flex-col gap-3">
        <h2 className='font-medium text-3xl mb-4'>Lokasi</h2>
        <div className="map flex gap-2">
          <i className="fa-solid fa-location-dot text-secondary"></i>
          <p className='font-semibold text-lg'>Jl. Dewandaru No.68, Jatimulyo, Kec. Lowokwaru, Kota Malang, Jawa Timur 65141</p>
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
            <p>100 orang</p>
          </div>
        </div>
      </div>
      <div className="fasil mb-4">
        <header className='flex justify-between'>
          <h2 className='font-semibold text-2xl'>Fasilitas</h2>
          <img src="/assets/icons/edit.svg" alt="" />
        </header>
        <ul className='font-semibold flex gap-6 text-lg'>
          <li>Wifi</li>
          <li>Proyektor</li>
          <li>Snack</li>
          <li>Mushalla</li>
        </ul>
      </div>
    </div>
  )
}

export default DashAdmin