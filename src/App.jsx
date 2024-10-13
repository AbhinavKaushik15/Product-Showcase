import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";


const App = () => {


  return (
    <div className="w-full min-h-screen text-black overflow-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Products />} />
        </Routes>
    </div>
  );
};

export default App;
