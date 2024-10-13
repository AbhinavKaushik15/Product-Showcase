import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import axios from "../utils/axios";
import Loading from "./Loading";

const Home = () => {
  const [product] = useContext(ProductContext);
  const { search } = useLocation();
  const [filteredproducts, setfilteredproducts] = useState(null);
  const category = decodeURIComponent(search.split("=")[1]);

  const getproductCategory = async () => {
    try {
      const { data } = await axios.get(`/products/category/${category}`);
      setfilteredproducts(data);
      console.log(setfilteredproducts);
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    if (!filteredproducts || category == "undefined") setfilteredproducts(product);
    if (category != "undefined") getproductCategory();
  }, [category, product]);

  return product ? (
    <>
      <Nav />

      <div className="relative ml-72 gap-5 w-[82vw] flex flex-wrap py-14">
        {filteredproducts && filteredproducts.map((items, index) => (
            <Link
              key={items.id}
              to={`/product/${items.id}`}
              className="w-[17vw] h-[22vw] bg-white shadow-2xl flex flex-col items-center justify-center gap-3 p-5 hover:text-blue-800 hover:scale-105 rounded-xl hover:transition-all"
            >
              <img className="w-[9.5vw]" src={items.image} alt="" />
              <h1 className="text-xs text-center font-[500] ">{items.title}</h1>
            </Link>
          ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;
