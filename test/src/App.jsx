import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./companent/Nav/Navbar";
import Cardlar from "./companent/Card/Ccardlar";

function App() {
  return (
    <>
      <div className="container ">
        <Cardlar />
      </div>
    </>
  );
}

export default App;
