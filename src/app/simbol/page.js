"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import AdvanceChart from "../components/tradingview/chart/AdvanceChart";
import MostActiveStocks from "../components/MostActiveSymbol";
import Search from "../components/search";
import { data_simbol } from "../data/simbol";
import Link from "next/link";
import { MainLayout } from "../components/layout/MainLayout";

const Simbol = () => {
    const [simbolQueryData, setSimbolQueryData] = useState(null);
    const [resultData, setResultData] = useState([]);
    
    useEffect(() => {
        if (typeof window === "undefined") return; 

        const searchParams = new URLSearchParams(window.location.search);
        const simbolQuery = searchParams.get("simbol") || ""; 
        if (!simbolQuery) return;

        const simbolUpper = simbolQuery.toUpperCase();
        let result = [];

        Object.keys(data_simbol).forEach((kategori) => {
            data_simbol[kategori].forEach((item) => {
                if (item.symbol.toUpperCase() === simbolUpper) {
                    result.push({ ...item, kategori });
                }
            });
        });

        setSimbolQueryData(simbolQuery);
        setResultData(result);
    }, []); 

    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null; 
    return (
        <MainLayout>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5 lg:mt-16">
                <div className="col-span-1 lg:col-span-2 space-y-10">
                    {simbolQueryData && (
                        <div>
                            <div className="border-l-4 border-[rgb(252,195,146)] p-2 pl-4">
                                <h1 className="text-lg font-medium">Hasil Pencarian</h1>
                            </div>
                            <div className="mt-5">
                                {resultData.length > 0 ? (
                                    resultData.map((item, index) => (
                                        <Link key={index} className="w-full inline-block" href={`/simbol/${item.symbol}`}>
                                            <div className="w-full h-20 flex items-center space-x-3 rounded-md border p-3 hover:bg-neutral-100 duration-150">
                                                <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                                                <div>
                                                    <h1 className="font-medium">{item.symbol}</h1>
                                                    <p className="text-sm text-slate-600">{item.company || item.description || item.country || item.metal}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-600 mt-3">Simbol tidak ditemukan.</p>
                                )}
                            </div>
                        </div>
                    )}

                    <div className="">
                        <div className="border-l-4 border-[rgb(252,195,146)] p-2 pl-4">
                            <h1 className="text-lg font-medium">{simbolQueryData ? "Simbol lainnya" : "Simbol"}</h1>
                        </div>
                        <div className="mt-5 space-y-4">
                            {data_simbol.saham.map((data, index) => (
                                <Link key={`data-simbol-${index}`} className="w-full inline-block" href={`/simbol/${data.symbol}`}>
                                    <div className="w-full h-20 flex items-center space-x-3 rounded-md border p-3 hover:bg-neutral-100 duration-150">
                                        <div className="w-12 h-12 rounded-full bg-slate-200"></div>
                                        <div>
                                            <h1 className="font-medium">{data.symbol}</h1>
                                            <p className="text-sm text-slate-600">{data.company}</p>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="col-span-1">
                    <Search />
                    <div className="mt-5">
                        <MostActiveStocks />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Simbol;
