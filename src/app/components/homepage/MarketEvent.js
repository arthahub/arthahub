'use client';

import { getWeekDates } from "@/app/function/getWeekDates";
import { faArrowsSplitUpAndLeft, faCalendar, faCalendarAlt, faChartBar, faChartLine, faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const MarketEvent = () => {
    const [weekDates, setWeekDates] = useState([]);
    
    useEffect(() => {
        setWeekDates(getWeekDates());
    }, [])

    return (
        <div className="space-y-10 mt-10">
            <h1 className="text-3xl font-medium">Acara Pasar</h1>
            <div className="border-t">
                <div className="h-20 xl:h-16 w-full flex justify-between items-center">
                    <div className="w-[90%] md:w-[80%] grid grid-cols-7 gap-x-2">
                        { weekDates.map((item, index) => (
                            <div key={index} className="text-left">
                                <p className="text-sm text-gray-500">{item.day}</p>
                                <p className={`${item.date === new Date().getDate() ? 'text-blue-600 font-bold' : 'text-gray-800'}`}>
                                    {item.date} {item.month}
                                </p>
                            </div>
                        )) }
                    </div>
                    <div className="w-[8%] h-full border border-y-0 flex justify-center items-center">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-neutral-600 text-xl"></FontAwesomeIcon>
                    </div>
                </div>
                <div className="h-10 w-full bg-[#c7cfcb] flex items-center px-5">
                    <span className="font-medium">Acara Mendatang</span>
                </div>
                <div className="px-5 py-4 flex flex-col space-y-2">
                    <div className="flex space-x-2 items-center hover:text-main-theme-2 duration-150 cursor-default">
                        <FontAwesomeIcon icon={faChartBar}/>
                        <p>Penghasilan Fomento Economico Mexicano (FMX)</p>
                    </div>
                    <div className="flex space-x-2 items-center hover:text-main-theme-2 duration-150 cursor-default">
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                        <p>
                            AS: Pesanan Barang Tahan Lama - Januari
                        </p>
                    </div>
                    <div className="flex space-x-2 items-center hover:text-main-theme-2 duration-150 cursor-default">
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                        <p>
                            AS: Tingkat Pertumbuhan PDB QoQ - Q4
                        </p>
                    </div>
                    <div className="flex space-x-2 items-center hover:text-main-theme-2 duration-150 cursor-default">
                        <FontAwesomeIcon icon={faCalendarAlt}/>
                        <p>
                            US: Fed Speeches - Barr, Bowman, Hammack, Harker, Goolsbee
                        </p>
                    </div>
                </div>
                <div className="h-10 w-full bg-[#c7cfcb] flex items-center px-5">
                    <span className="font-medium">Acara Pasar</span>
                </div>
                <div className="h-72 w-full grid grid-cols-3 grid-rows-2">
                    <button className="w-full h-full hover:bg-neutral-100 duration-150 p-5 md:p-10 space-y-1 text-left border-r border-b">
                        <FontAwesomeIcon icon={faDiagramProject} className="text-main-theme-1 text-xl"/>
                        <p className="text-sm md:text-lg font-medium">Dividen (15)</p>
                    </button>
                    <button className="w-full h-full hover:bg-neutral-100 duration-150 p-5 md:p-10 space-y-1 text-left border-r border-b">
                        <FontAwesomeIcon icon={faChartLine} className="text-main-theme-1 text-xl"/>
                        <p className="text-sm md:text-lg font-medium">Penghasilan (305)</p>
                    </button>
                    <button className="w-full h-full hover:bg-neutral-100 duration-150 p-5 md:p-10 space-y-1 text-left border-b">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-main-theme-1 text-xl"/>
                        <p className="text-sm md:text-lg font-medium">Ekonomi (49)</p>
                    </button>
                    <button className="w-full h-full hover:bg-neutral-100 duration-150 p-5 md:p-10 space-y-1 text-left border-r border-b">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-main-theme-1 text-xl"/>
                        <p className="text-sm md:text-lg font-medium">Kalender IPO (1)</p>
                    </button>
                    <button className="w-full h-full hover:bg-neutral-100 duration-150 p-5 md:p-10 space-y-1 text-left border-r border-b">
                        <FontAwesomeIcon icon={faCalendarAlt} className="text-main-theme-1 text-xl"/>
                        <p className="text-sm md:text-lg font-medium">Kalender SPO</p>
                    </button>
                    <button className="w-full h-full hover:bg-neutral-100 duration-150 p-5 md:p-10 space-y-1 text-left border-b">
                        <FontAwesomeIcon icon={faArrowsSplitUpAndLeft} className="text-main-theme-1 text-xl"/>
                        <p className="text-sm md:text-lg font-medium">Stock Splits (1)</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MarketEvent;