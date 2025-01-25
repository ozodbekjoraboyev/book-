import React from "react";
import bag from "../../assets/bag.svg";
import sertsa from "../../assets/sertsa.svg";
import user from "../../assets/user.svg";
function Navbaikon() {
  return (
    <div className=" flex justify-between items-center  container ">
      <div className="flex gap-5 mt-10">
        <p className="text-xl">Kitoblar</p>
        <p className="text-xl">To'plamlar</p>
        <p className="text-xl">Mualliflar</p>
        <p className="text-xl">Chegirmalar</p>
      </div>
      <div className="flex gap-5 mt-10">
        <div className="flex cursor-pointer items-center gap-2 bg-neutral-300 px-5 py-5 rounded-xl">
          <img width={20} src={bag} alt="" />
          <p>Savatcha</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2 bg-neutral-300 px-5 py-5 rounded-xl">
          <img width={20} src={sertsa} alt="" />
          <p>Davatcha</p>
        </div>
        <div className="flex cursor-pointer items-center gap-2 bg-neutral-300 px-5 py-5 rounded-xl">
          <img width={20} src={user} alt="" />
          <p>Davatcha</p>
        </div>
      </div>
    </div>
  );
}

export default Navbaikon;
