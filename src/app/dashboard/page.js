"use client";

import { useEffect, useState } from "react";
import { MainLayout } from "../components/layout/MainLayout"
import { logoutHandler } from "../function/auth";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { Aoboshi_One } from "next/font/google";

const Dashboard = () => {
    const { push } = useRouter();
    const { currentUser } = useAuth();
    const [isChecking, setIsChecking] = useState(true);

    useEffect(() => {
        if (!currentUser) {
            push('/masuk');
        } else {
            setIsChecking(false); 
        }
    }, [currentUser, push]);

    const logout = () =>  {
        logoutHandler();
        push('/masuk');
    }

    console.log(currentUser)

    return (
        <>
            { 
                isChecking || !currentUser ? 
                    <div></div>
                    :
                    <>
                        { 
                            currentUser &&
                                <MainLayout>
                                    <div className="flex flex-col min-h-screen text-white xl:px-12 mt-10">
                                        <div className="w-full bg-gradient-to-r from-[#57b07b] to-[#da9456] rounded-3xl p-8 relative">
                                            <div className="flex justify-between items-start gap-6">
                                                <div>
                                                    <div className="w-24 h-24 rounded-full bg-main-theme-2 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                                                        {currentUser.displayName?.substring(0, 2).toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <h2 className="text-3xl font-semibold">{ currentUser.displayName }</h2>
                                                        <p className="text-neutral-50">{ currentUser.email }</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
                                                <div className="bg-gray-700 p-4 rounded-xl shadow-md">
                                                    <p className="text-gray-300 text-sm">Total pantuan</p>
                                                    <h3 className="text-2xl font-bold text-main-theme-2">500</h3>
                                                </div>
                                                <div className="bg-gray-700 p-4 rounded-xl shadow-md">
                                                    <p className="text-gray-300 text-sm">Komunitas</p>
                                                    <h3 className="text-2xl font-bold text-green-700">50</h3>
                                                </div>
                                                <div className="bg-gray-700 p-4 rounded-xl shadow-md">
                                                    <p className="text-gray-300 text-sm">Poin Kontribusi</p>
                                                    <h3 className="text-2xl font-bold text-blue-400">2000</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-10 text-slate-800">
                                            <h3 className="text-2xl font-semibold mb-4">Daftar Pantau</h3>
                                            <table className="w-full text-left">
                                                <thead>
                                                    <tr className="bg-[#ffc38f]">
                                                        <th className="w-[30%] p-2 px-5">Simbol</th>
                                                        <th className="w-[50%] p-2 px-5">Harga</th>
                                                        <th className="w-[20%] p-2 px-5">perubahan</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="even:bg-[#fff3e7] border-t border-b border-gray-400">
                                                        <td className="py-2 p-2 px-5">AAPL</td>
                                                        <td className="p-2 px-5">$175.30</td>
                                                        <td className="text-green-700 p-2 px-5">+1.5%</td>
                                                    </tr>
                                                    <tr className="even:bg-[#fff3e7] border-t border-b border-gray-400">
                                                        <td className="py-2 p-2 px-5">AAPL</td>
                                                        <td className="p-2 px-5">$175.30</td>
                                                        <td className="text-green-700 p-2 px-5">+1.5%</td>
                                                    </tr>
                                                    <tr className="even:bg-[#fff3e7] border-t border-b border-gray-400">
                                                        <td className="py-2 p-2 px-5">AAPL</td>
                                                        <td className="p-2 px-5">$175.30</td>
                                                        <td className="text-green-700 p-2 px-5">+1.5%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div className="mt-20 w-full flex flex-col md:flex-row justify-between items-center rounded-xl">
                                            <div className="md:w-3/4">
                                                <h1 className="text-xl font-semibold text-slate-900">
                                                    Jaga Akunmu Tetap Aman
                                                </h1>
                                                <p className="text-slate-600 mt-2">
                                                    Keluarlah dari akunmu secara berkala, baik setelah tidak digunakan maupun setiap beberapa hari sekali. 
                                                    Hal ini bertujuan untuk menjaga keamanan akunmu.
                                                </p>
                                            </div>
                                            <button onClick={() => logout()} className="bg-red-500 hover:bg-red-600 text-white w-full md:w-24 py-3 mt-4 md:mt-0 shadow-md transition-transform transform hover:scale-105">
                                                Keluar
                                            </button>
                                        </div>
                                    </div>
                                </MainLayout>
                        }
                    </>
            }
        </>
        
    );
};

export default Dashboard;