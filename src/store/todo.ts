import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import { getFromLocalStorage, saveToLocalStorage } from "../utils/local-storage";

type TodoFilter = "all" | "active" | "done";
type TodoSort = "normal" | "reverse";

interface TodoItem {
  value: string;
  isDone: boolean;
  optionId: number;
}

interface TodoState {
  items: TodoItem[];
  filter: TodoFilter;
  sort: TodoSort;
}

const defaultTodoState: TodoState = {
  items: [],
  filter: "all",
  sort: "normal",
};

const initialTodoState: TodoState = getFromLocalStorage("todo-state", defaultTodoState);

const persistState = (state: TodoState) => {
  saveToLocalStorage("todo-state", state);
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodoState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      const nextOptionId =
        state.items.length > 0 ? Math.max(...state.items.map((item) => item.optionId)) + 1 : 1;

      state.items.push({
        value: action.payload,
        isDone: false,
        optionId: nextOptionId,
      });

      persistState(state);
    },
    deleteItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((item) => item.optionId !== action.payload);

      persistState(state);
    },
    toggleDone(state, action: PayloadAction<number>) {
      const todoItem = state.items.find((item) => item.optionId === action.payload);

      if (todoItem) {
        todoItem.isDone = !todoItem.isDone;
        persistState(state);
      }
    },
    setFilter(state, action: PayloadAction<TodoFilter>) {
      state.filter = action.payload;
      persistState(state);
    },
    setSort(state, action: PayloadAction<TodoSort>) {
      state.sort = action.payload;
      persistState(state);
    },
    reorderItems(
      state,
      action: PayloadAction<{
        source: number;
        destination: number;
      }>,
    ) {
      const sourceIndex = state.items.findIndex((item) => item.optionId === action.payload.source);
      const destinationIndex = state.items.findIndex(
        (item) => item.optionId === action.payload.destination,
      );

      if (sourceIndex === -1 || destinationIndex === -1) {
        return;
      }

      const [reorderedItem] = state.items.splice(sourceIndex, 1);
      state.items.splice(destinationIndex, 0, reorderedItem);

      persistState(state);
    },
    changeItem(
      state,
      action: PayloadAction<{
        id: number;
        value: string;
      }>,
    ) {
      const todoItem = state.items.find((item) => item.optionId === action.payload.id);

      if (todoItem) {
        todoItem.value = action.payload.value;
        persistState(state);
      }
    },
  },
});

const { actions: todoActions, reducer: todoReducer } = todoSlice;

export { todoActions, todoReducer };
export type { TodoFilter, TodoItem, TodoSort, TodoState };
