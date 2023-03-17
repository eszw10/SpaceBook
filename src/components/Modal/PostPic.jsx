import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { adminToken, ApiURL } from '../../config/ApiUrl';


const PostPic = ({handler,file}) => {
    const navigate = useNavigate()
    const handleSubmit = (e)=> {
        e.preventDefault();
        const formdata = new FormData;
        formdata.append('foto',file)
        axios.post(`${ApiURL()}/owner/picture`, formdata,{
            headers: {
                Authorization:adminToken()
            }
        }).then(()=> navigate(0))
    }
  return (
    <form className="fixed z-30 left-0 top-0 bg-opacity-30 flex justify-center items-center w-screen h-screen bg-slate-500" onSubmit={handleSubmit}>
        <div className="bg-white p-6 text-center flex flex-col gap-4 font-medium w-[50%] items-center rounded-xl lg:text-2xl relative">
            <i className="fa-solid fa-x absolute top-2 right-5 text-base text-gray-400 hover:cursor-pointer" onClick={handler}></i>
            <img src={URL.createObjectURL(file)} alt="" />
            <button type='submit' className='btn-orange'>Unggah</button>
        </div>
    </form>
  )
}

export default PostPic