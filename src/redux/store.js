import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import dataReducer from './reducers/dataReducer';

const initialState = {}

const middleware = [thunk];

const reducers = combineReducers({
    data: dataReducer,
});

let enhancer;

if (process.env.NODE_ENV === "development") {
    enhancer = compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
} else {
    enhancer = compose(
        applyMiddleware(...middleware)
    );
}

const store = createStore(
    reducers,
    initialState,
    enhancer
)

export default store;