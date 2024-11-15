import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import { toast } from "react-toastify";

const Products = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setproduct] = useContext(ProductContext);
  // const prod = product && product.find((prod) => prod.id == +id);
  const [productSave, setproductSave] = useState(null);

  useEffect(() => {
    if (!productSave) {
      setproductSave(product.filter((p) => p.id == id)[0]);
    }
  }, []);

  const ProductDeleteHandler = (id) => {
    const filteredProduct = product.filter((p) => p.id !== id);
    setproduct(filteredProduct);
    localStorage.setItem("product", JSON.stringify(filteredProduct));
    toast.success("Product deleted successfully");
    navigate("/");
  };

  return productSave && (
    <div className="w-full min-h-screen flex items-center justify-center gap-[7vw]">
      <Link
        className="absolute top-5 z-[90] left-[17vw] text-blue-400 border-blue-400 border-[0.145vw] py-[0.4vw] px-[1vw] font-[500] text-[1.5vw] hover:bg-blue-400 hover:text-white"
        to="/"
      >
        Home
      </Link>
      <div className="w-[20vw] h-[28vw]">
        <img
          className="w-full h-full object-contain"
          src={productSave.image}
          alt=""
        />
      </div>

      <div className="w-[35%] flex flex-col gap-[1.5vw]">
        <h1 className="text-[2.6vw] w-full font-[700] leading-[1.2]">
          {productSave.title}
        </h1>
        <p className="text-zinc-500 w-full text-[1.7vw]">
          {productSave.category}
        </p>
        <h1 className="text-[2.4vw] font-[400] text-red-300 ">
          € {productSave.price}
        </h1>
        <h1 className="text-[1.3vw] text-zinc-700 sm:text-[2.5vh] w-[32vw]">
          {productSave.description}
        </h1>

        <div className="flex items-center gap-10">
          <Link
            to={`/edit/${productSave.id}`}
            className="text-blue-400 border-[0.145vw] border-blue-400 py-[0.4vw] px-[1.8vw] font-[500] text-[1.5vw] transition-all hover:bg-blue-400 hover:text-white"
          >
            Edit
          </Link>
          <button
            onClick={() => ProductDeleteHandler(productSave.id)}
            className="text-red-400 border-[0.145vw] border-red-400 transition-all hover:bg-red-400 hover:text-white py-[0.4vw] px-[1vw] font-[500] text-[1.5vw]"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
};

export default Products;
