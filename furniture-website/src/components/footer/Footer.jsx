import React, { useState, Fragment } from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div className="footer bg-slate-400 w-full flex items-center justify-center">
            <div className="inner-footer w-4/5 h-4/5 flex items-center justify-around mt-10">
                <div className="left-side w-2/5 h-full">
                    <h1 className="font-medium leading-10 text-white mt-4 text-xl m-3">Neler yaptığımızı takip etmek ister misin?</h1>
                    <p className="mt-1 text-sm leading-6 text-white m-3 font-light">Kampanyalar, yeni ürünler ve güncel stoklardan haberdar olmak için abone ol!</p>
                    <div className="inputs flex items-center justify-start pb-3 border-b-2 border-white">
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            className=" outline-none min-w-0 flex-auto rounded-md border-0 px-3.5 py-2 m-3 text-white ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-slate-300 sm:text-sm sm:leading-6"
                            placeholder="Enter your email"
                        />
                        <button
                            type="submit"
                            className=" m-3 flex-none rounded-md bg-slate-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-700"
                        >
                            Abone Ol
                        </button>
                    </div>
                    <div className="m-3 flex items-center justify-space-between">
                        <div className="inner-logo flex items-center flex-start">
                            <img href="#" className="flex items-center justify-center object-scale-down w-10" src="https://media.discordapp.net/attachments/1126598761183973497/1127011653972672562/pngaaa.com-8945021.png" />
                            <a className='logo' href="./">FURNAMA</a>
                        </div>
                    </div>
                    <div className="m-3 flex items-center justify-start ">
                        <a href="https://www.instagram.com/" className="logo--social--link m-3" target="_blank" rel="noopener" aria-describedby="a11y-new-window-message">
                            <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0083/3375/4432/files/footer-insta.svg" />
                        </a>
                        <a href="https://twitter.com/" className="logo--social--link m-3" target="_blank" rel="noopener" aria-describedby="a11y-new-window-message">
                            <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0083/3375/4432/files/footer-facebook.svg" />
                        </a>
                        <a href="https://tr.pinterest.com/" className="logo--social--link m-3" target="_blank" rel="noopener" aria-describedby="a11y-new-window-message">
                            <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0083/3375/4432/files/footer-pinterest.svg" />
                        </a>
                        <a href="https://www.youtube.com/" className="logo--social--link m-3" target="_blank" rel="noopener" aria-describedby="a11y-new-window-message">
                            <img loading="lazy" src="https://cdn.shopify.com/s/files/1/0083/3375/4432/files/footer-youtube.svg?v=1672234315" />
                        </a>
                    </div>
                </div>
                <div className="right-side w-3/5 h-full flex items-end justify-end ">
                    <div className="w-4/5 h-4/5 grid grid-cols-4 gap-4  items-start justify-end m-11 text-white">
                        <div className="">
                            <ul>
                                <li className="text-white mb-3">
                                    İLETİŞİM
                                </li>
                                <li className="text-white">
                                    Yorumlar
                                </li>
                                <li className="text-white">
                                    0000 000 00 00
                                </li>
                                <li className="text-white">
                                    info@furnama.com
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <li className="text-white mb-3">
                                    KEŞFET
                                </li>
                                <li className="text-white">
                                    Tasarım
                                </li>
                                <li className="text-white">
                                    Kumaş ve Ayak
                                </li>
                                <li className="text-white">
                                    Kalite
                                </li>
                                <li className="text-white">
                                    Konfor
                                </li>
                                <li className="text-white">
                                    Biz Kimiz
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <li className="text-white  mb-3">
                                    DESTEK
                                </li>
                                <li className="text-white">
                                    İptal ve İade
                                </li>
                                <li className="text-white"> 
                                    Yardım
                                </li>
                                <li className="text-white">
                                    Aletsiz Kurulum
                                </li>
                                <li className="text-white">
                                    Sipariş Takibi
                                </li>
                                <li className="text-white">
                                    Blog
                                </li>
                            </ul>
                        </div>
                        <div className="">
                            <ul>
                                <li className="text-white mb-3 " href="./category">
                                    ÜRÜNLER
                                </li>
                                <li className="text-white cursor-pointer" href="./category">
                                    Ücretsiz Numune
                                </li>
                                <li className="text-white cursor-pointer" href="./category">
                                    Tüm Ürünler
                                </li>
                                <li className="text-white cursor-pointer" href="./category">
                                    Tüm Koltuklar
                                </li>
                                <li className="text-white cursor-pointer" href="./category">
                                    Kadife Koltuklar
                                </li>
                                <li className="text-white cursor-pointer" href="./category">
                                    Köşe Koltuk Takımları
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Footer;