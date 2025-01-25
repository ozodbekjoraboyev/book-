import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router";
import CardCompanent from "./companent/Card/CardCompanent.jsx";
import Navbar from "./companent/Nav/Navbar.jsx";
import BuyurtmaMadali from "./companent/buyurtmalar/Dastafka/buyurtmaMadali.jsx";
import Kitoblartoplami from "./companent/buyurtmalar/kitoblar/Kitoblar/Kitoblartoplami.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cardinfo/:_id" element={<CardCompanent />} />
        <Route path="/buyurtmamadali" element={<BuyurtmaMadali />}/>
        <Route path="/kitoblar" element={<Kitoblartoplami  />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
