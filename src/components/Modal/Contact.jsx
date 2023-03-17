import React from 'react'

const Contact = ({data, nomor, handler, jam, tanggal, hari}) => {
  return (
    <div className="fixed z-30 top-0 bg-opacity-30 flex justify-center items-center w-screen h-screen bg-slate-500">
        <div className="bg-white p-6 text-center flex flex-col gap-4 font-medium w-[50%] items-center rounded-xl lg:text-2xl relative">
            <i className="fa-solid fa-x absolute top-2 right-5 text-base text-gray-400 hover:cursor-pointer" onClick={handler}></i>
            <img src="/assets/images/WA.png" className="w-[100px] lg:w-[219px]" />
            <p>{nomor}</p>
            <p>{data.nama}</p>
            <a href={`https://wa.me/${nomor}?text=Halo!%20saya%20ingin%20booking%20pada%20hari%20${hari}%20tanggal%20${tanggal}%20jam%20${jam}`} target='_blank' className="btn-orange self-center">Hubungi Tempat</a>
        </div>
    </div>
  )
}

export default Contact