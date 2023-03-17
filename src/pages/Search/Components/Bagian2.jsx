import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../../components/Card/Card"
import { ApiURL } from "../../../config/ApiUrl";

const Bagian2 = () => {
    const [spaces,setSpaces] = useState([]);
    const [pages,setPages] = useState([]);
    const [loading,setLoading] = useState(false);
    const [index,setIndex] = useState(1);
    const [filtered,setFiltered] = useState('');
    const [result,setResult] = useState(0);
    const [error,setError] = useState('')
    const [search,setSearch] = useState('');

    const idxStyle = id => {
        let style = 'btn-orange-outline'
        if(id == index) {
            style += ' bg-secondary text-white'
        }
        return style
    }

    const handler = (filter)=> {
        if(filtered){
            setFiltered('')
        } else {
            setFiltered(filter)
        }
    }

  const getSpaces = ()=> {
    setLoading(true)
    let theLink = filtered||search? `${ApiURL()}/spaces/find?kategori=${filtered}&search=${search}&limit=&page=${index}` : `${ApiURL()}/spaces?limit=&page=${index}`
    axios.get(theLink)
    .then(res => {
    setSpaces(res.data.data)
    setResult(res.data.pagination.current_elements)
    const arr = []
    for(let i = 1;i < res.data.pagination.total_pages+1;i++) {
        arr.push(i)
        setPages(arr)
    }
    setLoading(false)
    })
    .catch(err=> {
        setLoading(false)
        setError(err.message)
    })
  }

  useEffect(()=> {
    getSpaces();
  },[index,filtered,search])
  return (
    <div className="mt-14 flex flex-col items-center md:block">
        <div className="contain mx-auto md:mx-20 flex flex-col gap-14">
            <div className="head">
                <h2 className="font-semibold text-3xl">Hasil</h2>
                <p>Menampilkan {result} hasil</p>
                <div className="buttons flex flex-col items-center justify-between mt-5 md:pr-8 md:flex-row gap-4 md:gap-0">
                    <div className="filter flex gap-5">
                        <button type="button" className="btn-orange-outline" onClick={()=>handler('coworking')}>Coworking</button>
                        <button type="button" className="btn-orange-outline" onClick={()=>handler('meeting room')}>Meeting Room</button>
                    </div>
                    <div className="w-full md:w-[268px] border-2 border-solid rounded-[10px] px-4 py-[10px] flex gap-4 items-center border-black">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="search" value={search} onChange={e=>setSearch(e.target.value)} className="outline-none"/>
                    </div>
                </div>
            </div>
            {error && <div className="text-red-500 text-xl font-bold">{error}!</div>}
            {loading && (<div className="mx-auto loader ease-linear rounded-full border-8 border-t-8 border-secondary-h h-32 w-32"></div>)}
            {!loading && <div className="result grid md:grid-cols-3 grid-cols-1 gap-14">
                {spaces.map(card=>(
                    <Card data={card} key={card.ID}/>
                ))}
                <div className="pagination self-center flex gap-7 justify-center items-center col-span-full">
                    {pages.map((page,index)=>(  
                        <button key={index} type="button" className={idxStyle(page)} onClick={()=>setIndex(page)}>{page}</button>
                    ))}
                </div>
            </div>}
        </div>
    </div>
  )
}

export default Bagian2