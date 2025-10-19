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

type TodoAddAction = {
  type: "todo/add";
  payload: string;
};

type TodoDeleteAction = {
  type: "todo/delete";
  payload: number;
};

type TodoDoneAction = {
  type: "todo/done";
  payload: number;
};

type TodoFilterAction = {
  type: "todo/filter";
  payload: TodoFilter;
};

type TodoSortAction = {
  type: "todo/sort";
  payload: TodoSort;
};

type TodoReorderAction = {
  type: "todo/reorder";
  payload: {
    source: number;
    destination: number;
  };
};

type TodoChangeAction = {
  type: "todo/change";
  payload: {
    id: number;
    value: string;
  };
};

type TodoAction =
  | TodoAddAction
  | TodoDeleteAction
  | TodoDoneAction
  | TodoFilterAction
  | TodoSortAction
  | TodoReorderAction
  | TodoChangeAction;

const defaultTodoState: TodoState = {
  items: [],
  filter: "all",
  sort: "normal",
};

const initialTodoState: TodoState = getFromLocalStorage("todo-state", defaultTodoState);

function handleTodoAdd(state: TodoState, text: string): TodoState {
  const newItems: TodoItem[] = [
    ...state.items,
    {
      value: text,
      isDone: false,
      optionId:
        state.items.length > 0 ? Math.max(...state.items.map((item) => item.optionId)) + 1 : 1,
    },
  ];

  return {
    ...state,
    items: newItems,
  };
}

function handleTodoDelete(state: TodoState, id: number): TodoState {
  const newItems = state.items.filter((item) => item.optionId !== id);

  return {
    ...state,
    items: newItems,
  };
}

function handleTodoDone(state: TodoState, id: number): TodoState {
  const newItems = state.items.map((item) => {
    if (item.optionId === id) {
      return { ...item, isDone: !item.isDone };
    }

    return item;
  });

  return {
    ...state,
    items: newItems,
  };
}

function handleTodoFilter(state: TodoState, filterValue: TodoFilter): TodoState {
  return {
    ...state,
    filter: filterValue,
  };
}

function handleTodoSort(state: TodoState, sortValue: TodoSort): TodoState {
  return {
    ...state,
    sort: sortValue,
  };
}

function handleTodoReorder(state: TodoState, payload: TodoReorderAction["payload"]): TodoState {
  const reorderedItems = [...state.items];

  const sourceIndex = reorderedItems.findIndex((item) => item.optionId === payload.source);
  const destinationIndex = reorderedItems.findIndex(
    (item) => item.optionId === payload.destination,
  );

  if (sourceIndex === -1 || destinationIndex === -1) {
    return state;
  }

  const [reorderedItem] = reorderedItems.splice(sourceIndex, 1);
  reorderedItems.splice(destinationIndex, 0, reorderedItem);

  return {
    ...state,
    items: reorderedItems,
  };
}

function handleTodoChange(state: TodoState, payload: TodoChangeAction["payload"]): TodoState {
  const newItems = state.items.map((item) => {
    if (item.optionId === payload.id) {
      return { ...item, value: payload.value };
    }

    return item;
  });

  return {
    ...state,
    items: newItems,
  };
}

function todoReducer(state: TodoState = initialTodoState, action: TodoAction): TodoState {
  let newState: TodoState;

  switch (action.type) {
    case "todo/add": {
      newState = handleTodoAdd(state, action.payload);
      break;
    }
    case "todo/delete": {
      newState = handleTodoDelete(state, action.payload);
      break;
    }
    case "todo/done": {
      newState = handleTodoDone(state, action.payload);
      break;
    }
    case "todo/filter": {
      newState = handleTodoFilter(state, action.payload);
      break;
    }
    case "todo/sort": {
      newState = handleTodoSort(state, action.payload);
      break;
    }
    case "todo/reorder": {
      newState = handleTodoReorder(state, action.payload);
      break;
    }
    case "todo/change": {
      newState = handleTodoChange(state, action.payload);
      break;
    }
    default:
      newState = state;
  }

  saveToLocalStorage("todo-state", newState);

  return newState;
}

export { todoReducer };
export type {
  TodoAction,
  TodoChangeAction,
  TodoFilter,
  TodoItem,
  TodoReorderAction,
  TodoSort,
  TodoState,
};
