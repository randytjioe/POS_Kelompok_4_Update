import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./redux/store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import AuthProvider from './hoc/authProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({reducer:rootReducer,middleware:[thunk]})


root.render(
  <React.StrictMode>
  <Provider store={store}>
    <AuthProvider>
    <ChakraProvider>
      <BrowserRouter>
       <App />
       </BrowserRouter>
    </ChakraProvider>
    </AuthProvider>
  </Provider>
  
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
