import Image from "next/image";
import MainLayout from "./components/layout/main";
import AdvanceChart from "./components/tradingview/chart/AdvanceChart";

export default function Home() {
  return (
    <>
      <header className="w-full h-16 flex justify-between items-center px-40">
        <div className="flex items-center space-x-5">
          <h1 className="text-xl font-medium">Arthahub</h1>
        </div>
        <div className="flex space-x-7 items-center">
          <div>
            <ul className="flex items-center space-x-2">
              <li>
                <a href="" className="text-sm hover:text-main-theme-1 duration-150">
                  Peraturan
                </a>
              </li>
              <li>
                <a href="" className="text-sm hover:text-main-theme-1 duration-150">
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-2">
            <a href="" className="text-sm">
              <button className="w-20 h-8 bg-transparent border border-main-theme-1 hover:bg-main-theme-1 duration-150">
                Masuk
              </button>
            </a>
            <a href="" className="text-sm">
              <button className="w-20 h-8 bg-main-theme-1 border border-main-theme-1 hover:bg-transparent duration-150">
                Daftar
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* main */}
      <div className="">
        {/* <AdvanceChart/> */}
      </div>
    </>
  );
}
