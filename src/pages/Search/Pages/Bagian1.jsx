const Bagian1 = () => {
  return (
    <section className="lg:h-[60vh] bg-primary">
        <div className="mx-auto flex items-center justify-between h-full px-20">
            <div className="typo w-[35%] text-white flex flex-col gap-3">
                <h2 className="font-semibold text-3xl">Cari info lengkap mulai dari harga hingga fasilitas</h2>
                <p>SpaceBook hadir sebagai platform dengan informasi terlengkap</p>
            </div>
            <img src="/assets/images/dashboard.png" className="hidden lg:block" />
        </div>
    </section>
  )
}

export default Bagian1