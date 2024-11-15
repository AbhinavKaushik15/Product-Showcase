import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import Create from "./components/Create";
import Edit from "./components/Edit";

const App = () => {
  const {search, pathname} = useLocation();  

  return (
    <div className="w-full text-black overflow-hidden">
      {(pathname != "/" || search.length > 0) && (
        <Link
        className="relative top-5 z-[90] left-[17vw] text-blue-400 border-blue-400 border-[0.145vw] py-[0.4vw] px-[1vw] font-[500] text-[1.5vw] hover:bg-blue-400 hover:text-white"
        to="/"
      >
        Home
      </Link>
      )}
      
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
