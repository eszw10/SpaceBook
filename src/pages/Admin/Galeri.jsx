const Galeri = () => {
  return (
    <div className="px-32 py-20 flex flex-col justify-between h-full">
        <div className="img-container grid grid-cols-3 gap-5 overflow-hidden">
            <img src="/assets/images/wp1.png" alt="" />
            <img src="/assets/images/wp1.png" alt="" />
            <img src="/assets/images/wp1.png" alt="" />
            <img src="/assets/images/wp1.png" alt="" />
        </div>
        <img src="/assets/icons/add.svg" alt="" className="self-end" />
    </div>
  )
}

export default Galeri