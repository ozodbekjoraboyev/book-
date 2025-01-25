import React, { useEffect, useState } from "react";
import axios from "axios";
import search from "../../assets/search.svg";
import feyzbuk from "../../assets/feyzbuk.svg";
import instagram from "../../assets/instagram.svg";
import telegram from "../../assets/telegram.svg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import Navbaikon from "./Navbaikon";
import { Link } from "react-router";
import YetkazibBerish from "../buyurtmalar/YetkazibBerish";
import NavCarusel from "./NavCarusel";
function Navbar() {
  const [book, setBook] = useState();
  return (
    <>
      <div className="container p-3 flex justify-between items-center border-b-1 ">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="https://book.uz/static/media/Logo.a146e98cabc393f1280fbaca34e7296b.svg"
              alt=""
            />
          </Link>
        </div>
        <div>
          <i> Mutolaa book.uzdan boshlanar</i>
        </div>
        <div>
          <p className=" border-b-1">Qanday xarid qilinadi?</p>
        </div>
        <div className="flex items-center   border-1 border-blue-700 rounded ">
          <input
            className="border-none cursor-pointer p-2 rounded outline-none "
            placeholder="Kitoblar qidiring"
          />
          <button>
            <img className="w-4 cursor-pointer mr-3 " src={search} alt="" />
          </button>
        </div>

        {/* <div>
            <h1>UZ</h1>
            <h1>RU</h1>
        </div> */}
        <div className=" border p-1  flex rounded-full w-15 cursor-pointer ">
          <img className="w-4" src={sun} alt="" />
          {/* <img className="w-4" src={moon} alt="" /> */}
        </div>
        <div>
          <p>+998 71 230 00 50</p>
        </div>
        <div className=" flex gap-5  ">
          <img className="w-6 cursor-pointer" src={feyzbuk} alt="" />
          <img className="w-6 cursor-pointer" src={instagram} alt="" />
          <img className="w-6 cursor-pointer" src={telegram} alt="" />
        </div>
      </div>
      <NavCarusel />
      <YetkazibBerish />
      <Navbaikon />

    </>
  );
}

export default Navbar;
