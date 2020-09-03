import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";

const middlewares = [];

const store = createStore(reducer, applyMiddleware(...middlewares));

export default store;
