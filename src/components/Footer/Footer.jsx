import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <div className="hidden md:flex">
            <div className="foot flex flex-col gap-5 bg-primary py-8 w-1/2 pl-6 text-white">
                <Link to={'/'} className='relative -left-[10px]'><img src='/assets/icons/logo2.svg' alt="logo" className='h-[60px] ' width={170} /></Link>
                <p className='w-[80%] text-xl'>
                    Kerja jadi lebih mudah dan nyaman, booking gaperlu ribet lagi
                </p>
                <div className="followUs flex items-center gap-8 md:flex-col md:items-start lg:flex-row">
                    <h1 className='font-semibold text-2xl'>Follow us</h1>
                    <div className="sosmed flex gap-2">
                        <img src='/assets/icons/instagram.svg' alt="" />
                        <img src='/assets/icons/facebook.svg' alt="" />
                        <img src='/assets/icons/linkedin.svg' alt="" />
                        <img src='/assets/icons/whatsapp.svg' alt="" />
                    </div>
                </div>
            </div>
            <div className="bg-[#f3f3f3] service flex justify-evenly items-center w-full">
                <div className="layanans flex justify-evenly w-full items-center">
                    <div className="layanan self-start">
                        <h2 className='font-bold text-2xl'>Tentang</h2>
                        <p>Perusahaan</p>
                        <p>Blog</p>
                    </div>
                    <div className="layanan self-start">
                        <h2 className='font-bold text-2xl'>Produk</h2>
                        <p>Ringkasan </p>
                        <p>Fitur</p>
                    </div>
                    <div className="layanan self-start">
                        <h2 className='font-bold text-2xl'>Bantuan</h2>
                        <p>Syarat dan Ketentuan</p>
                        <p>Kebijakan Privasi</p>
                        <p>Kontak</p>
                    </div>
                </div>
            </div>
        </div>
       <footer className='bg-primary-dark flex items-start justify-center py-5'>
        <p className='text-white text-center md:text-left'>Copyright @2023 SpaceBook All Rights Reserved.</p>
       </footer>
    </footer>
  )
}

export default Footer