import React from 'react';
import {Children} from './../../types';
import AppNavigation from "../AppNavigation/AppNavigation";
import ContentPageWrapper from "../UI/wrappers/ContentPageWrapper";
import {useLocation} from 'react-router-dom'

function Layout({children}: Children) {
  let {pathname} = useLocation();

  return (
    <ContentPageWrapper pathname={pathname}>
      <AppNavigation/>
      {children}
    </ContentPageWrapper>

  );
}

export default Layout;