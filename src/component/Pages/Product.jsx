import { useEffect, useRef, useState } from "react";
import { getProducts } from "../../services/product.service";
import { jwtDecode } from "jwt-decode";
import { Link } from "react-router-dom";
import CardProduct from "../Fragment/CardProduct";
import TableCart from "../Fragment/TableCart";
import Navbar from "../Layout/Navbar";
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");
  const {isDarkMode, setIsDarkMode} = useContext(DarkMode)

  

  useEffect(() => {
    const token = localStorage.getItem("token");
    setUsername(jwtDecode(token).username);
  }, []);


  useEffect(() => {
    getProducts((data) => setProducts(data));
  }, []);

 


  return (
    <>
      <Navbar isDarkMode={isDarkMode}/>
      <div className={`flex justify-center ${isDarkMode && "bg-slate-800"}`}>
        <div className="w-3/4 flex flex-wrap">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id} >
                <CardProduct.Images image={product.image} id={product.id}/>
                <CardProduct.Body title={product.title}id={product.id}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                />
              </CardProduct>
            ))}
        </div>
        <TableCart products={products}/>

      </div>
    </>
  );
}
