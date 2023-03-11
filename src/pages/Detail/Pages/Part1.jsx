const Part1 = () => {
  return (
    <section>
        <div className="contain mx-20 flex flex-col gap-4 lg:h-[50vh]">
            <div className="back flex items-center">
                <i className="fa-solid fa-less-than text-secondary font-semibold"></i>
                <p className="font-semibold">Back</p>
            </div>
            <div className="img-container flex gap-4">
                <img src="assets/images/wp1.png" alt="" />
                <img src="assets/images/wp2.png" alt="" />
                <img src="assets/images/wp3.png" alt="" />
            </div>
            <h1 className="font-semibold text-4xl">EZO Working Space</h1>
        </div>
    </section>
  )
}

export default Part1