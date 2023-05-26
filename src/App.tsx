import React, {useEffect} from 'react';
import Layout from "./components/Layout";
import {Outlet} from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/big-burger', { replace: true });
  }, []);
  
  return (
    <>
      <Layout>
        <Outlet/>
      </Layout>
    </>
  );
}

export default App;
