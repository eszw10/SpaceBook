const Contact = ({handler}) => {
  return (
    <div className="fixed z-30 top-0 bg-opacity-30 flex justify-center items-center w-screen h-screen bg-slate-500">
        <div className="bg-white p-6 text-center flex flex-col gap-4 font-medium w-[50%] items-center rounded-xl lg:text-2xl relative">
            <i className="fa-solid fa-x absolute top-2 right-5 text-base text-gray-400 hover:cursor-pointer" onClick={handler}></i>
            <img src="/assets/images/WA.png" className="w-[100px] lg:w-[219px]" />
            <p>+62 811-5502-004</p>
            <p>Admin SpaceBook</p>
            <a href="https://wa.me/08115502004?text=Halo%20saya%20ingin%20menambahkan%20workspace" target='_blank' className="btn-orange self-center">Hubungi Admin</a>
        </div>
    </div>
  )
}

export default Contact