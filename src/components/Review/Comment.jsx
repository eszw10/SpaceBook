import { useEffect, useState } from "react";

const Comment = ({data,rate}) => {
  const [ratings,SetRatings] = useState([]);
  useEffect(()=> {
    const arr = []
    for(let i = 1;i<rate+1;i++) {
      arr.push(i)
      SetRatings(arr)
    }
  },[])
  return (
    <div className="flex gap-3 items-center">
      <img src='/assets/images/user.png' className="self-center w-[61px]" />
      <div className="rate w-[50vw]">
        <h3 className="font-medium text-lg md:text-xl">{data.nama}</h3>
        <div className="rating">
          {ratings.map(rating => (
             <i className="fa-solid fa-star text-yellow-400" key={rating}></i>
          ))}
        </div>
        <p className="w-[90%] md:w-[60%] text-sm md:text-base">{data.ulasan}</p>
      </div>
    </div>
  )
}

export default Comment