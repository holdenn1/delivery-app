import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ShopsPage from "../pages/ShopsPage/ShopsPage";
import CartPage from "../pages/CartPage/CartPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <ShopsPage/>
      },
      {
        path: 'cart',
        element: <CartPage/>
      }
    ]
  }
])