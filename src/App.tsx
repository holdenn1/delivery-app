import React, {useEffect} from 'react';
import Layout from "./components/Layout";
import {Outlet} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import {ToastContainer} from "react-toastify";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/big-burger', { replace: true });
  }, []);
  
  return (
    <>
      <ToastContainer />
      <Layout>
        <Outlet/>
      </Layout>
    </>
  );
}

export default App;
