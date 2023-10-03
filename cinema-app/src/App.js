import React from "react";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterPage from "./pages/RegisterPage";
import FilmPage from "./pages/FilmPage";
import CinemaPage from "./pages/CinemaPage";
import FilmDetailPage from "./pages/FilmDetail"
import UserAdminPage from "./pages/AdminPage/UserAdmin";
import FilmAdminPage from "./pages/AdminPage/FilmAdmin";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/listfilm" element={<FilmPage />}></Route>
      <Route path="/login" element={<LoginPage />} /> 
      <Route path="/register"   element={<RegisterPage/>} />  
      <Route path="/cinema"   element={<CinemaPage/>} /> 
      <Route path="/movie-list" element={<FilmPage />}></Route>
      <Route path="/detail" element={<FilmDetailPage />}></Route> 
      <Route path="/admin/user" element={<UserAdminPage />}></Route> 
      <Route path="/admin/film" element={<FilmAdminPage />}></Route> 
    </Routes>
    
  );
}
export default App;

