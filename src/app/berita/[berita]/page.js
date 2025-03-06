import { MainLayout } from "@/app/components/layout/MainLayout";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const detailBerita = () => {
    return (
        <MainLayout>
            <div className="flex flex-col">
                {/* headline */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-y-0 gap-5 mt-10">
                    <div className="col-span-1 lg:col-span-2">
                        <Link href={'/berita'}>
                            <div className="flex items-center group">
                                <FontAwesomeIcon icon={faArrowLeft}/>
                                <div className="w-2 group-hover:w-4 duration-150"></div>
                                <p>Kembali ke kumpulan berita</p>
                            </div>
                        </Link>
                        <h1 className="text-3xl font-medium text-slate-900 mt-3">
                            IHSG Melompat 1,36% ke 6.355,<br></br>
                            Top Gainers LQ45: JPFA, BBRI, ARTO, Senin Pagi (3/3)
                        </h1>
                        <div className="w-full mt-8 overflow-hidden relative">
                            <div className="absolute top-8 left-8 w-20 h-7 rounded-lg bg-[#fdcca1] text-sm grid place-content-center text-[#ff8317]">Saham</div>
                            <img src="https://picsum.photos/800/500" className="w-full h-full rounded-xl"/>
                            <span className="mt-2 text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, exercitationem.</span>
                        </div>
                        <div className="mt-8 space-y-8">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id distinctio ex saepe accusamus, velit ratione obcaecati doloremque tempora cupiditate, incidunt, optio dicta? Vitae nobis esse inventore culpa similique veritatis accusantium qui quasi sapiente dolores quisquam numquam, corrupti molestiae quo exercitationem quidem libero beatae totam omnis neque, eligendi ad blanditiis veniam quam. Quae illo repudiandae voluptas! Molestiae expedita pariatur sed ex laboriosam. Harum maxime impedit debitis enim libero ipsam ipsa molestias asperiores nam blanditiis fuga consequatur perspiciatis tempore, laborum necessitatibus obcaecati quisquam inventore ut animi maiores quasi aliquam nulla? Magnam vitae laborum, doloribus velit magni atque sequi officia illum nisi quidem.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id distinctio ex saepe accusamus, velit ratione obcaecati doloremque tempora cupiditate, incidunt, optio dicta? Vitae nobis esse inventore culpa similique veritatis accusantium qui quasi sapiente dolores quisquam numquam, corrupti molestiae quo exercitationem quidem libero beatae totam omnis neque, eligendi ad blanditiis veniam quam. Quae illo repudiandae voluptas! Molestiae expedita pariatur sed ex laboriosam. Harum maxime impedit debitis enim libero ipsam ipsa molestias asperiores nam blanditiis fuga consequatur perspiciatis tempore, laborum necessitatibus obcaecati quisquam inventore ut animi maiores quasi aliquam nulla? Magnam vitae laborum, doloribus velit magni atque sequi officia illum nisi quidem.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id distinctio ex saepe accusamus, velit ratione obcaecati doloremque tempora cupiditate, incidunt, optio dicta? Vitae nobis esse inventore culpa similique veritatis accusantium qui quasi sapiente dolores quisquam numquam, corrupti molestiae quo exercitationem quidem libero beatae totam omnis neque, eligendi ad blanditiis veniam quam. Quae illo repudiandae voluptas! Molestiae expedita pariatur sed ex laboriosam. Harum maxime impedit debitis enim libero ipsam ipsa molestias asperiores nam blanditiis fuga consequatur perspiciatis tempore, laborum necessitatibus obcaecati quisquam inventore ut animi maiores quasi aliquam nulla? Magnam vitae laborum, doloribus velit magni atque sequi officia illum nisi quidem.
                            </p>
                        </div>
                    </div>
                    <div className="grid-cols-1">
                        <div className="pl-2 border-l-2 border-main-theme-2">
                            <h1 className="text-2xl font-semibold">Terpopuler</h1>
                        </div>
                        <div className="mt-5 flex flex-col space-y-8">
                            <Link href={"#"} className="w-full">
                                <div className="w-full flex space-x-4 items-center justify-between">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 grid place-content-center">1</div>
                                    <h1 className="w-[87%] text-base xl:text-lg font-medium">
                                        Adaro Minerals (ADMR) Cetak Laba Bersih Rp7,23 Triliun Sepanjang 2024
                                    </h1>
                                </div>
                            </Link>
                            <Link href={"#"} className="w-full">
                                <div className="w-full flex space-x-4 items-center justify-between">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 grid place-content-center">1</div>
                                    <h1 className="w-[87%] text-base xl:text-lg font-medium">
                                        Adaro Minerals (ADMR) Cetak Laba Bersih Rp7,23 Triliun Sepanjang 2024
                                    </h1>
                                </div>
                            </Link>
                            <Link href={"#"} className="w-full">
                                <div className="w-full flex space-x-4 items-center justify-between">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 grid place-content-center">1</div>
                                    <h1 className="w-[87%] text-base xl:text-lg font-medium">
                                        Adaro Minerals (ADMR) Cetak Laba Bersih Rp7,23 Triliun Sepanjang 2024
                                    </h1>
                                </div>
                            </Link>
                            <Link href={"#"} className="w-full">
                                <div className="w-full flex space-x-4 items-center justify-between">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 grid place-content-center">1</div>
                                    <h1 className="w-[87%] text-base xl:text-lg font-medium">
                                        Adaro Minerals (ADMR) Cetak Laba Bersih Rp7,23 Triliun Sepanjang 2024
                                    </h1>
                                </div>
                            </Link>
                            <Link href={"#"} className="w-full">
                                <div className="w-full flex space-x-4 items-center justify-between">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 grid place-content-center">1</div>
                                    <h1 className="w-[87%] text-base xl:text-lg font-medium">
                                        Adaro Minerals (ADMR) Cetak Laba Bersih Rp7,23 Triliun Sepanjang 2024
                                    </h1>
                                </div>
                            </Link>
                            <Link href={"#"} className="w-full">
                                <div className="w-full flex space-x-4 items-center justify-between">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 grid place-content-center">1</div>
                                    <h1 className="w-[87%] text-base xl:text-lg font-medium">
                                        Adaro Minerals (ADMR) Cetak Laba Bersih Rp7,23 Triliun Sepanjang 2024
                                    </h1>
                                </div>
                            </Link>
                            <Link href={"#"} className="w-full">
                                <div className="w-full flex space-x-4 items-center justify-between">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 grid place-content-center">1</div>
                                    <h1 className="w-[87%] text-base xl:text-lg font-medium">
                                        Adaro Minerals (ADMR) Cetak Laba Bersih Rp7,23 Triliun Sepanjang 2024
                                    </h1>
                                </div>
                            </Link>
                            <Link href={"#"} className="w-full">
                                <div className="w-full flex space-x-4 items-center justify-between">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 grid place-content-center">1</div>
                                    <h1 className="w-[87%] text-base xl:text-lg font-medium">
                                        Adaro Minerals (ADMR) Cetak Laba Bersih Rp7,23 Triliun Sepanjang 2024
                                    </h1>
                                </div>
                            </Link>
                            <Link href={"#"} className="w-full">
                                <div className="w-full flex space-x-4 items-center justify-between">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 grid place-content-center">1</div>
                                    <h1 className="w-[87%] text-base xl:text-lg font-medium">
                                        Adaro Minerals (ADMR) Cetak Laba Bersih Rp7,23 Triliun Sepanjang 2024
                                    </h1>
                                </div>
                            </Link>
                            <Link href={"#"} className="w-full">
                                <div className="w-full flex space-x-4 items-center justify-between">
                                    <div className="w-8 h-8 rounded-full bg-neutral-200 grid place-content-center">1</div>
                                    <h1 className="w-[87%] text-base xl:text-lg font-medium">
                                        Adaro Minerals (ADMR) Cetak Laba Bersih Rp7,23 Triliun Sepanjang 2024
                                    </h1>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* berita */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 mt-20">
                    <div className="w-full h-56">
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                        </div>
                        <p className="text-sm mt-2">
                            Jasa Marga (JSMR) Cetak Laba Bersih 4,53 Triliun Sepanjang 2024, Turun 33,24%
                        </p>
                        <span className="text-sm text-main-theme-2">
                            Saham
                        </span>
                    </div>
                    <div className="w-full h-56">
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                        </div>
                        <p className="text-sm mt-2">
                            Jasa Marga (JSMR) Cetak Laba Bersih 4,53 Triliun Sepanjang 2024, Turun 33,24%
                        </p>
                        <span className="text-sm text-main-theme-2">
                            Saham
                        </span>
                    </div>
                    <div className="w-full h-56">
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                        </div>
                        <p className="text-sm mt-2">
                            Jasa Marga (JSMR) Cetak Laba Bersih 4,53 Triliun Sepanjang 2024, Turun 33,24%
                        </p>
                        <span className="text-sm text-main-theme-2">
                            Saham
                        </span>
                    </div>
                    <div className="w-full h-56">
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                        </div>
                        <p className="text-sm mt-2">
                            Jasa Marga (JSMR) Cetak Laba Bersih 4,53 Triliun Sepanjang 2024, Turun 33,24%
                        </p>
                        <span className="text-sm text-main-theme-2">
                            Saham
                        </span>
                    </div>
                    <div className="w-full h-56">
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                        </div>
                        <p className="text-sm mt-2">
                            Jasa Marga (JSMR) Cetak Laba Bersih 4,53 Triliun Sepanjang 2024, Turun 33,24%
                        </p>
                        <span className="text-sm text-main-theme-2">
                            Saham
                        </span>
                    </div>
                    <div className="w-full h-56">
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                        </div>
                        <p className="text-sm mt-2">
                            Jasa Marga (JSMR) Cetak Laba Bersih 4,53 Triliun Sepanjang 2024, Turun 33,24%
                        </p>
                        <span className="text-sm text-main-theme-2">
                            Saham
                        </span>
                    </div>
                    <div className="w-full h-56">
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                        </div>
                        <p className="text-sm mt-2">
                            Jasa Marga (JSMR) Cetak Laba Bersih 4,53 Triliun Sepanjang 2024, Turun 33,24%
                        </p>
                        <span className="text-sm text-main-theme-2">
                            Saham
                        </span>
                    </div>
                    <div className="w-full h-56">
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                        </div>
                        <p className="text-sm mt-2">
                            Jasa Marga (JSMR) Cetak Laba Bersih 4,53 Triliun Sepanjang 2024, Turun 33,24%
                        </p>
                        <span className="text-sm text-main-theme-2">
                            Saham
                        </span>
                    </div>
                    <div className="w-full h-56">
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                        </div>
                        <p className="text-sm mt-2">
                            Jasa Marga (JSMR) Cetak Laba Bersih 4,53 Triliun Sepanjang 2024, Turun 33,24%
                        </p>
                        <span className="text-sm text-main-theme-2">
                            Saham
                        </span>
                    </div>
                    <div className="w-full h-56">
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                        </div>
                        <p className="text-sm mt-2">
                            Jasa Marga (JSMR) Cetak Laba Bersih 4,53 Triliun Sepanjang 2024, Turun 33,24%
                        </p>
                        <span className="text-sm text-main-theme-2">
                            Saham
                        </span>
                    </div>
                    <div className="w-full h-56">
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                        </div>
                        <p className="text-sm mt-2">
                            Jasa Marga (JSMR) Cetak Laba Bersih 4,53 Triliun Sepanjang 2024, Turun 33,24%
                        </p>
                        <span className="text-sm text-main-theme-2">
                            Saham
                        </span>
                    </div>
                    <div className="w-full h-56">
                        <div className="w-full h-32 rounded-lg overflow-hidden">
                            <img src="https://picsum.photos/600/500" className="w-full h-full"/>
                        </div>
                        <p className="text-sm mt-2">
                            Jasa Marga (JSMR) Cetak Laba Bersih 4,53 Triliun Sepanjang 2024, Turun 33,24%
                        </p>
                        <span className="text-sm text-main-theme-2">
                            Saham
                        </span>
                    </div>
                </div>  
            </div>
        </MainLayout>
    )
}

export default detailBerita 