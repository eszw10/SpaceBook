const Section4 = () => {
  return (
    <section className='mt-20 md:mt-0 md:h-[70vh]'>
        <div className="container md:mx-auto bg-primary md:rounded-[10px] flex items-center justify-between w-full md:w-[80%] gap-16 md:px-0 md:py-0 py-5 px-9 text-center md:text-left">
            <img src='/assets/images/tentang.png' alt="" className='hidden md:block'/>
            <div className="typography text-white flex flex-col md:gap-8 gap-4 justify-evenly lg:items-start items-center lg:w-[90%]">
              <img src='/assets/icons/logo2.svg' className="hidden md:block md:w-[170px]" />
              <h2 className='font-semibold text-lg md:text-xl lg:text-4xl lg:w-10/12'>Apa itu SpaceBook</h2>
              <p className='lg:text-xl lg:w-[80%] text-sm'>SpaceBook adalah platform yang menyediakan informasi lengkap mengenai Coworking Space dan membantu pengguna untuk memesan tempat lebih cepat</p>
            </div>
        </div>
    </section>
  )
}

export default Section4