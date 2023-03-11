const Kategori = ({data, image}) => {
  return (
    <div className="flex flex-col w-[350px] lg:w-[476px] shadow-xl">
        <img src={image} alt="" />
        <div className="typo flex items-center justify-between p-3">
            <p className="font-semibold text-primary">{data}</p>
        </div>
    </div>
  )
}

export default Kategori