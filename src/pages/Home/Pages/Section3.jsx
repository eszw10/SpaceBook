import React from 'react'
import booking from '../../../assets/icons/booking.svg'
import tambah from '../../../assets/icons/tambah.svg'
import time from '../../../assets/icons/time.svg'

const Section3 = () => {
  return (
    <section className='container mx-auto md:h-[90vh] mt-20 md:mt-0'>
        <h1 className='font-medium text-3xl text-center'>Our service</h1>
        <div className="services flex flex-col md:flex-row items-center justify-between md:justify-around mt-[108px] gap-20 md:gap-0">
            <div className="service flex flex-col items-center justify-center text-center w-[309px] gap-4">
                <img src={booking} alt="" />
                <h2 className='font-semibold text-2xl'>Booking Tempat</h2>
                <p>Cari Coworking space sesuai kebutuhan dan booking tempat lebih cepat </p>
            </div>
            <div className="service flex flex-col items-center md:self-start text-center w-[309px] gap-4">
                <img src={tambah} alt="" />
                <h2 className='font-semibold text-2xl'>Tambah Tempat</h2>
                <p>Tambahkan Coworking space mu agar muncul pada fitur cari tempat</p>
            </div>
            <div className="service flex flex-col items-center justify-center text-center w-[309px] gap-4">
                <img src={time} alt="" />
                <h2 className='font-semibold text-2xl'>Kuota Terupdate</h2>
                <p>Kuota working space akan selalu terupdate tiap terjadi reservasi pada website</p>
            </div>
        </div>
    </section>
  )
}

export default Section3