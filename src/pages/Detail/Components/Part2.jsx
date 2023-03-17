import dates from "../../../data/dates"
import times from "../../../data/times"
import Date from "../../../components/Schedule/Date"
import Time from "../../../components/Schedule/Time"
import { useState } from "react"
import Check from "../../../components/Modal/Check"

const Part2 = () => {
  const [modal,setModal] = useState(false);
  const modalHandler= (e) => {
    e.preventDefault();
    setModal(!modal)
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4 lg:mt-20">
        <form className="flex flex-col gap-5">
          <div className="jadwal md:overflow-hidden grid grid-cols-7 gap-2 md:gap-6 md:gap-x-9">
              {dates.map(date=>(
                <Date data={date} key={date.id}/>
              ))}
              {times.map(time=>(
                <Time data={time} key={time.id}/>
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
        {modal && <Check handler={modalHandler}/>}
    </div>
  )
}

export default Part2