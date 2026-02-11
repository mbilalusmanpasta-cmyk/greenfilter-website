import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

if (process.env.NODE_ENV === "production") {
  window.addEventListener("load", () => {
    console.log("Firing render-event");
    window.dispatchEvent(new Event("render-event"));
    // setTimeout(() => {
    //   window.dispatchEvent(new Event("render-event"));
    // }, 100);

    // Small delay is safe
  });
}

console.log("process.env.NODE_ENV 2 ", process.env.NODE_ENV)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
