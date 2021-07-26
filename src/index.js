import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider } from "react-redux";
import { store } from "./services";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <Provider store={store}>
        <App />
      </Provider>
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
