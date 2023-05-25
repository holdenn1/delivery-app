import React from 'react';
import ShopsNavigation from "../../components/ShopsNavigation/ShopsNavigation";
import {Outlet} from 'react-router-dom'

function ShopsPage() {
  return (
    <>
      <ShopsNavigation/>
      <Outlet/>
    </>
  );
}

export default ShopsPage;