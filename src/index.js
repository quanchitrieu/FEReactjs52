import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// css
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// js
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import "../node_modules/jquery/dist/jquery.slim.min";
import "../node_modules/popper.js/dist/umd/popper.min";

// redux
import { createStore } from "redux";
import rootReducer from "./Redux/reducers";
import { Provider } from "react-redux";

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// document.getElementById("root").innerHTML = `
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// `;

ReactDOM.render(
  // nội dung in ra html
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  // vị trí in ra html
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
