import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ProductContext } from "../utils/Context";

const Nav = () => {
  const [product] = useContext(ProductContext);

  let distinct_category =
    product && product.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  return (
    <div className="w-[18vw] h-screen bg-blue-300 flex flex-col items-center fixed top-0 left-0">
      <Link
        className="text-blue-500 hover:text-white border-[2px] border-blue-500 hover:bg-blue-500 h-fit px-4 py-2 bg-white font-[500] shadow mt-5"
        to="/create"
      >
        Add to Product
      </Link>

      <h1 className="text-2xl font-[500] text-white mt-6">Filter Products</h1>
      <div className="text-white flex flex-col gap-3 mt-5">
        {distinct_category.map((c, i) => {
          return (
            <NavLink
              key={i}
              to={`/?catogery=${c}`}
              className="hover:text-blue-600"
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
