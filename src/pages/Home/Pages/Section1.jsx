import React from 'react'
import pic from '../../../assets/images/landing.png'

const Section1 = () => {
  return (
    <section className='container mx-auto flex items-center lg:justify-around h-[90vh] gap-5 px-5'>
        <div className="open lg:w-[30%] flex flex-col items-center lg:items-start gap-3">
            <h2 className='font-semibold text-3xl text-grey text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ipsum eget</h2>
            <p className='text-[#858585] text-center lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ipsum eget</p>
            <button type='button' className='lg:self-start btn-orange w-[170px]'>Cari info</button>
        </div>
        <div className="hidden lg:block img-container">
            <img src={pic} />
        </div>
    </section>
  )
}

export default Section1