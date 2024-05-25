import { useDispatch } from 'react-redux';
import { addToCart } from "../../redux/actions/cartSlice";
export default function CardProduct({ children }) {

  return (

    <div className="w-full border  rounded-lg shadow max-w-sm border border-gray-800 bg-gray-700 m-2 " >
      {children}
    </div>
  );
}

function Images({ image ,id }) {
  return (
    <div className="p-4  mt-6 ">
      <a href="">
        <img
          src={image}
          alt="product"
          className="w-full rounded-t-lg h-60 w-full"
        />
      </a>
    </div>
  );
}

function Body({ children, title, id }) {
  return (
    <div className="px-5 pb-3 mt-3">
      <a href={`/product/${id}`}>

        <h5 className="text-xl font-semibold tracking-tight text-white">
          {title ? title.toString().substring(0, 30):""}
        </h5>
      </a>
      <p className="text-white text-m">{children ? children.toString().substring(0, 100):""}</p>

    </div>
  );
}

function Footer({ price, handleCart, id }) {
  const dispatch = useDispatch()
  return (
    <div className="flex justify-between px-5 pb-5">
      <span className="text-2xl font-bold text-white">
        $ {""}
        {price.toLocaleString("id-ID", {styless: "currency", currency: "USD"})}
        </span>
      <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded" onClick={()=>dispatch(addToCart(id))}>
        Add to cart
      </button>
    </div>
  );
}

CardProduct.Images = Images;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
