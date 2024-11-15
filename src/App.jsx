import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import Create from "./components/Create";
import Edit from "./components/Edit";

const App = () => {
  return (
    <div className="w-full text-black overflow-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/product/:id" element={<Products />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;