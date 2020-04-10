import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

// importando os reducers
import reducers from "./reducers";

// usando redux devtools do google chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// middlewares que irei usar
const middlewares = [logger, thunk];

// criando a store e juntando tudo
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
