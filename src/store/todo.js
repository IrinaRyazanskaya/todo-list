const initialTodoState = {
    items: [
        {
            value: 'Сделать уборку',
            isDone: true,
            optionId: 1
        },
        {
            value: 'Сходить в магазин',
            isDone: false,
            optionId: 2
        },
        {
            value: 'Приготовить ужин',
            isDone: false,
            optionId: 3
        }
    ],
};

function handleTodoAdd(state, text) {
    const newItems = [
        ...state.items,
        {
            value: text,
            isDone: false,
            optionId: state.items.length + 1
        }
    ];

    return {
        items: newItems,
    };
}

function handleTodoDelete(state, id) {
    const newItems = state.items.filter(item => {
        return item.optionId !== id;
    });

    return {
        items: newItems,
    };
}

function handleTodoDone(state, id) {
    const newItems = state.items.map(item => {
        const newItem = { ...item };

        if (item.optionId === id) {
            newItem.isDone = !item.isDone;
        }

        return newItem;
    });

    return {
        items: newItems,
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
        default:
            return state;
    }
}

export { todoReducer };
