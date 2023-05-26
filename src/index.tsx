import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {router} from "./router";
import './firebase'
import {store} from "./store";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterProvider router={router}/>
  </Provider>
);


