import React from 'react'
import kursi from '../../../assets/images/kursi.png'

const Section4 = () => {
  return (
    <section className='container lg:h-[70vh] mt-20 md:mt-0'>
        <div className="content container mx-auto  flex items-center justify-end relative lg:pr-[133px]">
            <img src={kursi} alt="" className='absolute left-4 lg:left-[143px] -top-6 lg:-top-[105px] w-[170px] lg:w-[500px] lg:h-[500px]'/>
            <div className="typography text-white bg-primary lg:rounded-[10px] md:pt-[71px] md:pl-[220px] md:pb-[137px] lg:w-[70%] pl-48 pr-5 flex flex-col pb-7 pt-7 gap-3">
                <h2 className='font-semibold text-sm md:text-xl lg:text-4xl lg:w-10/12'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ipsum eget </h2>
                <p className='lg:text-xl lg:w-[70%] text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ipsum eget</p>
            </div>
        </div>
    </section>
  )
}

export default Section4