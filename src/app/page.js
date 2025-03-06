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
import MarketEvent from "./components/homepage/MarketEvent";
import Search from "./components/search";

export default function Home() {
  return (
    <MainLayout>
      <div className="w-full grid grid-cols-1 xl:grid-cols-3 mt-3 md:mt-10 gap-10">
        <section className="col-span-1 xl:col-span-2 h-50">
          {/* hero section */}
          <div className="w-full h-[23rem] bg-neutral-100 relative overflow-hidden">
            <Image
              src="/assets/img/arthahub-1.jpg"
              alt="arthahub-hero-section"
              layout="fill" 
              objectFit="cover"
              className="grayscale-[0.3]"
            />
            
            {/* Overlay dan teks */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col p-12">
              <h1 className="text-white text-2xl md:text-4xl font-bold font-mono">
                Penyedia Informasi Keuangan Terpercaya Untuk Indonesia
              </h1>
              <p className="text-neutral-50 text-sm md:text-xl mt-3">
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
          {/* market event */}
          <MarketEvent/>
        </section>
        <section className="col-span-1">
          {/* search */}
          <Search/>
          {/* article */}
          <ArticleSection/>
        </section>
      </div>
    </MainLayout>
  );
}
