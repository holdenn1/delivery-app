import React, {useEffect} from 'react';
import Layout from "./components/Layout";
import {Outlet} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import {ToastContainer} from "react-toastify";
import {useAppSelector} from "./hooks/reduxHooks";

function App() {
  const navigate = useNavigate();

  const {orderProducts} = useAppSelector(state => state.shop)

  useEffect(() => {
    if (orderProducts.length) {
      navigate(`/${orderProducts[0].shop}`, {replace: true})
    } else {
      navigate('/big-burger', {replace: true});
    }
  }, []);

  return (
    <>
      <ToastContainer/>
      <Layout>
        <Outlet/>
      </Layout>
    </>
  );
}

export default App;
