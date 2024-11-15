import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
// import axios from "../utils/axios";
import Loading from "./Loading";

const Home = () => {
  const [product] = useContext(ProductContext);
  const { search } = useLocation();
  const [filteredproducts, setfilteredproducts] = useState(null);
  const category = decodeURIComponent(search.split("=")[1]);

  // const getproductCategory = async () => {
  //   try {
  //     const { data } = await axios.get(`/products/category/${category}`);
  //     setfilteredproducts(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    if (!filteredproducts || category == "undefined")
      setfilteredproducts(product);
    if (category != "undefined")
      //  getproductCategory()
      setfilteredproducts(product.filter((p) => p.category == category));
  }, [category, product]);

  return product ? (
    <div className="w-full">
      <Nav />

      <div className="relative ml-[170px] sm:ml-[202px] py-7 gap-4 flex items-center justify-center flex-wrap">
        {filteredproducts &&
          filteredproducts.map((items, index) => (
            <Link
              key={items.id}
              to={`/product/${items.id}`}
              className="max-w-[15vw] sm:w-[17vw] h-[22vw] bg-white shadow-2xl flex flex-col items-center justify-center gap-5 p-5 hover:text-blue-800 hover:scale-105 rounded-xl hover:transition-all"
            >
              <img className="w-[50%] sm:w-[70%]" src={items.image} alt="" />
              <h1 className="text-[1.2vw] sm:text-sm text-center font-[500]">
                {items.title.slice(0, 25)}..
              </h1>
            </Link>
          ))}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Home;
