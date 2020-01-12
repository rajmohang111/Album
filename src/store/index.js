import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "../middleware";
import { rootReducer } from "../reducers";

export function configureStore(initialState) {
  let middleware = applyMiddleware(logger);

  if (process.env.NODE_ENV !== "production") {
    middleware = composeWithDevTools(middleware);
  }

  const store = createStore(rootReducer, initialState, middleware);

  // if (module.hot) {
  //   module.hot.accept("reducers", () => {
  //     const nextReducer = require("reducers");
  //     store.replaceReducer(nextReducer);
  //   });
  // }

  return store;
}
