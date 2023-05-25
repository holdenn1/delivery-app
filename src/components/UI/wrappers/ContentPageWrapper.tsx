import React from 'react';
import "./ContentPageWrapper.scss";
import classNames from "classnames";

type ContentPageWrapperProp = {
  children: React.ReactNode
  pathname: string
}

function ContentPageWrapper({children, pathname}: ContentPageWrapperProp) {
  const location = pathname === '/cart';

  return (
    <div className={classNames(
      {shop: !location},
      {shoppingCart: location}
    )}>
      {children}
    </div>
  );
}

export default ContentPageWrapper;