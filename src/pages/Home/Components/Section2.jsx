import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../../components/Card/Card'
import { ApiURL } from '../../../config/ApiUrl';

const Section2 = () => {
  const [spaces,setSpaces] = useState([]);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState('');

  const getSpaces = ()=> {
    setLoading(true)
    axios.get(`${ApiURL()}/spaces?limit=3&page=2`)
    .then(res => {
    setSpaces(res.data.data)
    setLoading(false);
    })
    .catch(err=> {
      setLoading(false)
      setError(err.message)
    })
  }

  useEffect(()=> {
    getSpaces();
  },[])
  
  return (
    <div className='container mx-auto lg:px-20 lg:h-[90vh]' id='search'>
        <h1 className='font-bold text-3xl text-center lg:text-left'>Terpopuler</h1>
        <div className="cards flex flex-col lg:flex-row items-center justify-evenly mt-[53px] gap-16 lg:gap-5 lg:h-[70%]">
          {error && <div className="text-red-500 text-xl font-bold">{error}!</div>}
          {loading && (<div className="justify-self-center loader ease-linear rounded-full border-8 border-t-8 border-secondary-h h-32 w-32"></div>)}
          {!loading && spaces.map(card=>(
            <Card data={card} key={card.ID}/>
          ))}
        </div>
        
    </div>
  )
}

export default Section2