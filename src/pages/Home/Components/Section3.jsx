const Section3 = () => {
  return (
    <div className='container mx-auto md:h-[80vh] mt-20 md:mt-0'>
        <h1 className='font-semibold text-3xl text-center'>Layanan kami</h1>
        <div className="services flex flex-col md:flex-row items-center justify-between md:justify-around mt-[108px] gap-20 md:gap-0">
            <div className="service flex flex-col items-center justify-center text-center w-[309px] gap-4">
                <img src='/assets/icons/booking.svg' alt="" />
                <h2 className='font-semibold text-2xl'>Booking Tempat</h2>
                <p>Booking coworking space dan meeting room sesuai dengan kebutuhan Anda</p>
            </div>
            <div className="service flex flex-col items-center md:self-start text-center w-[309px] gap-4">
                <img src='/assets/icons/tambah.svg' alt="" />
                <h2 className='font-semibold text-2xl'>Tambah Tempat</h2>
                <p>Tambahkan coworking space dan meeting roommu di SpaceBook untuk menjangkau customer lebih luas</p>
            </div>
            <div className="service flex flex-col items-center justify-center text-center w-[309px] gap-4">
                <img src='/assets/icons/time.svg' alt="" />
                <h2 className='font-semibold text-2xl'>Kuota Terupdate</h2>
                <p>Menampilkan kuota terupdate coworking space dan meeting room yang sesuai dengan jadwal Anda</p>
            </div>
        </div>
    </div>
  )
}

export default Section3