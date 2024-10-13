import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

const Products = () => {
  const {id} = useParams();
  const [product, setproduct] = useContext(ProductContext);
  const prod = product && product.find((prod) => prod.id === +id);

  return product ? (
    <div className='md:w-[50%] w-[80%] min-h-screen mx-auto flex justify-center items-center gap-20 px-20 py-5'>
      <Link className='fixed top-3 left-64 font-[500] text-blue-400 border-blue-400 border-[1.3px] py-1 px-5 hover:bg-blue-400 hover:text-white' to="/">Home</Link>
      
      <img className='w-52 h-72 object-contain' src={prod.image} alt="" />

      <div className='w-[50%] flex flex-col gap-5'>
        <h1 className='text-3xl font-[500]'>{prod.title}</h1>
        <p className='text-zinc-500'>{prod.category}</p>
        <h1 className='text-sm'>{prod.description}</h1>

        <div className='flex items-center gap-5'>
          <h1 className='bg-green-500 w-fit px-3 py-1 rounded-lg text-white'>{prod.rating.rate} ⭐</h1>
          <p>({prod.rating.count})</p>
        </div>

        <div className='flex items-center gap-10'>
          <Link className='text-blue-400 border-[1.5px] border-blue-400 py-1 px-6 font-[500] text-xl hover:bg-blue-400 hover:text-white' to={`/edit`}>Edit</Link>
          <button className='text-red-400 border-[1.5px] border-red-400 hover:bg-red-400 hover:text-white py-1 px-6 font-[500] text-xl'>Delete</button>
        </div>
      </div>
    </div>
  ) : <h1>Loading...</h1>
}

export default Products;