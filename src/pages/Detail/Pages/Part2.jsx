import dates from "../../../data/dates"
import times from "../../../data/times"
import Date from "../../../components/Schedule/Date"
import Time from "../../../components/Schedule/Time"

const Part2 = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-4">
        <h3 className="text-center font-medium text-3xl">Harga</h3>
        <div className="booking flex gap-3">
            <div className="btn-orange-outline w-fit text-center">
                <p>Coworking Page</p>
                <p>50.000/jam</p>
            </div>
            <div className="btn-orange-outline active:bg-secondary-lact w-fit text-center">
                <p>Meeting Room</p>
                <p>50.000/jam</p>
            </div>
        </div>
        <form className="flex flex-col gap-5">
          <div className="jadwal grid grid-cols-7 gap-16">
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
          <button type="submit" className="self-center btn-orange w-[357px]">Reservasi</button>
        </form>
    </section>
  )
}

export default Part2