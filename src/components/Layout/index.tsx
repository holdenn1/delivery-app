import React from 'react';
import {Children} from './../../types';

function Layout({children}: Children) {
  return (
    <p>{children}</p>
  );
}

export default Layout;