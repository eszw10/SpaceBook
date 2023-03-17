import React from 'react'
import Review from '../../../components/Review/Review'
import reviews from '../../../data/reviews'

const Section6 = () => {
  return (
    <div className='bg-primary flex flex-col items-center text-white justify-center lg:h-[80vh] gap-16 py-7 md:p-0 mb-28'>
        <h2 className='font-semibold text-center px-5 md:px-0 md:text-left text-2xl lg:text-3xl'>Apa kata mereka tentang SpaceBook?</h2>
        <div className="reviews flex flex-col md:flex-row gap-9">
            {reviews.map(review =>(
                <Review data={review} key={review.id}/>
            ))}
        </div>
    </div>
  )
}

export default Section6