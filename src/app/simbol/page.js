"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"; 
import AdvanceChart from "../components/tradingview/chart/AdvanceChart";
import MostActiveStocks from "../components/MostActiveSymbol";
import Search from "../components/search";
import { data_simbol } from "../data/simbol";
import Link from "next/link";

const { MainLayout } = require("../components/layout/MainLayout");

const Simbol = () => {
    const [simbolQueryData, setSimbolQueryData] = useState(null)

    const searchParams = useSearchParams();
    const simbolQuery = searchParams.get("simbol");

    const [resultData, setResultData] = useState([]);

    useEffect(() => {
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
    }, [simbolQuery]);

    return (
        <MainLayout>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-5 lg:mt-16">
                <div className="col-span-1 lg:col-span-2 space-y-10">
                    {
                        simbolQuery &&
                        <div>
                            <div className="border-l-4 border-[rgb(252,195,146)] p-2 pl-4">
                                <h1 className="text-lg font-medium">Hasil Pencarian</h1>
                            </div>
                            <div className="mt-5">
                                {resultData.length > 0 ? (
                                    resultData.map((item, index) => (
                                        <Link className="w-full inline-block" href={`/simbol/${item.symbol}`}>
                                            <div className="w-full h-20 flex items-center space-x-3 rounded-md border p-3 hover:bg-neutral-100 duration-150" key={index}>
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
                    }

                    <div className="">
                        <div className="border-l-4 border-[rgb(252,195,146)] p-2 pl-4">
                            {
                                simbolQuery ?
                                <h1 className="text-lg font-medium">Simbol lainnya</h1>
                                :
                                <h1 className="text-lg font-medium">Simbol</h1>
                            }
                        </div>
                        <div className="mt-5 space-y-4">
                            {data_simbol.saham.map((data, index) => (
                                <Link className="w-full inline-block" href={`/simbol/${data.symbol}`}>
                                    <div className="w-full h-20 flex items-center space-x-3 rounded-md border p-3 hover:bg-neutral-100 duration-150" key={`data-simbol-${index}`}>
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
