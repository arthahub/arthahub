"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"
import { useAuth } from "@/app/context/AuthContext";
import { useEffect, useState } from "react";

export const Navbar = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const { currentUser } = useAuth();

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 10)
    }, [currentUser])

    return (
        <header className="w-full h-20 flex justify-between items-center px-7 md:px-16 lg:px-16 2xl:px-96">
            <div className="flex items-center space-x-10 2xl:space-x-20">
                <a href="/">
                    <h1 className="text-2xl font-medium">Arthahub</h1>
                </a>
                <ul className="hidden lg:flex items-center text-sm space-x-6">
                    <li>
                        <button className="text-black cursor-pointer relative group">
                            <div className="flex items-center space-x-1 hover:text-main-theme-2 relative">
                                <div role="button" tabIndex={0} className="w-full h-full absolute top-0 left-0 hidden group-focus:inline-block"></div>

                                <span>Data Pasar</span>
                                <FontAwesomeIcon icon={faAngleDown} className="group-focus:rotate-180 w-3 h-3 text-gray-500 duration-150"/>
                            </div>

                            {/* dropdown */}
                            <div className="w-[37rem] invisible group-focus:visible grid grid-cols-3 gap-7 h-fit bg-white border rounded absolute opacity-0 group-focus:opacity-100 -top-5 group-focus:top-10 -left-1 p-5 z-10 duration-150 cursor-default">
                                {/* col 1 */}
                                <div className="w-full flex flex-col space-y-5">
                                    <div className="flex flex-col text-left">
                                        <h1 className="text-main-theme-2 font-medium">Data saham</h1>
                                        <ul className="text-xs mt-1 space-y-1">
                                            <li>
                                                <a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">
                                                    Indeks Saham
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" onMouseDown={(e) => e.preventDefault()} className="hover:underline duration-75">
                                                    Daftar Saham
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">
                                                    Daftar Saham Pre-Opening
                                                </a>
                                            </li>
                                            <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Saham Teraktif</a></li>
                                            <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Emiten Baru</a></li>
                                        </ul>
                                    </div>
                                    {/** Aneka Tambang **/}
                                    <div className="w-full flex flex-col space-y-5">
                                        <div className="flex flex-col text-left">
                                            <h1 className="text-main-theme-2 font-medium">Aneka Tambang</h1>
                                            <ul className="text-xs mt-1 space-y-1">
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Harga Emas</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Harga Nikel</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Harga Batu Bara</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Harga Perak</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Komoditas Lainnya</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* col 2 */}
                                <div className="w-full flex flex-col space-y-5">
                                    {/** Obligasi **/}
                                    <div className="w-full flex flex-col space-y-5">
                                        <div className="flex flex-col text-left">
                                            <h1 className="text-main-theme-2 font-medium">Obligasi</h1>
                                            <ul className="text-xs mt-1 space-y-1">
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Obligasi Negara</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Obligasi Korporasi</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Imbal Hasil Obligasi</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Rating Obligasi</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Pasar Obligasi</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="w-full flex flex-col space-y-5">
                                        <div className="flex flex-col text-left">
                                            <h1 className="text-main-theme-2 font-medium">Forex</h1>
                                            <ul className="text-xs mt-1 space-y-1">
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Kurs Mata Uang</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Analisis Forex</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Berita Forex</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Broker Forex</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* col 3 */}
                                <div className="w-full flex flex-col space-y-5">
                                    <div className="w-full flex flex-col space-y-5">
                                        <div className="flex flex-col text-left">
                                            <h1 className="text-main-theme-2 font-medium">Crypto</h1>
                                            <ul className="text-xs mt-1 space-y-1">
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Bitcoin</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Ethereum</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Cardano (ADA)</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Altcoins</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="w-full flex flex-col space-y-5">
                                        <div className="flex flex-col text-left">
                                            <h1 className="text-main-theme-2 font-medium">Ringkasan Perdagangan</h1>
                                            <ul className="text-xs mt-1 space-y-1">
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Volume Perdagangan</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Nilai Transaksi</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Frekuensi Perdagangan</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Top Gainers & Losers</a></li>
                                                <li><a href="#" onMouseDown={(e) => e.preventDefault()}  className="hover:underline duration-75">Ringkasan Pasar</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="text-black cursor-pointer relative group">
                            <div className="flex items-center space-x-1 hover:text-main-theme-2 relative">
                                <div role="button" tabIndex={0} className="w-full h-full absolute top-0 left-0 hidden group-focus:inline-block"></div>

                                <span>Informasi Aset</span>
                                <FontAwesomeIcon icon={faAngleDown} className="group-focus:rotate-180 w-3 h-3 text-gray-500 duration-150"/>
                            </div>

                            {/* dropdown */}
                            <div className="w-[37rem] invisible group-focus:visible grid grid-cols-3 gap-7 h-fit bg-white border rounded absolute opacity-0 group-focus:opacity-100 -top-5 group-focus:top-10 -left-1 p-5 z-10 duration-150 cursor-default">
                                {/* col 1 */}
                                <div className="w-full flex flex-col space-y-5">
                                <div className="w-full flex flex-col space-y-5">
                                        <div className="flex flex-col text-left">
                                            <h1 className="text-main-theme-2 font-medium">Berita Pasar</h1>
                                            <ul className="text-xs mt-1 space-y-1">
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Berita Saham</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Berita Forex</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Berita Crypto</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Berita Komoditas</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Berita Makroekonomi</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Berita Perusahaan</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="w-full flex flex-col space-y-5">
                                        <div className="flex flex-col text-left">
                                            <h1 className="text-main-theme-2 font-medium">Analisis dan Riset</h1>
                                            <ul className="text-xs mt-1 space-y-1">
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Analisis Teknikal</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Analisis Fundamental</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Outlook Pasar</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Strategi Investasi</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Rekomendasi Saham</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Analisis Sektor</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* col 2 */}
                                <div className="w-full flex flex-col space-y-5">
                                    <div className="w-full flex flex-col space-y-5">
                                        <div className="flex flex-col text-left">
                                            <h1 className="text-main-theme-2 font-medium">Edukasi dan Artikel</h1>
                                            <ul className="text-xs mt-1 space-y-1">
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Dasar-dasar Investasi</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Tips Trading</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Psikologi Trading</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Manajemen Risiko</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Istilah Keuangan</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Studi Kasus Investasi</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="w-full flex flex-col space-y-5">
                                        <div className="flex flex-col text-left">
                                            <h1 className="text-main-theme-2 font-medium">Regulasi dan Kebijakan</h1>
                                            <ul className="text-xs mt-1 space-y-1">
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Aturan Pasar Modal</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Peraturan Kripto</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Kebijakan Moneter</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Regulasi Perdagangan</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Pajak Investasi</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Perizinan dan Kepatuhan</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* col 3 */}
                                <div className="w-full flex flex-col space-y-5">
                                    <div className="w-full flex flex-col space-y-5">
                                        <div className="flex flex-col text-left">
                                            <h1 className="text-main-theme-2 font-medium">Perusahaan & Industri</h1>
                                            <ul className="text-xs mt-1 space-y-1">
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Laporan Keuangan</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">IPO & Rights Issue</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Sektor Industri</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Akuisisi & Merger</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Kinerja Perusahaan</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </li>
                    <li>
                        <button className="text-black cursor-pointer relative group">
                            <div className="flex items-center space-x-1 hover:text-main-theme-2 relative">
                                <div role="button" tabIndex={0} className="w-full h-full absolute top-0 left-0 hidden group-focus:inline-block"></div>

                                <span>Tentang Arthahub</span>
                                <FontAwesomeIcon icon={faAngleDown} className="group-focus:rotate-180 w-3 h-3 text-gray-500 duration-150"/>
                            </div>

                            {/* dropdown */}
                            <div className="w-[35rem] invisible group-focus:visible grid grid-cols-3 gap-7 h-fit bg-white border rounded absolute opacity-0 group-focus:opacity-100 -top-5 group-focus:top-10 -left-1 p-5 z-10 duration-150 cursor-default">
                                {/* col 1 */}
                                <div className="w-full flex flex-col space-y-5">
                                    <div className="flex flex-col text-left">
                                        <h1 className="text-main-theme-2 font-medium">Ketahui tentang kami</h1>
                                        <ul className="text-xs mt-1 space-y-1">
                                            <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Profil Arthahub</a></li>
                                            <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Tim kami</a></li>
                                            <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Karir</a></li>
                                            <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Visi Misi</a></li>
                                            <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Kebijakan privasi</a></li>
                                        </ul>
                                    </div>
                                </div>
                                {/* col 2 */}
                                <div className="w-full flex flex-col space-y-5">
                                    <div className="w-full flex flex-col space-y-5">
                                        <div className="flex flex-col text-left">
                                            <h1 className="text-main-theme-2 font-medium">Link Cepat</h1>
                                            <ul className="text-xs mt-1 space-y-1">
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="/komunitas" className="hover:underline duration-75">Komunitas</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="/berita" className="hover:underline duration-75">Berita</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="/simbol" className="hover:underline duration-75">Simbol</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* col 3 */}
                                <div className="w-full flex flex-col space-y-5">
                                    <div className="w-full flex flex-col space-y-5">
                                        <div className="flex flex-col text-left">
                                            <h1 className="text-main-theme-2 font-medium">Hubungi Kami</h1>
                                            <ul className="text-xs mt-1 space-y-1">
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Instagram</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">X</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Facebook</a></li>
                                                <li><a onMouseDown={(e) => e.preventDefault()} href="#" className="hover:underline duration-75">Email</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
            <div className="flex space-x-7 items-center">
                <div className="hidden lg:flex">
                    <ul className="flex items-center space-x-2">
                    <li>
                        <a href="" className="text-sm hover:text-main-theme-2 duration-150">
                        Peraturan
                        </a>
                    </li>
                    <li>
                        <a href="" className="text-sm hover:text-main-theme-2 duration-150">
                        Hubungi Kami
                        </a>
                    </li>
                    </ul>
                </div>

            {
                currentUser && !isLoading ?
                    <div>
                        <a href="/dashboard" className="text-sm">
                            <button className="w-28 h-8 bg-transparent border border-main-theme-2 hover:bg-main-theme-2 duration-150">
                                Dasbor
                            </button>
                        </a>
                    </div>
                    :
                    <div className="flex items-center space-x-2">
                        <a href="/masuk" className="text-sm">
                            <button className="w-20 h-8 bg-transparent border border-main-theme-2 hover:bg-main-theme-2 duration-150">
                                Masuk
                            </button>
                        </a>
                        <a href="/daftar" className="text-sm">
                            <button className="w-20 h-8 bg-main-theme-2 border border-main-theme-2 hover:bg-transparent duration-150">
                                Daftar
                            </button>
                        </a>
                    </div>
            }
            </div>
        </header>
    )
}