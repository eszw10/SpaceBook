import { Link } from "react-router-dom"

const Section1 = () => {
  return (
    <div className='container lg:px-20 flex items-center lg:justify-between h-[90vh] gap-5 px-5'>
        <div className="open lg:w-[37%] flex flex-col items-center lg:items-start gap-3">
            <h2 className='font-semibold text-3xl text-grey text-center lg:text-left'>Memudahkan Anda dalam menemukan dan reservasi Coworking Space dan Meeting Room</h2>
            <p className='text-[#858585] text-center lg:text-left'>Menyediakan info terlengkap seputar coworking space dan meeting room di wilayah Anda</p>
            <Link type='button' className='lg:self-start btn-orange w-[170px] text-center lg:mt-5' to='/cari'>Cari Tempat</Link>
        </div>
        <div className="hidden lg:block img-container">
            <img src='/assets/images/landing.png' />
        </div>
    </div>
  )
}

export default Section1