import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import LoginPage from './component/Pages/Login.jsx'
import RegisterPage from './component/Pages/Register.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './component/Pages/NotFound.jsx'
import ProductPage from './component/Pages/Product.jsx'
import DetailProductPage from './component/Pages/detailProduct.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import DarkModeContextProvider from './context/DarkMode.jsx'
import { TotalPriceProvider } from './context/TotalPrice.jsx'

const router = createBrowserRouter([{
  path:"/",
  element: <>
      <div className="flex justify-center items-center h-screen text-bold ">
  <h1>LANDING</h1>
  </div>
  </>,
  errorElement: <ErrorPage/>
},
{
  path:"/login",
  element: <LoginPage/>
},
{
  path:"/register",
  element: <RegisterPage/>
},
{
  path:"/product",
  element: <ProductPage/>
},{
  path:"/product/:id",
  element: <DetailProductPage/>
}

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
<DarkModeContextProvider>
  <TotalPriceProvider>
<RouterProvider router={router}/>
  </TotalPriceProvider>
</DarkModeContextProvider>
    </Provider>
  </React.StrictMode>,
)