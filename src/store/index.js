import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import allReducers from "./reducers";
import sagas from "./sagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: true }), sagaMiddleware];

const store = configureStore({
  reducer: allReducers,
  middleware,
});

sagaMiddleware.run(sagas);

export default store;
