const Date = ({data}) => {
  return (
    <div className="flex flex-col items-center">
        <h3 className="font-semibold text-2xl">{data.day}</h3>
        <p>{data.tgl}</p>
    </div>
  )
}

export default Date