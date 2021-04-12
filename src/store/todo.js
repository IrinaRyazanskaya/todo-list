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
        ...state,
        items: newItems
    };
}

function handleTodoDelete(state, id) {
    const newItems = state.items.filter((item) => {
        return item.optionId !== id;
    });

    return {
        ...state,
        items: newItems
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
        ...state,
        items: newItems
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

function handleTodoReorder(state, {source, destination}) {
    const reorderedItems = [...state.items];

    const sourceIndex = reorderedItems.findIndex((item) => {
        return item.optionId === source;
    });

    const destinationIndex = reorderedItems.findIndex((item) => {
        return item.optionId === destination;
    });

    const [reorderedItem] = reorderedItems.splice(sourceIndex, 1);
    reorderedItems.splice(destinationIndex, 0, reorderedItem);

    return {
        ...state,
        items: reorderedItems
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
        case 'todo/reorder': {
            newState = handleTodoReorder(state, action.payload);
            break;
        }
        default:
            newState = state;
    }

    saveToLocalStorage("todo-state", newState);

    return newState;
}

export { todoReducer };
