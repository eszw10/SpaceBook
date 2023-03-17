import { useOutletContext } from "react-router-dom"

const Galeri = () => {
  const data = useOutletContext();
  return (
    <div className="px-32 py-20 flex flex-col justify-between h-full">
        <div className="img-container items-center justify-center grid grid-cols-3 gap-5 overflow-hidden h-[250px]">
            <img src={data.spaces[0].foto} alt="" />
        </div>
        <form className="relative btn flex bg-primary text-white items-center self-end gap-3 cursor-pointer hover:bg-primary-h">
          <input type="file" className="opacity-0 w-full absolute top-0 left-0" accept="image/png, image/jpeg, image/svg"/>
          <img src="/assets/icons/upload.svg" alt="" className="self-end" />
          <p>Unggah Foto</p>
        </form>
    </div>
  )
}

export default Galeri