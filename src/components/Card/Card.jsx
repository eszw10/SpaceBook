import React from 'react'
import './Card.css'
import wp1 from '../../assets/images/wp1.png'

const Card = ({data}) => {
  return (
    <div className='card flex flex-col  w-[375px] px-6 py-6 rounded-xl gap-3'>
        <img src={data.image} alt="" className='w-full' />
        <h3 className='font-semibold text-2xl'>{data.name}</h3>
        <div className="fasil">
            <p>{data.price}</p>
            <p>{data.distance}</p>
            <div className="rating flex items-center gap-3">
                <div className="rating">
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                    <i className="fa-solid fa-star text-yellow-400"></i>
                </div>
                <p>{data.count} review</p>
            </div>
        </div>
        <button type='button'className='self-center w-[200px] btn-orange'>Book</button>
    </div>
  )
}

export default Card