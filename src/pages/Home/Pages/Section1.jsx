import { Link } from "react-router-dom"

const Section1 = () => {
  return (
    <section className='container lg:px-20 flex items-center lg:justify-between h-[90vh] gap-5 px-5'>
        <div className="open lg:w-[37%] flex flex-col items-center lg:items-start gap-3">
            <h2 className='font-semibold text-3xl text-grey text-center lg:text-left'>Membantu anda menemukan dan memesan Coworking Space terlengkap</h2>
            <p className='text-[#858585] text-center lg:text-left'>Menyediakan info terlengkap dari harga, kapasitas, dan lokasi Coworking Space</p>
            <Link type='button' className='lg:self-start btn-orange w-[170px] text-center lg:mt-5' to={window.localStorage.getItem('token')?'/cari':'/login'}>Cari Tempat</Link>
        </div>
        <div className="hidden lg:block img-container">
            <img src='/assets/images/landing.png' />
        </div>
    </section>
  )
}

export default Section1