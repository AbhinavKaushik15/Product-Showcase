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
        className="text-blue-500 hover:text-white border-[2px] border-blue-500 hover:bg-blue-500 h-fit px-3 sm:px-4 sm: py-1 sm:py-2 bg-white font-[500] shadow mt-5"
        to="/create"
      >
        Add to Product
      </Link>

      <h1 className="text-xl sm:text-[21.5px] font-[700] transition-all text-white mt-6">Filter Products</h1>
      <div className="text-white flex flex-col gap-3 mt-5">
        {distinct_category.map((c, i) => {
          return (
            <NavLink
              key={i}
              to={`/?catogery=${c}`}
              className="hover:text-blue-600 transition-all text-sm sm:text-[16px]"
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
