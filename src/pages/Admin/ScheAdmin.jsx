import Date from "../../components/Schedule/Date"
import Time from "../../components/Schedule/Time"
import dates from "../../data/dates"
import times from "../../data/times"

const ScheAdmin = () => {
  return (
    <div className="text-black flex flex-col gap-4">
      <div className="buttons flex items-center justify-center gap-3">
        <button className="btn-orange">Coworking Space</button>
        <button className="btn-orange-outline">Meeting Room</button>
      </div>
      <div className="sign flex items-center justify-center gap-4">
        <img src="/assets/icons/warning.svg" alt="" />
        <p>Klik jam baru untuk mencatat reservasi terbaru pelanggan</p>
        <img src="/assets/icons/warning.svg" alt="" />
      </div>
      <form className="flex flex-col gap-5 justify-center items-center">
          <div className="jadwal grid grid-cols-7 gap-5 w-[50%] h-[50%] bg-slate-40">
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
        </form>
    </div>
  )
}

export default ScheAdmin