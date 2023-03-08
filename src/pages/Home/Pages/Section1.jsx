const Section1 = () => {
  return (
    <section className='container mx-auto flex items-center lg:justify-around h-[90vh] gap-5'>
        <div className="open lg:w-[32%] flex flex-col items-center lg:items-start gap-3">
            <h2 className='font-semibold text-3xl text-grey text-center lg:text-left'>Membantu anda menemukan dan memesan Coworking Space terlengkap</h2>
            <p className='text-[#858585] text-center lg:text-left'>Menyediakan info terlengkap dari harga, kapasitas, dan lokasi Coworking Space</p>
            <button type='button' className='lg:self-start btn-orange w-[170px] lg:mt-5'>Cari Tempat</button>
        </div>
        <div className="hidden lg:block img-container">
            <img src='/assets/images/landing.png' />
        </div>
    </section>
  )
}

export default Section1