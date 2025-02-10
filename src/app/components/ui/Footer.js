import { faFacebook, faInstagram, faTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <footer className="w-full h-fit py-20 px-96 mt-10">
            <div className="border-t border-neutral-300 pt-5 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-y-10 l:gap-y-0 mt-[46.96px]">    
                    <div className="space-y-[36px]">
                        <h3 className="font-medium mb-2 text-oxfordblue text-sm">Layanan</h3>
                        <ul className="space-y-2 xl:space-y-4 text-slategray">
                            <li><a href="#" className="hover:underline">Data Mata Uang</a></li>
                            <li><a href="#" className="hover:underline">Harga Saham</a></li>
                            <li><a href="#" className="hover:underline">Obligasi & Surat Utang</a></li>
                            <li><a href="#" className="hover:underline">Harga Emas</a></li>
                            <li><a href="#" className="hover:underline">Analisis Pasar</a></li>
                            <li><a href="#" className="hover:underline">Berita Keuangan</a></li>
                        </ul>
                    </div>

                    <div className="space-y-[36px]">
                        <h3 className="font-medium mb-2 text-oxfordblue text-sm">Peta Situs</h3>
                        <ul className="space-y-2 xl:space-y-4 text-slategray">
                            <li><a href="#" className="hover:underline">Berita Ekonomi</a></li>
                            <li><a href="#" className="hover:underline">Panduan Investasi</a></li>
                            <li><a href="#" className="hover:underline">Indeks Saham</a></li>
                            <li><a href="#" className="hover:underline">Forex & Komoditas</a></li>
                            <li><a href="#" className="hover:underline">Laporan Keuangan</a></li>
                            <li><a href="#" className="hover:underline">FAQ & Bantuan</a></li>
                        </ul>
                    </div>

                    <div className="space-y-[36px]">
                        <h3 className="font-medium mb-2 text-oxfordblue text-sm">Sumber Data</h3>
                        <ul className="space-y-2 xl:space-y-4 text-slategray">
                            <li><a href="https://www.idx.co.id" className="hover:underline" target="_blank">Bursa Efek Indonesia (IDX)</a></li>
                            <li><a href="https://www.bi.go.id" className="hover:underline" target="_blank">Bank Indonesia</a></li>
                            <li><a href="https://www.ojk.go.id" className="hover:underline" target="_blank">Otoritas Jasa Keuangan (OJK)</a></li>
                            <li><a href="https://www.kemenkeu.go.id" className="hover:underline" target="_blank">Kementerian Keuangan</a></li>
                            <li><a href="https://www.cnbcindonesia.com/market" className="hover:underline" target="_blank">CNBC Indonesia</a></li>
                            <li><a href="https://finance.yahoo.com" className="hover:underline" target="_blank">Yahoo Finance</a></li>
                        </ul>
                    </div>
        
                    <div className="col-span-2 flex justify-end">
                        <div className="space-y-[40px]">
                            <div className="w-full ml-auto space-y-7">
                                <h3 className="font-medium mb-2 text-oxfordblue text-sm">Hubungi Kami</h3>
                                <div>
                                    <p className="mb-4 text-oxfordblue text-[15px] font-medium">Komunikasi lebih lanjut</p>
                                    <div className="w-full lg:w-[367px] h-[48px] rounded-full flex items-center custom-shadow-dark-teal overflow-hidden pl-[17.92px] bg-[#f8fafb] custom-box-shadow-14">
                                        <FontAwesomeIcon icon={faSearch} className="w-4 text-slate-500"/>
                                        <input
                                            id="email-input"
                                            type="email"
                                            placeholder="email@mail.com"
                                            className="h-full flex-grow py-2 px-4 rounded-full border-none ring-0 focus:outline-none focus:ring-0 bg-[#f8fafb] text-[#99A3AD] text-sm appearance-none"
                                        />
                                        <button className="w-[114px] h-full bg-main-theme-2 text-white rounded-full text-sm font-semibold px-[14px]">Kirim</button>
                                    </div>  
                                </div>
                            </div>
                            <div className="w-full ml-auto space-y-7">
                                <div>
                                    <p className="mb-4 text-oxfordblue text-[15px] font-medium">Lihat juga :</p>
                                    <div className="flex items-center gap-x-[16px] mt-[12px]">
                                        <FontAwesomeIcon icon={faInstagram} className="w-4"/>
                                        <FontAwesomeIcon icon={faFacebook} className="w-4"/>
                                        <FontAwesomeIcon icon={faXTwitter} className="w-4"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr/>
            <div className="flex justify-between mt-[16px]">
                <span className="text-[10px]">
                    2024 &copy; Arthahub
                </span>
                <a href="#" className="text-black text-[10px]">
                    Kebijakan Privasi
                </a>
            </div>
        </footer>
    );
}

export default Footer;