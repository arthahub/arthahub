import Link from "next/link";

const ArticleSection = () => {
    return (
        <div className="space-y-10 mt-6">
            <div className="gap-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1">
                <Link href={"/berita/ihsg-melompat-1-36-ke-6355-top-gainers-lq45-jpfa-bbri-arto-senin-pagi"} className="inline-block">
                    <article>
                        <div className="w-full h-64">
                        <img src="https://mmc.tirto.id/image/otf/640x0/2024/06/28/antarafoto-ihsg-menguat-ikuti-bursa-kawasan-asia-dan-global-28624-ebp-08_ratio-16x9.jpg" className="w-full h-full"/>
                        </div>
                        <h1 className="text-slate-800 text-2xl mt-5">
                            Cermati Prediksi IHSG dan Rekomendasi Saham untuk Perdagangan Jumat (7/3)
                        </h1>
                        <p className="text-slate-500 mt-3">
                            Mengutip data Bursa Efek Indonesia (BEI) IHSG bertambah 86,44 poin atau naik 1,32% ke level 6.617,84 pada penutupan perdagangan Kamis (6/3/2025)...
                        </p>
                        <p className="text-sm font-medium mt-3">
                        2 Febuari 2025
                        </p>
                    </article>
                </Link>
                <Link href={"/berita/ihsg-melompat-1-36-ke-6355-top-gainers-lq45-jpfa-bbri-arto-senin-pagi"} className="inline-block">
                    <article>
                        <div className="w-full h-64">
                        <img src="https://foto.kontan.co.id/7VeZk06myWszTB7iWIoXfbPgXk4=/smart/2020/11/20/1666159318p.jpg" className="w-full h-full"/>
                        </div>
                        <h1 className="text-slate-800 text-2xl mt-5">
                            Indomobil Multi Jasa (IMJS) Bakal Rights Issue 3 Miliar Saham Baru, Ini Tujuannya
                        </h1>
                        <p className="text-slate-500 mt-3">
                            Emiten otomotif milik Grup Salim, PT Indomobil Multi Jasa Tbk (IMJS) bakal melaksanakan penambahan modal dengan memberikan hak memesan efek terlebih dahulu (PMHMETD) IV atau...
                        </p>
                        <p className="text-sm font-medium mt-3">
                            2 Febuari 2025
                        </p>
                    </article>
                </Link>
                <Link href={"/berita/ihsg-melompat-1-36-ke-6355-top-gainers-lq45-jpfa-bbri-arto-senin-pagi"} className="inline-block">
                    <article>
                        <div className="w-full h-64">
                        <img src="https://akcdn.detik.net.id/visual/2025/01/02/layar-menampilkan-pergerakan-perdagangan-saham-saat-pembukaan-perdagangan-tahun-di-gedunh-bursa-efek-indonesia-bei-jakarta-kam-6_169.jpeg?w=900&q=80" className="w-full h-full"/>
                        </div>
                        <h1 className="text-slate-800 text-2xl mt-5">
                            Saham Big Bank RI Pesta Pora, Ini Penyebabnya
                        </h1>
                        <p className="text-slate-500 mt-3">
                            Saham emiten big banks diserbu oleh investor hingga harganya melesat pada perdagangan Indeks Harga Saham Gabungan hari ini (6/3/2025). Berdasarkan data Refinitiv pada Kamis (6/3/2025) pukul 14.30 saham BBRI tercatat di 3.970 per saham atau menguat 3,38%...
                        </p>
                        <p className="text-sm font-medium mt-3">
                            2 Febuari 2025
                        </p>
                    </article>
                </Link>
            </div>
            <Link href={'/berita'} className="w-full h-14 inline-block mt-6">
                <button className="w-full h-full grid place-content-center bg-transparent border border-main-theme-2 hover:bg-main-theme-2 duration-150">
                    Lihat Selengkapnya
                </button>
            </Link>
        </div>
    )
}

export default ArticleSection;