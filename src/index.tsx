import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.scss';
import {Provider} from 'react-redux';
import {RouterProvider} from 'react-router-dom';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {router} from "./router";
import './firebase'
import {store} from "./store";

let persistor = persistStore(store);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={router}/>
    </PersistGate>
  </Provider>
);


