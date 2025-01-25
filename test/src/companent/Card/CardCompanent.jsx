import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import star from "../../assets/star.svg";
function CardCompanent() {
  const { _id } = useParams();
  const [kitob, setKitob] = useState();
  useEffect(() => {
    axios.get("https://backend.book.uz/user-api/book/" + _id).then((res) => {
      // console.log(res.data.data);
      setKitob(res.data.data);
    });
  }, []);
  if (!kitob) {
    return <div>Yuklanmoqda...</div>;
  }
  return (
    <div className=" flex m-auto items-center justify-center gap-5  mt-12">
      <div className="flex">
        <div>
          <img
            className="w-32 p-3 h-52 rounded-2xl"
            src={`https://backend.book.uz/user-api/${kitob.imgUrl}`}
            alt=""
          />
        </div>
        <img
          className="rounded-2xl "
          width={300}
          src={`https://backend.book.uz/user-api/${kitob.imgUrl}`}
          alt=""
        />
      </div>
      <div className="flex flex-col">
        <p className=" text-3xl font-bold">{kitob.name}</p>
        <p className="text-cyan-700">{kitob.author.fullName}</p>
        <div className="flex">
          <img width={20} src={star} alt="" />
          <p>{kitob.rating}.0</p>
          <p>
            ({kitob.rateCount} Odam) <span>Fkir bildirish</span>
          </p>
        </div>
        <p className="text-amber-700 font-bold text-lg">
          {kitob.numberOfPage} UZS
        </p>
        <div className="flex flex-col gap-4">
          <h1 className="font-semibold">
            <span className="opacity-70">
              ISBN____________________________________________________________________________
            </span>
            {kitob.barcode}
          </h1>
          <h1 className="font-semibold">
            <span className="opacity-70">
              Yozuv______________________________________________________________________________________
            </span>
            Lotincha
          </h1>
          <h1 className="font-semibold">
            <span className="opacity-70">
              Yil_____________________________________________________________________________________________
            </span>
            {kitob.year}
          </h1>
          <h1 className="font-semibold">
            <span className="opacity-70">
              Til________________________________________________________________________________________________
            </span>
            {kitob.language}
          </h1>
          <h1 className="font-semibold">
            <span className="opacity-70">
              Betlar
              soni_______________________________________________________________________________________
            </span>
            {kitob.numberOfPage}
          </h1>
          <h1 className="font-semibold">
            <span className="opacity-70">
              Nashriyot_____________________________________________________________________________________
            </span>
            {kitob.publisher.name}
          </h1>
          <h1 className="font-semibold">
            <span className="opacity-70">
              Muqova_______________________________________________________________________________________
            </span>
            Qattiq
          </h1>
          <h1 className="font-semibold">
            <span className="opacity-70">
            Tarjimon_______________________________________________________________________
            </span>
            {kitob.translator}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default CardCompanent;
