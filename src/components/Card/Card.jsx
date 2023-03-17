import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({data}) => {
  const [ratings,SetRatings] = useState([]);
  useEffect(()=> {
    const arr = []
    for(let i = 1;i<data.rating+1;i++) {
      arr.push(i)
      SetRatings(arr)
    }
  },[])
  return (
    <div className='card flex flex-col  w-[375px] p-6 rounded-xl gap-3'>
        <div className="img-container h-[183px] overflow-hidden flex items-center">
          <img src={data.foto} alt="" className='w-full overflow-hidden' />
        </div>
        <h3 className='font-semibold text-2xl'>{data.nama}</h3>
        <div className="fasil">
            <p className='font-semibold'>{data.kategori=='coworking'?'Coworking Space':'Meeting Room'}</p>
            <p>Rp{data.harga}/Jam</p>
            <p>{data.jarak.toFixed(2)} km</p>
            <div className="rating flex items-center gap-3">
                <div className="rating">
                    {ratings.map(rating=>(
                        <i className="fa-solid fa-star text-yellow-400" key={rating}></i>
                    ))}
                </div>
                <p>{data.reviews_count} ulasan</p>
            </div>
        </div>
        <Link to={`/detail/${data.ID}`} className='self-center'><button type='button'className='w-[200px] btn-orange'>Detail</button></Link>
    </div>
  )
}

export default Card