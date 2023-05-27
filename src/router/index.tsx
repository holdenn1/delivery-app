import App from "../App";
import {createHashRouter} from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ShopsPage from "../pages/ShopsPage/ShopsPage";
import CartPage from "../pages/CartPage/CartPage";
import ShopProducts from "../components/ShopProducts/ShopProducts";


export const router = createHashRouter([
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