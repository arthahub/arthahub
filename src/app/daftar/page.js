"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MainLayout } from "../components/layout/MainLayout";
import { useState } from "react";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import googleAuthHandler from "../function/googleAuthHandler";

const RegisterPage = () => {
    const [usernameInputValue, setUsernameInputValue] = useState("");
    const [emailInputValue, setEmailInputValue] = useState("");
    const [passwordInputValue, setPasswordInputValue] = useState("");
    const [verifyPasswordInputValue, setVerifyPasswordInputValue] = useState("");

    return (
        <MainLayout>
            <div className="px-96 min-h-[50vh] py-20 flex items-center justify-center">
                <div className="space-y-2">
                    <form method="POST" action="{{ route('login.store') }}" className="w-full lg:w-full 2xl:w-[50vh] relative lg:px-5 xl:px-7 2xl:px-0" id="parent-form">
                        <div className="flex flex-col mb-3 text-center">
                            <div className="space-y-[8px]">
                                <h2 className="font-bold text-[35px] text-h1color leading-[35.16px] font-roboto">Buat akun pengguna gratis</h2>
                                <div className="text-[#1B1B1B] text-[14px] font-medium">
                                    <p>
                                        Dapatkan informasi keuangan anda
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[50px] flex items-center rounded border text-[10px] 2xl:text-xs mt-[19px] overflow-hidden">
                            <button type="button" className="w-full h-full flex items-center justify-center space-x-3 hover:bg-neutral-100 duration-150" onClick={googleAuthHandler}>
                                <img src="/assets/icon/google.svg" className="w-5"/>
                                <span>
                                    Daftar dengan Google
                                </span>
                            </button>
                        </div>

                        <div className="w-full mt-[8px] mb-[7px] h-[38px] flex items-center">
                            <div className="w-[45%] h-[1px] border-t">
                            </div>
                            <div className="w-[10%] flex justify-center">
                                atau
                            </div>
                            <div className="w-[45%] h-[1px] border-t">
                            </div>
                        </div>

                        <div className="mt-[10px]">
                            <label htmlFor="username-input"
                                className="text-[11px]">
                                Nama Pengguna*
                            </label>
                            <div
                                className="h-[50px] rounded-[5px] border border-[#D0D0D0] px-3 flex flex-col pt-[4px] pb-[11px]">
                                <div className="w-full h-full flex items-center relative">
                                    <input id="username-input" name="username" type="text"
                                        className="text-xs text-[#3C3C3C] w-full h-full p-0 border-none focus:ring-0 active:ring-0 focus:border-none active:border-none focus:outline-none active:outline-none"
                                        placeholder="masukan email" value={usernameInputValue} onChange={(e) => setUsernameInputValue(e.target.value)}/>

                                    <button type="button" className="hidden" id="show-email-icon">
                                        <img src="/assets/img/icon/show-email-icon.svg"
                                            className="absolute top-0 bottom-0 my-auto right-[13px] w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[10px]">
                            <label htmlFor="email-input"
                                className="text-[11px]">
                                Email*
                            </label>
                            <div
                                className="h-[50px] rounded-[5px] border border-[#D0D0D0] px-3 flex flex-col pt-[4px] pb-[11px]">
                                <div className="w-full h-full flex items-center relative">
                                    <input id="email-input" name="email" type="email"
                                        className="text-xs text-[#3C3C3C] w-full h-full p-0 border-none focus:ring-0 active:ring-0 focus:border-none active:border-none focus:outline-none active:outline-none"
                                        placeholder="masukan email" value={emailInputValue} onChange={(e) => setEmailInputValue(e.target.value)}/>

                                    <button type="button" className="hidden" id="show-email-icon">
                                        <img src="/assets/img/icon/show-email-icon.svg"
                                            className="absolute top-0 bottom-0 my-auto right-[13px] w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[10px]">
                            <label htmlFor="password-input"
                                className="text-[11px] {{ $errors->has('phone_number') | $errors->has('password') ? 'text-red-500' : 'text-verydarkgray' }}">
                                Password*
                            </label>
                            <div
                                className="h-[50px] rounded-[5px] border border-[#D0D0D0] px-3 flex flex-col pt-[4px] pb-[11px]">
                                <span className="text-xs text-neutral-600">
                                    Tetapkan kata sandi
                                </span>
                                <div className="w-full h-[18px] relative">
                                    <input id="password-input" name="password" type="password"
                                        className="text-[10px] text-[#3C3C3C] w-full h-full p-0 border-none focus:ring-0 active:ring-0 focus:border-none active:border-none focus:outline-none active:outline-none"
                                        placeholder="....." value={passwordInputValue} onChange={(e) => setPasswordInputValue(e.target.value)}/>

                                    <button type="button" className="hidden" id="show-password-icon">
                                        <img src="/assets/img/icon/show-password-icon.svg"
                                            className="absolute top-0 bottom-0 my-auto right-[13px] w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="mt-[10px]">
                            <label htmlFor="confirm-password-input"
                                className="text-[11px] {{ $errors->has('phone_number') | $errors->has('password') ? 'text-red-500' : 'text-verydarkgray' }}">
                                Konfirmasi Password*
                            </label>
                            <div
                                className="h-[50px] rounded-[5px] border border-[#D0D0D0] px-3 flex flex-col pt-[4px] pb-[11px]">
                                <span className="text-xs text-neutral-600">
                                    Konfirmasi Password
                                </span>
                                <div className="w-full h-[18px] relative">
                                    <input id="confirm-password-input" name="confirm-password" type="password"
                                        className="text-[10px] text-[#3C3C3C] w-full h-full p-0 border-none focus:ring-0 active:ring-0 focus:border-none active:border-none focus:outline-none active:outline-none"
                                        placeholder="....." value={verifyPasswordInputValue} onChange={(e) => setVerifyPasswordInputValue(e.target.value)}/>

                                    <button type="button" className="hidden" id="show-password-icon">
                                        <img src="/assets/img/icon/show-password-icon.svg"
                                            className="absolute top-0 bottom-0 my-auto right-[13px] w-5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div id="button-container" className="mt-8">
                            <button type="submit" className="w-full h-[50px] py-3 bg-main-theme-2 border border-main-theme-2 hover:bg-transparent hover:text-slate-800 rounded-[5px] text-sm text-white duration-150"
                                id="primary-button">
                                Daftar
                            </button>
                            <div className="mt-4 w-full h-[50px] py-3 bg-lightseagreen rounded-[5px] text-sm flex justify-center items-center border border-lightseagreen text-white text-[16px] space-x-1 hidden"
                                id="button-after-click">
                                <div className="w-2 h-2 rounded-full bg-white animate-bounce"></div>
                                <div className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "50ms" }}></div>
                                <div className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: "100ms" }}></div>
                            </div>
                        </div>
                    </form>

                    <div className="w-full h-[47px] bg-[#efefef] relative bottom-0 left-0 grid place-content-center lg:mt-0 rounded">
                        <p className="text-xs text-[#1B1B1B] font-medium">
                            Sudah memiliki akun? <a href="{{ route('register') }}" className="text-main-theme-2 hover:text-main-theme-1 duration-150">masuk</a>
                        </p>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default RegisterPage;