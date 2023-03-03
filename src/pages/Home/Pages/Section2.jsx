import React from 'react'
import Card from '../../../components/Card/Card'
import cards from '../../../data/cards'
const Section2 = () => {

  return (
    <section className='container mx-auto px-[98px] lg:h-[90vh]'>
        <h1 className='font-bold text-3xl'>Terpopuler</h1>
        <div className="cards flex flex-col lg:flex-row items-center justify-evenly mt-[53px] gap-16 lg:gap-5">
          {cards.map(card=>(
            <Card data={card}/>
          ))}
        </div>
        
    </section>
  )
}

export default Section2