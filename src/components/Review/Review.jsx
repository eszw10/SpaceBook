import React from 'react'

const Review = ({data}) => {
  return (
    <div className="review flex flex-col items-center bg-white rounded-[15px] gap-8 w-[300px] pb-16">
        <div className="line w-[70%] bg-secondary h-[8px] rounded-[10px]"></div>
        <div className="user flex gap-4">
            <img src={data.photo} alt="" />
            <div className="rate flex flex-col justify-center">
                <p className='text-black'>{data.nama}</p>
                <div className="rating">
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                </div>
             </div>
        </div>
        <p className='text-black w-[60%]'>
          {data.content}
        </p>
    </div>
  )
}

export default Review