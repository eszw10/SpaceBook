import Date from "../../../components/Schedule/Date"
import Time from "../../../components/Schedule/Time"
import { useEffect, useState } from "react"
import Check from "../../../components/Modal/Check"

const Part2 = ({data}) => {
  const [modal,setModal] = useState(false);
  const [date,setDate] = useState({pilihan:[]})
  const [times,setTimes] = useState({options:[]})
  const [jam,setJam] = useState('');
  const [tanggal,setTanggal] = useState('');
  const [hari,setHari] = useState('');
  const modalHandler= (e) => {
    e.preventDefault();
    setModal(!modal)
  }

  useEffect(()=>{
    setDate(data)
    setTimes(data.space)
  },[data])
  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:mt-20">
        <form className="flex flex-col gap-5">
          <div className="jadwal md:overflow-hidden grid grid-cols-7 gap-2 md:gap-6 md:gap-x-9">
              {date.pilihan.slice(0,7).map(hari=>(
                <Date data={hari} key={hari.ID}/>
              ))}
              {date.pilihan.map(date=>(
                <div className="grid grid-rows-7 gap-4" key={date.ID}>
                <Time date={date} options={times.options}  jam={setJam} tanggal={setTanggal} hari={setHari}/>
              </div>
              ))}
          </div>
          <div className="sign flex gap-5">
              <div className="w-6 h-6 bg-success rounded-[10px]"></div>
              <p>Tersedia</p>
              <div className="w-6 h-6 bg-grey-lact rounded-[10px]"></div>
              <p>Tak Tersedia</p>
          </div>
          <button type="submit" className="self-center btn-orange w-[357px]" onClick={modalHandler}>Reservasi</button>
        </form>
        {modal && <Check handler={modalHandler} data={data.space} nomor={data.telp} jam={jam} tanggal={tanggal} hari={hari}/>}
    </div>
  )
}

export default Part2