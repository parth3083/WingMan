import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Regsiter from "../pages/Register";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Regsiter/>} />
    </Routes>
  );
}

export default AppRouter;
