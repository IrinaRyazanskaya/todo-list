import { getFromLocalStorage, saveToLocalStorage } from '../utils/local-storage';

const defaultTodoState = {
    items: [],
    filter: "all",
    sort: "normal"
};

const initialTodoState = getFromLocalStorage("todo-state", defaultTodoState);

function handleTodoAdd(state, text) {
    const newItems = [
        ...state.items,
        {
            value: text,
            isDone: false,
            optionId: state.items.length + 1,
        }
    ];

    return {
        items: newItems,
        filter: state.filter,
        sort: state.sort,
    };
}

function handleTodoDelete(state, id) {
    const newItems = state.items.filter((item) => {
        return item.optionId !== id;
    });

    return {
        items: newItems,
        filter: state.filter,
        sort: state.sort,
    };
}

function handleTodoDone(state, id) {
    const newItems = state.items.map((item) => {
        const newItem = { ...item };

        if (item.optionId === id) {
            newItem.isDone = !item.isDone;
        }

        return newItem;
    });

    return {
        items: newItems,
        filter: state.filter,
        sort: state.sort,
    };
}

function handleTodoFilter(state, filterValue) {
    return {
        ...state,
        filter: filterValue,
    };
}

function handleTodoSort(state, sortValue) {
    return {
        ...state,
        sort: sortValue,
    };
}

function todoReducer(state = initialTodoState, action) {
    let newState;

    switch (action.type) {
        case 'todo/add': {
            newState = handleTodoAdd(state, action.payload);
            break;
        }
        case 'todo/delete': {
            newState = handleTodoDelete(state, action.payload);
            break;
        }
        case 'todo/done': {
            newState = handleTodoDone(state, action.payload);
            break;
        }
        case 'todo/filter': {
            newState = handleTodoFilter(state, action.payload);
            break;
        }
        case 'todo/sort': {
            newState = handleTodoSort(state, action.payload);
            break;
        }
        default:
            newState = state;
    }

    saveToLocalStorage("todo-state", newState);

    return newState;
}

export { todoReducer };
