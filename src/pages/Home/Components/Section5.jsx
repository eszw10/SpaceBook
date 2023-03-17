import { useState } from 'react';
import ContactUs from '../../../components/Modal/ContactUs'
import '../Home.css'

const Section5 = () => {
    const [modal,setModal] = useState(false);
    const modalHandler= () => setModal(!modal)
  return (
    <div className='md:mt-0 mt-20 mb-20 lg:mb-32 md:h-[50vh] flex relative' id='add'>
        <div className="md:container md:self-center mx-auto bagan flex items-center md:justify-around md:w-[70%] rounded-[20px] p-5 md:p-0 ">
            <div className="content flex flex-col items-center justify-center text-center md:text-left gap-3">
                <div className="typo">
                    <h3 className='font-semibold  md:text-2xl'>Ingin menambahkan coworking spacemu?</h3>
                    <p className='text-xs md:text-base'>Daftarkan coworking spacemu di sini</p>
                </div>
                <div className="buttons flex md:w-full gap-3">
                    <button className='btn-orange md:w-[50%] text-xs md:text-base' onClick={modalHandler}>Hubungi kami</button>
                </div>
            </div>
            <img src='/assets/images/Brazuca.png' alt="" className='hidden md:block' />
        </div>
        {modal && <ContactUs handler={modalHandler}/>}
    </div>
  )
}

export default Section5