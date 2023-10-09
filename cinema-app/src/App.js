import React from "react";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import FilmPage from "./pages/FilmPage";
import CinemaPage from "./pages/CinemaPage";
import FilmDetailPage from "./pages/FilmDetail";
import UserAdminPage from "./pages/AdminPage/UserAdmin";
import FilmAdminPage from "./pages/AdminPage/FilmAdmin";
import TicketPage from "./pages/Ticket";
import TicketDetailPage from "./pages/TicketDetail";
import GiftShopPage from "./pages/GiftShopPage";
import GiftShopDetailPage from "./pages/GiftShopDetail";
import Order from "./pages/Order";
import HistoryPage from "./pages/HistoryPage";
import Payment from "./pages/Payment";
import LogoutPage from "./pages/LogoutPage";
import TicketAdmin from "./components/Admin/TicketManagement/TicketAdmin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/listfilm" element={<FilmPage />}></Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
      <Route path="/cinema" element={<CinemaPage />} />
      <Route path="/movie-list" element={<FilmPage />}></Route>
      <Route path="/detail" element={<FilmDetailPage />}></Route>
      <Route path="/admin/user" element={<UserAdminPage />}></Route>
      <Route path="/admin/film" element={<FilmAdminPage />}></Route>
      <Route path="/admin/ticket" element={<TicketAdmin/>}></Route>
      <Route path="/movie-list" element={<FilmPage />}></Route>
      <Route path="/detail" element={<FilmDetailPage />}></Route>
      <Route path="/event" element={<TicketPage />}></Route>
      <Route path="/event-detail" element={<TicketDetailPage />}></Route>
      <Route path="/gift-shop" element={<GiftShopPage />}></Route>
      <Route path="/gift-shop-detail" element={<GiftShopDetailPage />}></Route>
      <Route path="/ticket" element={<Order />}></Route>
      <Route path="/history" element={<HistoryPage />}></Route>
      <Route path="/logout" element={<LogoutPage />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
    </Routes>
      
  );  
}
export default App;
