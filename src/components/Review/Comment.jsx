const Comment = ({data}) => {
  return (
    <div className="flex gap-3 items-center">
      <img src={data.image} className="self-center w-[61px]" />
      <div className="rate">
        <h3 className="font-medium text-xl">{data.name}</h3>
        <div className="rating">
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
          <i className="fa-solid fa-star text-yellow-400"></i>
        </div>
        <p className="w-[60%]">{data.comment}</p>
      </div>
    </div>
  )
}

export default Comment