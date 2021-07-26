import { applyMiddleware, createStore } from "redux";
import reducers from "../reducers";
import reducThunk from "redux-thunk";

const middlwares = applyMiddleware(reducThunk);

const store = createStore(reducers, middlwares);

export default store;
