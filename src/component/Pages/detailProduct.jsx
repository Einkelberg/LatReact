import { useParams } from "react-router-dom";
import { getProductsById } from "../../services/product.service";
import { useEffect, useState } from "react";

export default function DetailProductPage() {
  const [products, setProducts] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getProductsById((data) => setProducts(data), id);
    console.log(products)
  }, [id]);
  const price = products.price || '';
  const rate = products.rating ? products.rating.rate : '';
  const totalRate = products.rating ? products.rating.count : '';
  return (

      <div className="flex font-sans justify-center bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 mt-12">
  <div className="flex w-100  relative items-center">
    <img src={products.image} alt="" className=" w-full  " loading="lazy" />
  </div>
  <form className="flex-auto p-6">
    <div className="flex flex-wrap">
      <h1 className="flex-auto text-lg font-semibold text-slate-900">
        {products.title}
      </h1>
      <div className="text-lg font-semibold text-slate-500">
        <span>
      $ {""}
      {price}
        </span>

      </div>
      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        {products.description}
      </div>
      <div className="w-full flex-none text-sm font-medium text-slate-700 mt-2">
        Rating 
        <span className="block">
            {rate}/5.0  ({totalRate})  
            </span>
      </div>

    </div>
    <div className="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">

    </div>
    <div className="flex space-x-4 mb-6 text-sm font-medium">
      <div className="flex-auto flex space-x-4">
        <button className="h-10 px-6 font-semibold rounded-md bg-black text-white" type="submit">
          Buy now
        </button>
        <button className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900" type="button">
          Add to bag
        </button>
      </div>
    </div>
    <p className="text-sm text-slate-700">
      Free shipping on all continental US orders.
    </p>
  </form>
</div>
        
  );
}
