import React from "react";
import { Link } from "react-router";

function Buyurtma() {
  return (
    <div>
      <div className="bg-blue-100 rounded-xl p-1 py-5 mt-12 -mb-5 ">
        <Link to="/Buyurtmamadali">
          <img
            className=" pl-5"
            src="https://book.uz/static/media/CarIcon.70c9e28bc84178a63ecc32ae1b0b7797.svg"
            alt=""
          />
          <h1 className="text-blue-700 pl-5 font-bold text-2xl">
            Yetkazib berish
          </h1>
          <h3 className="text-blue-700 pl-5 font-setbold text-xl w-[350px]">
            Buyurtmangizni O’zbekiston bo’ylab yetkazib beramiz
          </h3>
        </Link>
      </div>
    </div>
  );
}

export default Buyurtma;
