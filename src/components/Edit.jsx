import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setproduct] = useContext(ProductContext);
  const [productDetsShow, setproductDetsShow] = useState({
    image: "",
    title: "",
    price: "",
    category: "",
    description: "",
  });

  const ChangeHandler = (e) => {
    setproductDetsShow({ ...productDetsShow, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    setproductDetsShow(product.filter((p) => p.id == id)[0]);
  }, [id]);

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      productDetsShow.image.trim().length < 5 ||
      productDetsShow.title.trim().length < 5 ||
      productDetsShow.category.trim().length < 5 ||
      productDetsShow.price.trim().length < 1 ||
      productDetsShow.description.trim().length < 5
    ) {
      alert("Each and every input must have atleast 4 characters");
      return;
    }

    const pi = product.findIndex((p) => p.id == id);
    const copyData = [...product];
    copyData[pi] = { ...product[pi], ...productDetsShow };

    setproduct(copyData);
    localStorage.setItem("product", JSON.stringify(copyData));
    navigate("/");
  };

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <div className="container mx-auto">
      <div className="min-h-screen w-full flex flex-col items-center py-8">
        <button onClick={()=>backHandler()} className="absolute top-5 z-[90] left-[17vw] text-blue-400 border-blue-400 border-[0.145vw] py-[0.4vw] px-[1.5vw] font-[500] text-[1.5vw] hover:bg-blue-400 hover:text-white">
          Back
        </button>
        <h1 className="text-3xl font-[600] mb-10">Edit Product</h1>
        <form
          onSubmit={AddProductHandler}
          className="flex flex-col gap-3 w-1/2"
        >
          <input
            name="image"
            onChange={ChangeHandler}
            value={productDetsShow && productDetsShow.image}
            className="outline-none py-3 px-5 rounded-full bg-zinc-100 hover:bg-zinc-200"
            type="url"
            placeholder="Product Image"
          />

          <input
            name="title"
            onChange={ChangeHandler}
            value={productDetsShow && productDetsShow.title}
            className="outline-none py-3 px-5 rounded-full bg-zinc-100 hover:bg-zinc-200"
            type="text"
            placeholder="Title"
          />

          <div className="flex-col flex sm:flex-row items-center gap-3">
            <input
              name="price"
              onChange={ChangeHandler}
              value={productDetsShow && productDetsShow.price}
              className="outline-none py-3 px-5 rounded-full bg-zinc-100 hover:bg-zinc-200 w-full"
              type="number"
              placeholder="Price"
            />

            <input
              name="category"
              onChange={ChangeHandler}
              value={productDetsShow && productDetsShow.category}
              className="outline-none py-3 px-5 rounded-full bg-zinc-100 hover:bg-zinc-200 w-full"
              type="text"
              placeholder="Category"
            />
          </div>

          <textarea
            name="description"
            onChange={ChangeHandler}
            value={productDetsShow && productDetsShow.description}
            className="max-h-36 outline-none py-3 px-5 rounded-xl bg-zinc-100 hover:bg-zinc-200"
            rows="5"
            placeholder="Product Description..."
          ></textarea>

          <input
            className="text-lg border-[1.5px] w-fit py-1 px-3 font-[500] text-green-400 border-green-400 hover:bg-green-400 hover:text-white mx-auto rounded-full"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Edit;
