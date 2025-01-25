import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import sertsa from "../../assets/sertsa.svg";
import sertsa2 from "../../assets/sertsa2.svg";
import bag from "../../assets/bag.svg"; 
function Cardlar() {
  const [kitob, setKitob] = useState([]);
  const [likedBooks, setLikedBooks] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://backend.book.uz/user-api/book/same?page=1&limit=10&bookId=677b9c11336861db60d46bf5"
      )
      .then((res) => {
        setKitob(res.data.data.data);
      });
  }, []);

  const toggleLike = (id) => {
    if (likedBooks.includes(id)) {
      setLikedBooks(likedBooks.filter((bookId) => bookId !== id));
    } else {
      setLikedBooks([...likedBooks, id]);
    }
  };

  if (!kitob || kitob.length === 0) {
    return <div>Yuklanmoqda...</div>;
  }

  return (
    <div className="grid grid-cols-5 gap-8 mt-10 container">
      {kitob.map((item) => (
        <div key={item._id} className="relative flex flex-col">
          <Link to={`cardinfo/${item._id}`}>
            <img
              className="w-full rounded-2xl  object-cover relative"
              src={`https://backend.book.uz/user-api/${item.imgUrl}`}
              alt={item.name}
            />
          </Link>
          <div className="p-4 flex-grow flex flex-col">
            <Link to={`cardinfo/${item._id}`}>
              <p className="text-gray-800 font-bold text-lg truncate">
                {item.name}
              </p>
              <p className="text-gray-500 text-sm truncate">
                {item.author.fullName}
              </p>
            </Link>
            <p className="text-amber-700 font-bold text-lg mt-2">
              {item.numberOfPage} UZS
            </p>
          </div>
          <div className="absolute  bottom-4 right-4    space-x-2 mb-32">
            <button
              onClick={() => toggleLike(item._id)}
              className="w-8 h-8 mb-2 cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-amber-500  shadow transition"
            >
              <img
                src={likedBooks.includes(item._id) ? sertsa2 : sertsa}
                alt="like"
                className="w-5 h-5"
              />
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 flex items-center cursor-pointer justify-center rounded-full bg-gray-100 hover:bg-gray-200 shadow transition"
            >
              <img src={bag} alt="basket" className="w-5 h-5" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cardlar;
