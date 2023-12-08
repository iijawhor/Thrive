import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import {
  BrowserRouter as Router,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Protected from "./components/AuthLayout/AuthLayout";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/", element: <HomePage /> }]
  },
  {
    path: "/login",
    element: (
      <Protected authentication={false}>
        <LoginPage />
      </Protected>
    )
  },
  {
    path: "/signup",
    element: (
      <Protected authentication={false}>
        <SignupPage />
      </Protected>
    )
  }
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
