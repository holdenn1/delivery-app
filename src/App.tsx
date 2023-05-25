import React from 'react';
import Layout from "./components/Layout";
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
      <Layout>
        <Outlet/>
      </Layout>
    </>
  );
}

export default App;
