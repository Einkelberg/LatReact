import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export default function TableCart({ products  }) {
    const cart = useSelector((state) => state.cart.data);
    const [totalPrice, setTotalPrice] = useState(0);

    
      useEffect(() => {
        if (cartRef.current) {
          if (cart.length > 0) {
            cartRef.current.style.display = "block";
          } else {
            cartRef.current.style.display = "none";
          }
        }
      }, [cart]);

      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      },[cart])

    
      const cartRef = useRef(null);
    return <>
    <div className="w-2/4">
    <h1 className="text-3xl font-bold text-blue-600">Cart</h1>

    <table
    ref={cartRef}
      className="text-left table-auto  border-collapse border border-white-200"
      >
      <thead className="bg-gray-100">
        <tr>
          <th className="p-3 text-left">Product</th>
          <th className="p-3 text-left">Price</th>
          <th className="p-3 text-left">Qty</th>
          <th className="p-3 text-left">Total</th>
        </tr>
      </thead>
      <tbody className="bg-gray-100">
        {products.length > 0 &&
          cart.map((item) => {
            const product = products.find((p) => p.id === item.id);
            const totalPrice = product.price * item.qty;
            return (
              <tr key={item.id}>
                <td className="p-3 border border-gray-200">
                  {product.title}
                </td>
                <td className="p-3 border border-gray-200">
                  {product.price.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
                <td className="p-3 border border-gray-200">{item.qty}</td>
                <td className="p-3 border border-gray-200">
                  {totalPrice.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "USD",
                  })}
                </td>
              </tr>
            );
          })}
        {cart.length > 0 && products.length > 0 && (
          <tr>
            <td className="p-3 font-bold">Total Price</td>
            <td className="p-3" colSpan={3}>
              {cart
                .reduce((totalPrice, item) => {
                  const product = products.find((p) => p.id === item.id);
                  const itemTotalPrice = product.price * item.qty;
                  return totalPrice + itemTotalPrice;
                }, 0)
                .toLocaleString("id-ID", {
                  style: "currency",
                  currency: "USD",
                })}
            </td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
        </>
}