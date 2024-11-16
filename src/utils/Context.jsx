import axios from "../utils/axios";
import React, { createContext, useEffect, useState } from "react";
export const ProductContext = createContext(null);

const Context = (props) => {
  const [product, setproduct] = useState(JSON.parse(localStorage.getItem("product")) || null);

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/products`);
      setproduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <ProductContext.Provider value={[product, setproduct]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
