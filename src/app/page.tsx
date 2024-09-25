import Image from "next/image";

import search from "../assets/icon/search.png";
import back from "../assets/icon/right-arrow.png";
import cart from "../assets/icon/shopping-cart.png";

export default function Home() {
  const style = {
    navbar: "flex flex-row justify-between mt-4 m-2",
    button_white: "bg-cinza border rounded-full p-2 m-2 border-none"
  };
  return (
    

    <div>
      <nav className={style.navbar}>
        <div className={style.button_white}><Image src={back} alt="back" /></div>
        <input type="text" className="flex relative p-1 w-80 bg-transparent border border-black rounded-lg m-2"/>
        <Image src={search} className="flex absolute w-5 left-20 top-8" alt="search" />
        <div className={style.button_white}><Image src={cart} alt="cart"/></div>
      </nav>
    </div>
  );
}
