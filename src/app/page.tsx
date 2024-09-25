import Image from "next/image";

import search from "../assets/icon/search.png";
import back from "../assets/icon/right-arrow.png";
import cart from "../assets/icon/shopping-cart.png";

import beauty1 from "../assets/hand-mirror.png";
import beauty2 from "../assets/lipstick.png";
import beauty3 from "../assets/make-up.png";
import beauty4 from "../assets/perfume.png";

import Carousel from '../components/Carousel';
import React from 'react'

export default function Home() {
  const style = {
    navbar: "flex flex-row justify-between mt-4 m-2",
    button_white: "bg-cinza border rounded-full p-2 m-2 border-none",
    div_section: "flex flex-row font-bold m-2 justify-between w-[90%]",
    divizona: "flex items-center jusify-center flex-col mt-10",
    div_carousel: "bg-white text-black m-3 rounded-[25px] p-3"
  };
  return (
    <div>
      <nav className={style.navbar}>
        <div className={style.button_white}><Image src={back} alt="back" /></div>
        <input type="text" className="flex relative p-1 w-80 bg-transparent border border-black rounded-lg m-2"/>
        <Image src={search} className="flex absolute w-5 left-20 top-8" alt="search" />
        <div className={style.button_white}><Image src={cart} alt="cart"/></div>
      </nav>
      <section className={style.divizona}>
        <div className={style.div_section}>
          <Image src={beauty1} alt="beauty" className="w-[100px] h-auto rotate-[-20deg]"/>
          <h3 className="flex items-end">TikTok Shop</h3>
          <Image src={beauty2} alt="beauty" className="w-[100px] h-auto rotate-[-10deg]"/>
        </div>
        <h1 className="text-3xl font-bold mt-3 mb-3">Get Rush Ready</h1>
        <div className={style.div_section}>
          <Image src={beauty3} alt="beauty" className="w-[100px] h-auto"/>
          <h3 className="flex items-start">Sep 25-30, 2024</h3>
          <Image src={beauty4} alt="beauty" className="w-[100px] h-auto rotate-[20deg]"/>
        </div>
      </section>

      <section className={style.div_carousel}>
        <div className="flex flex-row">
          <h1 className="text-lg font-bold">Top favorites</h1>
          <Image src={beauty2} alt="beauty2" className="w-[24px] h-auto m-1 rotate-[-20deg]"/>
        </div>
        <Carousel/>
      </section>
    </div>
  );
}
