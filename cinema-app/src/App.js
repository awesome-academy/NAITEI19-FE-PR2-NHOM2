import React from "react";
import Login from "./components/authorize/login/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/authorize/register/Register";
import FilmPage from "./pages/FilmPage";
import CinemaPage from "./pages/CinemaPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/listfilm" element={<FilmPage />}></Route>
      <Route path="/login" element={<Login />} /> 
      <Route path="/register"   element={<Register/>} />  
      <Route path="/cinema"   element={<CinemaPage/>} />  
    </Routes>
  );
}
export default App;

