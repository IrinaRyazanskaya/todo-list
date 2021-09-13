import { createStore, combineReducers } from 'redux';

import { todoReducer } from './todo';

const store = createStore(
    combineReducers({
        todo: todoReducer,
    })
);

export { store };
