import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Nav = () => {
  const [product] = useContext(ProductContext);

  let distinct_category =
    product && product.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  return (
    <div className="fixed top-0 left-0 min-w-[170px] sm:w-[16%] transition-all h-screen bg-blue-300 flex flex-col items-center">
      <Link
        className="text-blue-700 hover:text-white border-[0.2vw] border-blue-700 hover:bg-blue-700 h-fit px-3 sm:px-4 rounded-full py-1 sm:py-2 bg-white font-[500] shadow mt-5"
        to="/create"
      >
        Add to Product
      </Link>

      <h1 className="text-xl sm:text-[21.5px] font-[700] transition-all text-white mt-6">Filter Products</h1>
      <div className="text-white flex flex-col mt-3">
        {distinct_category.map((c, i) => {
          return (
            <NavLink
              key={i}
              to={`/?catogery=${c}`}
              className="hover:text-white text-zinc-200 whitespace-nowrap transition-all hover:bg-blue-700 py-3 px-3 rounded-md text-[12px] sm:text-[16px]"
            >
              {c.toUpperCase()}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
