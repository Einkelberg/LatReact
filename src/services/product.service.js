import axios from "axios";

export function getProducts(callback) {
  axios
    .get("https://fakestoreapi.com/products")
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
export function getProductsById(callback, id) {
  axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      console.log(res.data);
      callback(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
}
