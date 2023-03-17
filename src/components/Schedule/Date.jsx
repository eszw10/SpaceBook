const Date = ({data}) => {
  return (
    <div className="flex flex-col items-center">
        <h3 className="font-semibold text-sm md:text-2xl">{data.day}</h3>
        <p className="text-xs md:text-base">{data.tgl}</p>
    </div>
  )
}

export default Date