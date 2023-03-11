import React from 'react'
import Card from '../../../components/Card/Card'
import cards from '../../../data/cards'
const Section2 = () => {

  return (
    <section className='container mx-auto lg:px-20 lg:h-[90vh]' id='search'>
        <h1 className='font-bold text-3xl text-center lg:text-left'>Terpopuler</h1>
        <div className="cards flex flex-col lg:flex-row items-center justify-evenly mt-[53px] gap-16 lg:gap-5">
          {cards.map(card=>(
            <Card data={card} key={card.id}/>
          ))}
        </div>
        
    </section>
  )
}

export default Section2