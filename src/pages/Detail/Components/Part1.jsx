import { useNavigate } from "react-router-dom"

const Part1 = ({data}) => {
  const navigate = useNavigate();
  return (
    <div>
        <div className="contain mx-5 md:mx-20 flex flex-col gap-4">
            <div className="back flex items-center gap-2 cursor-pointer " onClick={()=>navigate(-1)}>
                <i className="fa-solid fa-less-than text-secondary font-semibold text-lg md:text-3xl"></i>
                <p className="font-semibold text-lg md:text-2xl">Back</p>
            </div>
            <div className="scrollbar img-container flex items-center gap-4 overflow-x-scroll md:overflow-hidden h-[250px]">
                {data.pictures && data.pictures.map((pic,index)=>(
                  <img src={pic} alt="" className="w-[350px]" key={index}/>
                ))}
            </div>
            <h1 className="font-semibold text-2xl md:text-4xl">{data.space.nama}</h1>
            <p className="font-medium text-lg">{data.space.kategori=='coworking'?'Coworking Space':'Meeting Room'}</p>
        </div>
    </div>
  )
}

export default Part1