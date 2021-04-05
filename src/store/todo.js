const initialTodoState = {
    items: [],
    filter: 'all',
    sort: 'normal',
};

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
    switch (action.type) {
        case 'todo/add': {
            return handleTodoAdd(state, action.payload);
        }
        case 'todo/delete': {
            return handleTodoDelete(state, action.payload);
        }
        case 'todo/done': {
            return handleTodoDone(state, action.payload);
        }
        case 'todo/filter': {
            return handleTodoFilter(state, action.payload);
        }
        case 'todo/sort': {
            return handleTodoSort(state, action.payload);
        }
        default:
            return state;
    }
}

export { todoReducer };
