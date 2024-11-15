import React, { useContext, useState } from "react";
import { ProductContext } from "../utils/Context";
import { nanoid } from "nanoid";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Create = () => {
  const navigate = useNavigate();
  const [product, setproduct] = useContext(ProductContext);
  const [image, setimage] = useState("");
  const [title, settitle] = useState("");
  const [price, setprice] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");

  const AddProductHandler = (e) => {
    e.preventDefault();

    if (
      image.trim().length < 5 ||
      title.trim().length < 5 ||
      price.trim().length < 1 ||
      category.trim().length < 5 ||
      description.trim().length < 5
    ) {
      alert("Each and every inputmust have atleast 4 characters");
      return;
    }

    const prod = {
      id: nanoid(),
      image,
      title,
      price,
      category,
      description,
    };
    setproduct([...product, prod]);
    localStorage.setItem("product", JSON.stringify([...product, prod]));
    toast.success("Product added successfully");
    navigate("/");
  };

  return (
      <div className="min-h-screen w-full flex flex-col items-center py-8">
        <Link
          className="absolute top-5 z-[90] left-[17vw] text-blue-400 border-blue-400 border-[0.145vw] py-[0.4vw] px-[1vw] font-[500] text-[1.5vw] hover:bg-blue-400 hover:text-white"
          to="/"
        >
          Home
        </Link>
        <h1 className="text-3xl font-[600] mb-8">Add Product</h1>
        <form
          onSubmit={AddProductHandler}
          className="flex flex-col gap-3 w-1/2"
        >
          <input
            onChange={(e) => setimage(e.target.value)}
            value={image}
            className="outline-none py-3 px-5 rounded-full bg-zinc-100 hover:bg-zinc-200"
            type="url"
            placeholder="Product Image"
          />

          <input
            onChange={(e) => settitle(e.target.value)}
            value={title}
            className="outline-none py-3 px-5 rounded-full bg-zinc-100 hover:bg-zinc-200"
            type="text"
            placeholder="Title"
          />

          <div className="flex-col sm:flex-row flex items-center gap-3">
            <input
              onChange={(e) => setprice(e.target.value)}
              value={price}
              className="outline-none py-3 px-5 rounded-full bg-zinc-100 hover:bg-zinc-200 w-full"
              type="number"
              placeholder="Price"
            />

            <input
              onChange={(e) => setcategory(e.target.value)}
              value={category}
              className="outline-none py-3 px-5 rounded-full bg-zinc-100 hover:bg-zinc-200 w-full"
              type="text"
              placeholder="Category"
            />
          </div>

          <textarea
            onChange={(e) => setdescription(e.target.value)}
            value={description}
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
  );
};

export default Create;
