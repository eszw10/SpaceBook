import Card from "../../../components/Card/Card"
import cards2 from "../../../data/cards2"

const Bagian2 = () => {
  return (
    <section className="mt-14">
        <div className="contain mx-20 flex flex-col gap-14">
            <div className="head">
                <h2 className="font-semibold text-3xl">Hasil</h2>
                <p>Menampilkan 133 hasil</p>
                <div className="buttons flex items-center justify-between mt-5 pr-8">
                    <div className="filter flex gap-5">
                        <button type="button" className="btn-orange-outline">Coworking</button>
                        <button type="button" className="btn-orange-outline">Meeting Room</button>
                    </div>
                    <div className="search border-2 border-solid rounded-[10px] px-4 py-[10px] flex gap-4 items-center border-black">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="search" className="outline-none"/>
                    </div>
                </div>
            </div>
            <div className="result grid grid-cols-3 gap-14">
                {cards2.map(card=>(
                    <Card data={card} key={card.id}/>
                ))}
                <div className="pagination self-center flex gap-7 justify-center items-center col-span-full">
                    <button type="button" className="btn-orange-outline">1</button>
                    <button type="button" className="btn-orange-outline">2</button>
                    <button type="button" className="btn-orange-outline">3</button>
                    <button type="button" className="btn-orange-outline">4</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Bagian2