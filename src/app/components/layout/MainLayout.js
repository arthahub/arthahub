import Head from "next/head"
import { Navbar } from "../ui/Navbar"
import Footer from "../ui/Footer"

export const MainLayout = ({children}) => {
    return (
        <>
            <Navbar/>
                <div className="w-full h-full px-7 md:px-16 lg:px-28 2xl:px-96">
                    {children}
                </div>
            <Footer/>
        </>
    )
}