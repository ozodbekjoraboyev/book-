import React from "react";
import Kitoblar from "./kitoblar/Kitoblar";
import Buyurtma from "./Dastafka/Buyurtma";
import Kafolot from "./Kafolot";

function YetkazibBerish() {
  return (
      <div className="flex  container  justify-between ">
        <Buyurtma />
      <Kitoblar />
      <div  className="bg-blue-100 rounded-xl p-1 py-5 mt-12 -mb-5 " >
        <img
          className=" pl-5"
          src="https://book.uz/static/media/DebitCardIcon.389b0e772a5d62da16ae3d22797b0bc3.svg"
          alt=""
        />
        <h1 className="text-blue-700 pl-5 font-bold text-2xl">
          Yetkazib berish
        </h1>
        <h3 className="text-blue-700 pl-5 font-setbold text-xl w-[350px]">
          Buyurtmangizni O’zbekiston bo’ylab yetkazib beramiz
        </h3>
      </div>
       <Kafolot />
    </div>
  );
}


export default YetkazibBerish;
