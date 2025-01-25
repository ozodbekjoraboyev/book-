import axios from "axios";
import React, { useEffect, useState } from "react";

function NavCarusel() {
  const [adabiyot, setAdabiyot] = useState();
  useEffect(() => {
    axios.get("https://backend.book.uz/user-api/genre?page=1").then((res) => {
    //   console.log(res.data.data.data);
      setAdabiyot(res.data.data.data);
    });
  }, []);
  if (!adabiyot) {
    return <div>Yuklanmoqda...</div>;
  }
  return (
    <div className=" h-[500px] overflow-auto  w-[400px] ">
      {adabiyot.map((itme) => (
        <div key={itme._id}>
        <h1  className=" p-2 hover:bg-amber-600 rounded font-semibold ">{itme.name}</h1>
        </div>
      ))}
    </div>
  );
}

export default NavCarusel;
