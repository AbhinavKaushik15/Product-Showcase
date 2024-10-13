import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Products from "./components/Products";
import Home from "./components/Home";
import Create from "./components/Create";

const App = () => {
  const {search, pathname} = useLocation();  

  return (
    <div className="w-full min-h-screen text-black overflow-hidden">
      {(pathname != "/" || search.length > 0) && (
        <Link
        className="fixed top-3 z-[90] left-64 font-[500] text-blue-400 border-blue-400 border-[1.3px] py-1 px-5 hover:bg-blue-400 hover:text-white"
        to="/"
      >
        Home
      </Link>
      )}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/product/:id" element={<Products />} />
      </Routes>
    </div>
  );
};

export default App;
