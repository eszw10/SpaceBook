const Time = ({data}) => {
  return (
    <div className={`${data.isBooked?'bg-grey-lact':'bg-success hover:border-success hover:bg-grey-f hover:border-2 hover:text-black'} text-white flex rounded-[10px] p-3 flex-col items-center gap-5 shadow-md`}>
        <p>{data.time}</p>
    </div>
  ) 
}

export default Time