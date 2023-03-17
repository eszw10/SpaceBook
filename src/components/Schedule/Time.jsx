const Time = ({data}) => {
  return (
    <div className={`${data.isBooked?'bg-grey-lact':'bg-success hover:border-success hover:bg-grey-f hover:border-2 hover:text-black'} text-white flex rounded-[10px] p-2 flex-col items-center shadow-md cursor-pointer`}>
        <p>{data.time}</p>
    </div>
  ) 
}

export default Time