import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';

import App from "./components/App";
import store from "./store";
const rootElement = document.getElementById("root");


ReactDOM.render(
  <StrictMode>
    
    <Provider store={store}>
    <App />
    </Provider>
    
  </StrictMode>,
  rootElement
);


