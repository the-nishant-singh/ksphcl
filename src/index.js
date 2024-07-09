import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css"
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { LoaderProvider } from "./context/LoaderContext";
import LoaderComponent from "./components/LoaderComponent";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <LoaderProvider>
      <LoaderComponent />
      <ToastContainer
        position="top-right"
        autoClose={2100}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
        icon={false} 
      />
      <AuthProvider>
        <App />
      </AuthProvider>
    </LoaderProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
