import Head from "next/head"
import { Navbar } from "../ui/Navbar"
import Footer from "../ui/Footer"

export const MainLayout = ({children}) => {
    return (
        <>
            <Navbar/>
            <div className="w-full h-full px-96">
                {children}
            </div>
            <Footer/>
        </>
    )
}