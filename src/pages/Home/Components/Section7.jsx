import React from 'react'
import Kategori from '../../../components/Kategori/Kategori'

const Section7 = () => {
  return (
    <div className='container lg:h-[70vh] mb-20 lg:mb-0'>
        <div className='lg:mx-20 flex flex-col gap-7 text-center lg:text-left '>
            <h1 className='font-semibold text-3xl'>Kategori</h1>
            <div className="categories flex flex-col lg:flex-row justify-center items-center gap-5">
                <Kategori data="Coworking Space" image="/assets/images/pc.png"/>
                <Kategori data="Meeting room" image="/assets/images/meeting.png"/>
            </div>
        </div>
    </div>
  )
}

export default Section7