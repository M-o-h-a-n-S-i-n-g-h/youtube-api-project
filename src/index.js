import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import ShowLoading from "./components/ShowLoading/ShowLoading";

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
        <PersistGate loading={<ShowLoading/>} persistor={persistor}>
           <App/>
        </PersistGate>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();