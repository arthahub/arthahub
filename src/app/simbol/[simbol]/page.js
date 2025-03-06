'use client';
import { MainLayout } from "@/app/components/layout/MainLayout";
import MostActiveStocks from "@/app/components/MostActiveSymbol";
import Search from "@/app/components/search";
import SymbolKeyData from "@/app/components/SymbolKeyData";
import AdvanceChart from "@/app/components/tradingview/chart/AdvanceChart";
import { data_simbol } from "@/app/data/simbol";
import { faArrowLeft, faArrowTrendUp, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailSimbol = () => {
    const { simbol } = useParams();
    const [ dataSymbol, setDataSymbol ] = useState(null);

    let foundSymbol = null;

    for (const category in data_simbol) {
        foundSymbol = data_simbol[category].find(item => item.symbol === simbol);
        if (foundSymbol) break;
    }

    useEffect(() => {
        console.log(foundSymbol);
        setDataSymbol(foundSymbol);
    }, [foundSymbol])

    return (
        <MainLayout>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-3 lg:mt-16">
                <div className="grid-cols-1 lg:col-span-2">
                    <Link href={'/simbol'}>
                        <div className="flex items-center group">
                            <FontAwesomeIcon icon={faArrowLeft}/>
                            <div className="w-2 group-hover:w-4 duration-150"></div>
                            <p>Kembali ke kumpulan simbol</p>
                        </div>
                    </Link>
                    <div className="w-full pl-4 py-2 border-l-4 border-main-theme-2 mb-10 mt-6">
                        <h1 className="text-xl font-medium">Data Simbol - {dataSymbol && dataSymbol.symbol}</h1>
                    </div>
                    <div className="h-[40vh]">
                        <AdvanceChart symbol={simbol}/>
                    </div>
                    <div className="mt-10">
                        <SymbolKeyData symbolData={dataSymbol}/>
                    </div>
                </div>
                <div className="col-span-1">
                    <Search/>
                    <div className="mt-5">
                        <MostActiveStocks/>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default DetailSimbol;