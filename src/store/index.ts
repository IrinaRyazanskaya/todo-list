import { combineReducers, createStore } from "redux";

import { todoReducer } from "./todo";

const rootReducer = combineReducers({
  todo: todoReducer,
});

const store = createStore(rootReducer);

type RootState = ReturnType<typeof rootReducer>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { AppDispatch, RootState };
