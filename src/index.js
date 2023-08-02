import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./css/comman.css";
import Nav from "./components/Nav";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Nav />
      <AppRoutes />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
