import Image from "next/image";
import { MainLayout } from "./components/layout/MainLayout";
import AdvanceChart from "./components/tradingview/chart/AdvanceChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowTrendUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ArticleSection from "./components/homepage/ArticleSection";
import CurrencyPriceTableSection from "./components/homepage/CurrencyPriceTableSection";
import StockPriceTableSection from "./components/homepage/StockAndCryptoPriceTableSection";
import StockAndCryptoPriceTableSection from "./components/homepage/StockAndCryptoPriceTableSection";

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full grid grid-cols-3 mt-10 gap-x-10">
        <section className="col-span-2 h-50">
          {/* hero section */}
          <div className="w-full h-[23rem] bg-neutral-100 relative overflow-hidden">
            <Image src={'/assets/img/arthahub-1.jpg'} alt="arthahub-hero-section" layout="responsive" width={100} height={100} className="grayscale-[0.3]"/>
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col p-12">
              <h1 className="text-white text-4xl font-bold font-mono">Penyedia Informasi Keuangan Terpercaya Untuk Indonesia</h1>
              <p className="text-neutral-50 text-xl mt-3">
                ArthaHub adalah platform informasi keuangan yang menyajikan data akurat tentang valuta asing, saham, obligasi, logam mulia, dan kripto, bersumber dari lembaga keuangan terpercaya.
              </p>
              <Link href={"#"} className="w-fit mt-5">
                <div className="flex items-center group text-neutral-100">
                  <span className="font-semibold">Baca selengkapnya</span>
                  <div className="w-2 group-hover:w-3 duration-150"></div>
                  <FontAwesomeIcon icon={faArrowRight} className="w-3"/>
                </div>
                <div className="w-full h-[1px] bg-white"></div>
              </Link>
            </div>
          </div>
          {/* currency price table section */}
          <CurrencyPriceTableSection/>
          {/* stock price table section */}
          <StockAndCryptoPriceTableSection/>
        </section>
        <section className="col-span-1">
          {/* search */}
          <div className="w-full h-fit bg-gradient-to-tr from-[#edf9f4] to-[#f6f4ee] p-6">
            <div className="w-full font-semibold">
              <div className="flex items-center space-x-3">
                <FontAwesomeIcon icon={faArrowTrendUp} className="w-4 text-main-theme-2"/>
                <span className="text-slate-800">
                  Pencarian Simbol
                </span>
              </div>
            </div>
            <form className="mt-2" action={'/'} method="GET">
              <div className="w-full flex bg-white">
                <div className="w-[15%] grid place-content-center">
                  <FontAwesomeIcon icon={faSearch} className="w-3"></FontAwesomeIcon>
                </div>
                <input className="w-[85%] h-[45px] active:ring-0 active:outline-none focus:ring-0 focus:outline-none placeholder:text-slate-500 text-slate-800" placeholder="BBCA"></input>
              </div>
            </form>
          </div>
          {/* article */}
          <ArticleSection/>
        </section>
      </div>
    </MainLayout>
  );
}
