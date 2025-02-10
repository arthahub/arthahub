import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import Link from "next/link"

export const Navbar = () => {
    return (
        <header className="w-full h-20 flex justify-between items-center px-96">
            <div className="flex items-center space-x-20">
                <a href="/">
                    <h1 className="text-2xl font-medium">Arthahub</h1>
                </a>
                <ul className="flex items-center text-sm space-x-6">
                    <li>
                        <div className="flex items-center space-x-1 text-black cursor-pointer hover:text-main-theme-2">
                            <span>Data Pasar</span>
                            <FontAwesomeIcon icon={faAngleDown} className="w-3 h-3 text-gray-500" />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-1 text-black cursor-pointer hover:text-main-theme-2">
                            <span>Informasi aset</span>
                            <FontAwesomeIcon icon={faAngleDown} className="w-3 h-3 text-gray-500" />
                        </div>
                    </li>
                    <li>
                        <div className="flex items-center space-x-1 text-black cursor-pointer hover:text-main-theme-2">
                            <span>Tentang Arthahub</span>
                            <FontAwesomeIcon icon={faAngleDown} className="w-3 h-3 text-gray-500" />
                        </div>
                    </li>
                </ul>
            </div>
            <div className="flex space-x-7 items-center">
            <div>
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
            </div>
        </header>
    )
}