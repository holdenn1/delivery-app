import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ShopsPage from "../pages/ShopsPage/ShopsPage";
import CartPage from "../pages/CartPage/CartPage";
import ShopProducts from "../components/ShopProducts/ShopProducts";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <ShopsPage/>,
        children: [{
          path: `:shop`,
          element: <ShopProducts/>
        }]
      },
      {
        path: 'cart',
        element: <CartPage/>,

      }
    ]
  }
])