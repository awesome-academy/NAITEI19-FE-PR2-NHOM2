import React from "react";
import Login from "./components/authorize/login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/authorize/register/Register";
import FilmPage from "./pages/FilmPage";
import CinemaPage from "./pages/CinemaPage";
import FilmDetailPage from "./pages/FilmDetail"
import TicketPage from "./pages/Ticket";
import TicketDetailPage from "./pages/TicketDetail";
import GiftShopPage from "./pages/GiftShopPage";
import GiftShopDetailPage from "./pages/GiftShopDetail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/listfilm" element={<FilmPage />}></Route>
      <Route path="/login" element={<Login />} /> 
      <Route path="/register"   element={<Register/>} />  
      <Route path="/cinema"   element={<CinemaPage/>} />  
      <Route path="/movie-list" element={<FilmPage />}></Route>
      <Route path="/detail" element={<FilmDetailPage />}></Route>
      <Route path="/event" element={<TicketPage />}></Route>
      <Route path="/event-detail" element={<TicketDetailPage />}></Route>
      <Route path="/gift-shop" element={<GiftShopPage />}></Route>
      <Route path="/gift-shop-detail" element={<GiftShopDetailPage />}></Route>
    </Routes>
  );
}
export default App;

