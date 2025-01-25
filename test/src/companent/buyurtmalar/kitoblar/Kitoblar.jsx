import React from "react";
import { Link } from "react-router";

function Kitoblar() {
  return (
    <div>
      <div className="bg-blue-100 rounded-xl p-1 py-5 mt-12 -mb-5 ">
        <Link to={"/kitoblar"}>
          <img
            className=" pl-5"
            src="https://book.uz/static/media/BookIcon.df4a68563c11028a46911ca0bd168835.svg"
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

export default Kitoblar;
