import { configureStore } from "@reduxjs/toolkit";

import { todoReducer } from "./todo";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export { store };
export type { AppDispatch, RootState };
